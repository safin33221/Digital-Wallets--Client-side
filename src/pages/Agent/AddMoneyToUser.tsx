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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
    toUserPhone: z.string()
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
    amount: z.string(),
    password: z.string()
})

export default function AddMoneyComponent() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
    }

    return (
        <div className=" flex items-center justify-center p-6">
            <Form {...form}>
                <form
                    id="AddMoneyToUser"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-md backdrop-blur-md rounded-2xl shadow-2xl p-6 border">
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
                            <h2 className="text-lg font-semibold">Add Money — Quick Transfer</h2>
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
                                <FormDescription className="sr-only">
                                    This is the account number where money will be sent.
                                </FormDescription>
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

                                        placeholder="Enter the amount you want to transfer."
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormDescription className="sr-only">
                                    Enter the amount you want to transfer.
                                </FormDescription>
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

                                        placeholder=" Your password to confirm transaction."
                                        {...field}
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormDescription className="sr-only">
                                    Your password to confirm transaction.
                                </FormDescription>
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
    );
}