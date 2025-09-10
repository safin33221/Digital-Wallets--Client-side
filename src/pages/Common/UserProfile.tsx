import { EditAdminProfileModal } from "@/components/Modules/Admin/EditAdminProfileModal";
import { ChangePasswordModal } from "@/components/Modules/Common/ChangePasswordModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { User, CheckCircle, XCircle, Wallet, CreditCard, Shield } from "lucide-react";

export default function UserProfile() {
  const { data: user, isLoading } = useGetMeQuery(undefined);
  if (isLoading) return null;

  const data = user?.data;
  const wallet = data?.wallet;

  return (
    <div className="p-8  mx-auto space-y-10">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">My Profile</h1>
          <p className="text-muted-foreground">Role: {data.role}</p>
        </div>
      </header>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personal Info */}
        <section className="p-8 rounded-2xl shadow-xl col-span-2 space-y-6 bg-card ">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Personal Information</h2>
          </div>

          <div className="flex items-center justify-center mx-auto">
            <Avatar className="w-40 h-40">
              <AvatarImage src="./avatar.jpg" alt="Profile image" />
              <AvatarFallback className="text-3xl">
                {data?.name?.split("")[0]}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex items-end justify-end">
            <ChangePasswordModal />
            <EditAdminProfileModal />
          </div>

          <div className="space-y-2 text-lg bg-muted/20 p-6 rounded-xl flex flex-col md:flex-row gap-10 items-start md:items-center">
            <div className="space-y-4">
              <p className="text-2xl">
                <span className="font-medium">Name:</span> {data.name}
              </p>
              <p className="text-lg">
                <span className="font-medium">Email:</span> {data.email}
              </p>
              <p>
                <span className="font-medium">Phone/Account No:</span>{" "}
                {data.phoneNumber}
              </p>
            </div>

            <div className="border border-primary/30 w-[1px] h-32 hidden md:block"></div>

            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
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
              <p className="flex items-center gap-2">
                <span className="font-medium">Verified:</span>
                {data.isVerified ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Approved:</span>
                {data.approved ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Wallet Section */}
        <section className=" p-8 rounded-2xl shadow-xl bg-card space-y-6 col-span-2">
          <div className="flex items-center gap-3">
            <Wallet className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">Wallet Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-muted/30 flex flex-col items-center text-center shadow">
              <CreditCard className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Balance</p>
              <p className="text-2xl font-bold">
                {wallet.balance} {wallet.currency}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-muted/30 flex flex-col items-center text-center shadow">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">KYC Status</p>
              <p
                className={`text-lg font-semibold ${wallet.kycStatus === "VERIFIED"
                    ? "text-green-600"
                    : "text-red-600"
                  }`}
              >
                {wallet.kycStatus}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-muted/30 flex flex-col items-center text-center shadow">
              <User className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Frozen Status</p>
              <p
                className={`text-lg font-semibold ${wallet.isFrozen ? "text-red-600" : "text-green-600"
                  }`}
              >
                {wallet.isFrozen ? "Frozen" : "Active"}
              </p>
            </div>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            Last Transaction:{" "}
            <span className="font-medium">
              {new Date(wallet.lastTransaction).toLocaleString()}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
