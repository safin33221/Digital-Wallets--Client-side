/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useGetMeQuery, useUpdateUserMutation } from "@/redux/features/user/user.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import z from "zod"

const EditProfile = z
    .object({
        oldPassword: z.string().min(6, "Old password is required"),
        password: z.string().min(6, "New password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Please confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })

export function ChangePasswordModal() {
    const { data, isLoading } = useGetMeQuery(undefined)
    const [updateUser] = useUpdateUserMutation()
    const [open, setOpen] = useState(false)
    const userInfo = data?.data

    const form = useForm<z.infer<typeof EditProfile>>({
        resolver: zodResolver(EditProfile),
        defaultValues: {
            oldPassword: "",
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof EditProfile>) => {
        try {
            const res = await updateUser({
                id: userInfo._id,
                updateData: {
                    oldPassword: values.oldPassword,
                    password: values.password,
                },
            })
            console.log(res);
            if (res?.data?.success) {
                toast.success("Password updated successfully")
                setOpen(false)
                form.reset()
            }
            else {
                toast.error(
                    (res as any)?.error?.data?.message ||
                    (res as any)?.error?.message ||
                    "Failed to update password"
                )

            }

        } catch (error) {
            toast.error("Something went wrong")
            console.log(error)
        }
    }

    if (isLoading) return null

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="mx-5">Change Password</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md ">
                <DialogHeader>
                    <DialogTitle>Change Your Password</DialogTitle>
                </DialogHeader>
                <div className="w-full">
                    <Form {...form}>
                        <form
                            id="changePasswordForm"
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            {/* Old Password */}
                            <FormField
                                control={form.control}
                                name="oldPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Old Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter old password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* New Password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter new password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Confirm Password */}
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Confirm new password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <DialogFooter className="sm:justify-end">
                    <Button form="changePasswordForm" type="submit">
                        Save Changes
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
