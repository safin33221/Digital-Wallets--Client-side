/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useAddMoneyToMyAccountMutation } from "@/redux/features/agent/agent.api";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import AddMoneySkeleton from "@/components/ui/Skeleton/AddMoneySkeleton";

// ✅ Schema
const formSchema = z.object({
    paymentMethod: z.string(),
    amount: z.string(),
    password: z.string(),

});

export default function AddBalance() {
    const [addMoney] = useAddMoneyToMyAccountMutation();
    const { data, isLoading } = useGetMeQuery(undefined);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const agentInfo = {
        name: data?.data?.name,
        balance: data?.data?.wallet?.balance,
    };

    const onSubmit = async (formData: z.infer<typeof formSchema>) => {
        const toasterId = toast.loading("adding...");
        try {
            const res = await addMoney(formData);

            if (res?.data?.success) {
                toast.success("Money Transfer Successful", { id: toasterId });
            } else {
                toast.error((res as any)?.error?.data?.message || "Transfer failed", { id: toasterId })
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", { id: toasterId });
        }
    };
    if (isLoading) return <AddMoneySkeleton />
    return (
        <div className="flex items-center justify-center p-6">
            <div className="md:grid grid-cols-12 w-full gap-10 space-y-6">
                {/* Agent Balance Card */}
                <div className="rounded-2xl flex flex-col items-center justify-center text-left h-full shadow-md border backdrop-blur-md p-6 col-span-4">
                    <h3 className="text-2xl font-bold mb-2">Available Balance:</h3>
                    <p className="text-2xl font-bold">{agentInfo?.balance} BTD</p>
                </div>

                {/* Transfer Form */}
                <div className="col-span-8 max-w-2xl mx-auto">
                    <Form {...form}>
                        <form
                            id="addBalance"
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full backdrop-blur-md rounded-2xl shadow-2xl p-6 border space-y-5"
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
                                        Add Money — Quick Transfer
                                    </h2>
                                    <p className="text-sm text-slate-500">
                                        Add Money to Your account
                                    </p>
                                </div>
                            </div>


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
                                                placeholder="Enter your password"
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Payment Method */}
                            <FormField
                                control={form.control}
                                name="paymentMethod"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Payment Method</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a payment method" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="card">Card</SelectItem>
                                                <SelectItem value="bank">Bank</SelectItem>
                                                <SelectItem value="bkash">bKash</SelectItem>
                                                <SelectItem value="nagad">Nagad</SelectItem>
                                                <SelectItem value="rocket">Rocket</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription className="sr-only">
                                            Choose your preferred payment method
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <div className="mt-6">
                                <Button form="addBalance" type="submit" className="w-full">
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
