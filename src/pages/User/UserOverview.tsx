import { useGetSingleUserStatQuery } from "@/redux/features/stat/stat.api";

export default function UserOverview() {
  const { data, isLoading, error } = useGetSingleUserStatQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  const walletBalance = data?.data?.walletBalance?.balance ?? 0;
  const recentTransactions = data?.data?.recentTransaction ?? [];

  // Last transaction (first one if sorted by latest)
  const lastTransaction = recentTransactions.length > 0 ? recentTransactions[0] : null;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">User Overview</h1>

      {/* Wallet Balance */}
      <div className="border rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold">Wallet Balance</h2>
        <p className="text-2xl font-bold">{walletBalance} ৳</p>
      </div>

      {/* Last Transaction */}
      {lastTransaction && (
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold">Last Transaction</h2>
          <p><span className="font-medium">Transaction ID:</span> {lastTransaction._id}</p>
          <p><span className="font-medium">Amount:</span> {lastTransaction.amount} ৳</p>
          <p><span className="font-medium">Phone:</span> {lastTransaction.userPhone}</p>
          <p><span className="font-medium">Status:</span> {lastTransaction.status}</p>
          <p><span className="font-medium">Date:</span> {new Date(lastTransaction.createdAt).toLocaleString()}</p>
        </div>
      )}

      {/* Recent Transactions Table */}
      <div className="border rounded-lg p-4 shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Recent 5 Transactions</h2>
        {recentTransactions.length > 0 ? (
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2 text-left">Transaction ID</th>
                <th className="border px-3 py-2">Phone</th>
                <th className="border px-3 py-2">Amount</th>
                <th className="border px-3 py-2">Status</th>
                <th className="border px-3 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx: any) => (
                <tr key={tx._id}>
                  <td className="border px-3 py-2">{tx._id}</td>
                  <td className="border px-3 py-2">{tx.userPhone}</td>
                  <td className="border px-3 py-2">{tx.amount} ৳</td>
                  <td className="border px-3 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${tx.status === "success"
                          ? "bg-green-500"
                          : tx.status === "pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="border px-3 py-2">
                    {new Date(tx.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No transactions found</p>
        )}
      </div>
    </div>
  );
}
