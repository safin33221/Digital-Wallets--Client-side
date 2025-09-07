/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"

import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";


const registerSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.email(),
    phoneNumber: z.string()
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
    password: z.string(),
    role: z.string()


})

export default function RegisterForm() {
    const [createUser] = useRegisterMutation()
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {
        const toasterId = toast.loading("Registration....")
        try {
            const res = await createUser(data)
            if (res?.data?.success) {
                toast.success("Registration successful", { id: toasterId })
                navigate("/login")
            } else {
                toast.error((res?.error as { data?: { message?: string } })?.data?.message || "Registration failed", { id: toasterId })

            }
            console.log(res);
        } catch (error: any) {

            const errMsg =
                error?.data?.message || error?.message || "Something went wrong!";
            toast.error(errMsg, { id: toasterId });
            console.error("Registration Error:", error)
        }
    }
    return (
        <div className="mx-auto w-full max-w-md">
            <Card className="">
                <CardHeader>
                    <Link to={`/`}>
                        <Button className='w-fit py-4'>
                            Back To Home
                        </Button>
                    </Link>
                    <CardTitle className="text-right mr-5 text-xl font-bold w-full">Register your account</CardTitle>
                    <CardDescription className="sr-only">
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Link to={`/login`}>
                            <Button variant="link">Sign In</Button>
                        </Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form id="register-user"
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} value={field.value || ""} />
                                        </FormControl>
                                        <FormDescription className="sr-only">
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} value={field.value || ""} />
                                        </FormControl>
                                        <FormDescription className="sr-only">
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Account Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Account Number" {...field} value={field.value || ""} />
                                        </FormControl>
                                        <FormDescription className="sr-only">
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem className=" flex items-center">
                                        <FormLabel>Register As :</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex gap-10"
                                            >
                                                <FormItem className="flex items-center gap-3 border p-2  rounded-lg">
                                                    <FormControl>
                                                        <RadioGroupItem value="AGENT" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Agent
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center gap-3 border p-2  rounded-lg">
                                                    <FormControl>
                                                        <RadioGroupItem value="USER" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        User
                                                    </FormLabel>
                                                </FormItem>

                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Set a Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Account Number" {...field} value={field.value || ""} />
                                        </FormControl>
                                        <FormDescription className="sr-only">
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Registration
                            </Button>

                        </form>
                    </Form>

                </CardContent>
                <CardFooter className="flex-col gap-2">
                    {/* <Button form="register-user" type="submit" className="w-full">
                        Login
                    </Button> */}
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
