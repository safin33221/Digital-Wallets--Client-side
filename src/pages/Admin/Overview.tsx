
import OverviewSkeleton from "@/components/ui/Skeleton/OverviewSkeleton";
import { useGetUserStatQuery } from "@/redux/features/stat/stat.api";
import { useGetAllTransactionQuery } from "@/redux/features/Transaction/transaciton.api";
import { Ban, ShieldCheck, UserCheck, UserCog, UserX, Wallet } from "lucide-react";

export default function Overview() {
    const { data, isLoading } = useGetUserStatQuery(undefined)
    const { data: transactionData } = useGetAllTransactionQuery(undefined)
    const stats = data?.data
    console.log(stats);
    if (isLoading) return <OverviewSkeleton />
    return (
        <>

            <section className="py-10">
                <div className="container mx-auto px-4 space-y-10">
                    {/* Top Highlight Section */}
                    < div className="grid gap-6 md:grid-cols-3" >
                        <div className="col-span-2 bg-gradient-to-r bg-primary/30  p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                            <h2 className="text-3xl font-bold">Admin Overview</h2>
                            <p className="mt-2 ">
                                Quick glance at your user base & verification status.
                            </p>
                            <div className="mt-6 flex items-center gap-10">
                                <div>
                                    <h3 className="text-4xl font-extrabold">{stats?.totalAllUser}</h3>
                                    <p className="text-sm ">All Users</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-extrabold">{stats?.totalAgent}</h3>
                                    <p className="text-sm ">Agents</p>
                                </div>

                            </div>
                        </div>

                        <div className=" bg-secondary/40 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
                            <ShieldCheck className="size-10 text-green-600 mb-2" />
                            <h3 className="text-2xl font-bold">{stats?.totalVerifiedUser}</h3>
                            <p className="text-gray-500">Verified Users</p>
                        </div>
                    </div >

                    {/* Stats Grid */}
                    < div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" >
                        <div className=" bg-secondary/40 p-6 rounded-xl shadow flex flex-col items-center">
                            <UserX className="size-8 text-yellow-500 mb-2" />
                            <h3 className="text-xl font-bold">{stats?.totalNonVerifiedUser}</h3>
                            <p className="text-gray-500">Non-Verified</p>
                        </div>
                        <div className=" bg-secondary/40 p-6 rounded-xl shadow flex flex-col items-center">
                            <Ban className="size-8 text-red-500 mb-2" />
                            <h3 className="text-xl font-bold">{stats.totalBlockedUser}</h3>
                            <p className="text-gray-500">Blocked</p>
                        </div>
                        <div className=" bg-secondary/40 p-6 rounded-xl shadow flex flex-col items-center">
                            <UserCheck className="size-8 text-purple-500 mb-2" />
                            <h3 className="text-xl font-bold">{stats.totalNonBlockedUser}</h3>
                            <p className="text-gray-500">Active Users</p>
                        </div>
                        <div className=" bg-secondary/40 p-6 rounded-xl shadow flex flex-col items-center">
                            <UserCog className="size-8 text-indigo-500 mb-2" />
                            <h3 className="text-xl font-bold">{stats.totalUser}</h3>
                            <p className="text-gray-500">Normal Users</p>
                        </div>
                    </div >
                    <div>
                        <div className=" bg-secondary/40 p-6 rounded-xl shadow flex flex-col items-center">
                            <Wallet className="size-8 text-primary mb-2" />
                            <h3 className="text-xl font-bold">{transactionData?.data?.meta?.total}</h3>
                            <p className="text-gray-500">Total Transaction</p>
                        </div>
                    </div>
                </div >
            </section >

        </>
    );
};
