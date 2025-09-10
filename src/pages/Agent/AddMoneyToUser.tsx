/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddMoneyToUserMutation } from "@/redux/features/agent/agent.api";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

// ✅ Schema
const formSchema = z.object({
    toUserPhone: z
        .string()
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message:
                "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
    amount: z.string(),
    password: z.string(),
});

export default function AddMoneyComponent() {
    const [addMoney] = useAddMoneyToUserMutation();
    const { data } = useGetMeQuery(undefined)
    console.log(data?.data?.wallet?.balance);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    // 🔹 Mock agent balance (replace with API)
    const agentInfo = {
        name: data?.data?.name,
        balance: data?.data?.wallet?.balance,

    };

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const toasterId = toast.loading("Sending....")
        try {
            const res = await addMoney(data);

            // Use type assertion or optional chaining to avoid error
            if ((res as any)?.data?.success) {
                toast.success("Money Transfer Successful", { id: toasterId })
            } else {
                toast.error((res as any)?.error?.data?.message || "Transfer failed", { id: toasterId })
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Wrong", { id: toasterId })
        }
    };

    return (
        <div className="flex items-center justify-center p-6 ">
            <div className=" md:grid grid-cols-12  w-full gap-10 space-y-6">
                {/* Agent Balance Card */}
                <div className="rounded-2xl flex flex-col items-center justify-center text-left h-full shadow-md border backdrop-blur-md p-6 col-span-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold ">Available Balance:</h3>
                            <p className="text-2xl font-bold ">
                                {agentInfo?.balance} BTD
                            </p>
                        </div>

                    </div>


                </div>

                {/* Transfer Form */}

                <div className="col-span-8 max-w-2xl mx-auto">

                    <Form {...form}>
                        <form
                            id="AddMoneyToUser"
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full backdrop-blur-md rounded-2xl shadow-2xl p-6 border "
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-indigo-50">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 1v22"
                                            stroke="#4f46e5"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 8H3"
                                            stroke="#4f46e5"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21 16H3"
                                            stroke="#4f46e5"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Send Money  — Quick Transfer
                                    </h2>
                                    <p className="text-sm text-slate-500">
                                        Provide receiver account, amount, and your password.
                                    </p>
                                </div>
                            </div>

                            {/* To User Account Number */}
                            <FormField
                                control={form.control}
                                name="toUserPhone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>To User Account Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter account number"
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Amount */}
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="Enter amount"
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Your password"
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <div className="mt-6">
                                <Button form="AddMoneyToUser" type="submit" className="w-full">
                                    Send Money
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
