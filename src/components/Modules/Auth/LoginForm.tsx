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
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/features/auth/auth.api";

const loginSchema = z.object({
    phoneNumber: z.string(),
    password: z.string()
})
export default function LoginForm() {
    const [login] = useLoginMutation()
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema)
    })
    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        try {
            const res = await login(data)
            console.log(res);
            if (res.data.success) {
                navigate('/')
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <Card className="w-full  max-w-md mx-auto ">
                <CardHeader>

                    <Link to={`/`}>
                        <Button className='w-fit py-4'>
                            Back To Home
                        </Button>
                    </Link>
                    <CardTitle className="text-lg text-right font-bold">Login to your account</CardTitle>
                    <CardDescription className="sr-only ">
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Link to={"/register"}> <Button variant="link">Sign Up</Button></Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form id="register-user"
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8">
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Account Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Phone Number" {...field} value={field.value || ""} />
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
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Password" {...field} value={field.value || ""} />
                                        </FormControl>
                                        <FormDescription className="sr-only">
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Login
                            </Button>

                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="flex-col gap-2">

                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};
