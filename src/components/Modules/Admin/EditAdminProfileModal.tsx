import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useGetMeQuery, useUpdateUserMutation } from "@/redux/features/user/user.api"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const EditProfile = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    })
})

export function EditAdminProfileModal() {
    const { data, isLoading } = useGetMeQuery(undefined)
    const [updateUser] = useUpdateUserMutation()
    const userInfo = data?.data
    const form = useForm<z.infer<typeof EditProfile>>({
        resolver: zodResolver(EditProfile)
    })

    const onSubmit = async (data: z.infer<typeof EditProfile>) => {
        const updateData = { ...data }
        try {
            const res = await updateUser({ updateData, id: userInfo._id })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    if (isLoading) return ""
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Edit Your Profile</DialogTitle>

                </DialogHeader>
                <div className="  w-full">
                    <Form {...form}>
                        <form id="adminProfile" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your name" {...field} value={field.value || userInfo.name} />
                                        </FormControl>
                                        <FormDescription className="sr-only">
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
                <DialogFooter className="sm:justify-end">
                    <Button form="adminProfile" type="submit">Save Change</Button>
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

