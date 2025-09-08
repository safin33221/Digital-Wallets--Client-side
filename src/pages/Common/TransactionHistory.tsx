/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetMyTransactionQuery } from "@/redux/features/Transaction/transaciton.api";

export default function TransactionHistory() {
  const { data: transInfo, isLoading } = useGetMyTransactionQuery(undefined);
  const transactions = transInfo?.data || [];

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Transaction History</h1>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border rounded-lg shadow-sm">
          <thead>
            <tr className="">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">To User Phone</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              // Skeleton rows while loading
              Array.from({ length: 6 }).map((_, idx) => (
                <tr key={idx} className="animate-pulse border-t">
                  {Array.from({ length: 7 }).map((__, i) => (
                    <td key={i} className="px-4 py-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : transactions.length > 0 ? (
              transactions.map((tx: any, index: number) => (
                <tr
                  key={tx._id}
                  className={`border-t hover:bg-primary/10 text-lg ${
                    index % 2 === 0 ? "" : ""
                  }`}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 font-mono text-xs">{tx.transactionId}</td>
                  <td className="px-4 py-2">{tx.userPhone}</td>
                  <td className="px-4 py-2">{tx.type}</td>
                  <td className="px-4 py-2">
                    {tx.amount ? `${tx.amount.toLocaleString()} BTD` : "-"}
                  </td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        tx.status === "SUCCESS"
                          ? "bg-green-100 text-green-700"
                          : tx.status === "FAILED"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {tx.status || "PENDING"}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-xs text-gray-500">
                    {tx.createdAt
                      ? new Date(tx.createdAt).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-gray-400"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
