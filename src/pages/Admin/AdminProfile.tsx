import { EditAdminProfileModal } from "@/components/Modules/Admin/EditAdminProfileModal";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { User, CheckCircle, XCircle } from "lucide-react";
export default function AdminProfile() {
    const { data: user, isLoading } = useGetMeQuery(undefined)
    if (isLoading) return
    const data = user?.data
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-10">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-bold">My Profile</h1>
                    <p className="text-gray-500">Role: {data.role}</p>
                </div>
                <div className="flex gap-3">
                    <EditAdminProfileModal />

                </div>
            </header>

            {/* Main Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Personal Info */}
                <section className=" p-8 rounded-2xl shadow-xl col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <User className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Personal Information</h2>
                    </div>

                    <div className="flex items-center justify-center">
                        <img className="w-40 h-40 rounded-full " src="" alt="" />
                    </div>

                    <div className="space-y-2 text-lg bg-card md:p-10 rounded-xl w-full md:flex gap-30 items-center ">
                        <div className="space-y-5">
                            <p className="text-4xl"><span className="font-medium ">Name:</span> {data.name}</p>
                            <p className="text-xl"><span className="font-medium">Email:</span> {data.email}</p>
                            <p><span className="font-medium">Phone/Account No:</span> {data.phoneNumber}</p>
                        </div>
                        <div className="border border-primary/30 w-[1px] h-40 max-md:hidden "></div>
                        <div className="space-y-5">
                            <p className="flex  items-center">
                                <span className="font-medium">Status:</span>{" "}
                                {data.status === "UNBLOCK" ? (
                                    <span className="text-green-600 font-semibold flex items-center gap-1">
                                        <CheckCircle className="w-4 h-4" /> UNBLOCK
                                    </span>
                                ) : (
                                    <span className="text-red-600 font-semibold flex items-center gap-1">
                                        <XCircle className="w-4 h-4" /> BLOCKED
                                    </span>
                                )}
                            </p>
                            <p>
                                <span className="font-medium">Verified:</span>{" "}
                                {data.isVerified ? (
                                    <CheckCircle className="inline w-4 h-4 text-green-600" />
                                ) : (
                                    <XCircle className="inline w-4 h-4 text-red-600" />
                                )}
                            </p>
                            <p>
                                <span className="font-medium">Approved:</span>{" "}
                                {data.approved ? (
                                    <CheckCircle className="inline w-4 h-4 text-green-600" />
                                ) : (
                                    <XCircle className="inline w-4 h-4 text-red-600" />
                                )}
                            </p>
                        </div>
                    </div>
                </section>


            </div>

            {/* Optional Full Width Section */}
            {/* <section className="bg-purple-50 dark:bg-purple-900 p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                    <Shield className="w-6 h-6 text-purple-600" /> Account Overview
                </h2>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
                    This section can include a **summary of transactions, recent activity, or any admin notes**.
                    You can expand this as a full-width dashboard element.
                </p>
            </section> */}
        </div>
    );
};
