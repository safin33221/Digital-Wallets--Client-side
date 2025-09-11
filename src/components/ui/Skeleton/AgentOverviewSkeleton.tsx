import { Skeleton } from "../skeleton";

export default function AgentOverviewSkeleton() {
    return (
        <div className="p-6 space-y-6">
            {/* Transaction Stats by Type Skeleton */}
            <div className="p-4 border rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">Transaction Stats</h2>
                <ul className="space-y-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <li key={i} className="flex justify-between">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-4 w-20" />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Transactions Skeleton */}
            <div className="p-4 border rounded-md shadow-md">
                <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
                <ul className="space-y-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <li
                            key={i}
                            className="p-2 border rounded-md flex justify-between items-center"
                        >
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-40" />
                                <Skeleton className="h-3 w-20" />
                            </div>
                            <Skeleton className="h-3 w-28" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
