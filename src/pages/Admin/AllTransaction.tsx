/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useGetAllTransactionQuery } from "@/redux/features/Transaction/transaciton.api";

export default function AllTransaction() {

  const { data, isLoading } = useGetAllTransactionQuery(undefined)
  if (isLoading) return
  return (
    <div className="p-6 space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">💳 Transaction History</h1>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="🔍 Search by phone or type"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />

          <select
            // value={statusFilter}
            // onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="all">All Status</option>
            <option value="success">Success</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>

          <select
            // value={typeFilter}
            // onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="all">All Types</option>
            <option value="add_money">Add Money</option>
            <option value="withdraw">Withdraw</option>
            <option value="transfer">Transfer</option>
            <option value="cashIn">Cash In</option>
            <option value="cashOut">Cash Out</option>
          </select>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left">Txn ID</th>
              <th className="p-3 text-left">User Phone</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {data?.data?.map((txn: any) => (
              <tr
                key={txn._id}
                className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="p-3 text-sm">{txn._id}</td>
                <td className="p-3">{txn.userPhone}</td>
                <td className="p-3 capitalize">{txn.type}</td>
                <td className="p-3 font-medium">${txn.amount}</td>
                <td className="p-3">
                  {txn.status === "success" && (
                    <span className="px-2 py-1 rounded bg-green-100 text-green-600">
                      ✅ Success
                    </span>
                  )}
                  {txn.status === "pending" && (
                    <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-600">
                      ⏳ Pending
                    </span>
                  )}
                  {txn.status === "failed" && (
                    <span className="px-2 py-1 rounded bg-red-100 text-red-600">
                      ❌ Failed
                    </span>
                  )}
                </td>
                <td className="p-3 text-sm text-gray-500">
                  {txn.createdAt ? new Date(txn.createdAt).toLocaleString() : "—"}
                </td>
                <td className="p-3">
                  <Button className="">
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data?.data?.length === 0 && (
          <p className="text-center py-4 text-gray-500">No transactions found</p>
        )}
      </div>
    </div>
  );
};
