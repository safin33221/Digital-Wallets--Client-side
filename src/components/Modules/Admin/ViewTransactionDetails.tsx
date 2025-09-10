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

interface ViewTransactionDetailsProps {
  txn: any; // Replace with your transaction type later
}

export function ViewTransactionDetails({ txn }: ViewTransactionDetailsProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-2 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600">
          View
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Transaction Details</DialogTitle>
          <DialogDescription>
            Transaction ID:{" "}
            <span className="font-mono font-semibold">{txn?.transactionId}</span>
          </DialogDescription>
        </DialogHeader>

        {/* Transaction Info */}
        <div className="grid gap-4 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Type:</span>
            <span className="capitalize">{txn?.type}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Amount:</span>
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(txn?.amount)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span
              className={`px-2 py-1 rounded ${
                txn?.status === "success"
                  ? "bg-green-100 text-green-700"
                  : txn?.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {txn?.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{new Date(txn?.createdAt).toLocaleString()}</span>
          </div>

          <hr className="my-2" />

          {/* Sender Info */}
          <h3 className="font-semibold text-base">Sender Info</h3>
          <div className="flex justify-between">
            <span>Name:</span>
            <span>{txn?.userId?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Email:</span>
            <span>{txn?.userId?.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Phone:</span>
            <span>{txn?.userPhone}</span>
          </div>

          <hr className="my-2" />

          {/* Receiver Info */}
          <h3 className="font-semibold text-base">Receiver Info</h3>
          <div className="flex justify-between">
            <span>Name:</span>
            <span>{txn?.toUserId?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Email:</span>
            <span>{txn?.toUserId?.email}</span>
          </div>
          <div className="flex justify-between">
            <span>Phone:</span>
            <span>{txn?.toUserPhone}</span>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
