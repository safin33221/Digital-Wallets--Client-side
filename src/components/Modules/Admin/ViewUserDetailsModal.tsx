/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ViewUserDetailsModalProps {
    user: any; // you can replace `any` with your IUser type later
}

export function ViewUserDetailsModal({ user }: ViewUserDetailsModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="px-2 py-1 text-sm rounded ">
                    View
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>User Details</DialogTitle>
                    <DialogDescription>
                        Full details of <span className="font-semibold">{user?.name}</span>.
                    </DialogDescription>
                </DialogHeader>

                {/* User Details */}
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label>Name</Label>
                        <Input className="" value={user?.name} disabled />
                    </div>

                    <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input className="" value={user?.email} disabled />
                    </div>

                    <div className="grid gap-2">
                        <Label>Phone</Label>
                        <Input className="" value={user?.phoneNumber} disabled />
                    </div>

                    <div className="flex  justify-between">
                        <div className="grid gap-2">
                            <Label>Role</Label>
                            <Input className="" value={user?.role} disabled />
                        </div>

                        <div className="grid gap-2">
                            <Label>Status</Label>
                            <Input className="" value={user?.status} disabled />
                        </div>
                        <div className="grid gap-2">
                            <Label>KYC Status</Label>
                            <Input className="" value={user?.wallet?.kycStatus} disabled />
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Wallet Balance</Label>
                        <Input className="" value={`${user?.wallet?.balance} ${user?.wallet?.currency}`} disabled />
                    </div>



                    <div className="grid gap-2">
                        <Label>Account Created</Label>
                        <Input className=""
                            value={new Date(user?.createdAt).toLocaleString()}
                            disabled
                        />
                    </div>
                </div>

                {/* Footer Buttons */}
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
