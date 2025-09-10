/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleAgentTransStatQuery } from "@/redux/features/stat/stat.api";

export default function AgentOverview() {
    const { data, isLoading, isError } = useGetSingleAgentTransStatQuery(undefined);
    const statsByType = data?.data?.statsByType || [];
    const recentTrans = data?.data?.recentTransactions || [];

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching data</p>;

    return (
        <div className="p-6 space-y-6">
            {/* Transaction Stats by Type */}
            <div className="p-4 border rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">Transaction Stats</h2>
                <ul className="space-y-1">
                    {statsByType.map((stat: any) => (
                        <li key={stat._id} className="flex justify-between">
                            <span className="capitalize">{stat._id.replace("_", " ")}</span>
                            <span>
                                {stat.totalAmount} BTD ({stat.count} tx)
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Transactions */}
            <div className="p-4 border rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
                {recentTrans.length > 0 ? (
                    <ul className="space-y-2">
                        {recentTrans.map((tran: any) => (
                            <li
                                key={tran._id}
                                className="p-2 border rounded-md flex justify-between items-center"
                            >
                                <div>
                                    <p className="font-medium">
                                        {tran.toUserPhone} — <span className="capitalize">{tran.type.replace("_", " ")} {tran.paymentMethod && "via"} {tran.paymentMethod}</span>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {tran.amount} BTD
                                    </p>
                                </div>
                                <span className="text-gray-500 text-sm">
                                    {new Date(tran.createdAt).toLocaleString()}
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recent transactions found.</p>
                )}
            </div>
        </div>
    );
}
