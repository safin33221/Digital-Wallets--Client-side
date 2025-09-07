import { ViewUserDetailsModal } from "@/components/Modules/Admin/ViewUserDetailsModal";
import { Button } from "@/components/ui/button";
import { role } from "@/constants/Role";
import { useGetAllUsersQuery, useUpdateUserMutation } from "@/redux/features/user/user.api";
import type { IUser } from "@/types/user.type";
import { toast } from "sonner";

export default function ManageUser() {
  const { data: users, isLoading } = useGetAllUsersQuery({ role: role.user });
  const [updateUser] = useUpdateUserMutation()
  const handleUpdateUser = async (data: { id: string, status: string }) => {
    try {
      const updatedData = {
        updateData: { status: data.status },
        id: data.id
      }

      const res = await updateUser(updatedData)
      console.log(res?.data?.success);
      if (res?.data?.success) {
        toast.success("Status Update Successful")
      }
    } catch (error) {
      console.log(error);
      toast.error("Status Update fail")
    }
  }
  return (
    <div className="p-6 space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">👥 User Management</h1>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Role</th>

              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? // Skeleton rows
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="animate-pulse border-b">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <td key={j} className="p-3">
                      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </td>
                  ))}
                </tr>
              ))
              : users?.data?.map((user: IUser) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phoneNumber || "—"}</td>
                  <td className="p-3">{user.role}</td>

                  <td className="p-3">
                    {user.status === "BLOCKED" ? (
                      <span className="px-2 py-1 rounded bg-red-100 text-red-600">
                        Blocked
                      </span>
                    ) : (
                      <span className="px-2 py-1 rounded bg-green-100 text-green-600">
                        Active
                      </span>
                    )}
                  </td>
                  <td className="p-3 flex gap-2">
                    <ViewUserDetailsModal user={user} />

                    {
                      user.status === "BLOCKED" ? (
                        <Button
                          onClick={() => handleUpdateUser({ id: user._id, status: "UNBLOCK" })}
                          variant={`outline`} className="px-2 py-1 text-sm rounded">
                          Un Blocked
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleUpdateUser({ id: user._id, status: "BLOCKED" })}
                          className="px-2 py-1 min-w-24 text-sm rounded bg-red-500 text-white hover:bg-red-600">
                          Block
                        </Button>
                      )
                    }
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Empty State */}
        {!isLoading && users?.data?.length === 0 && (
          <p className="text-center py-4 text-gray-500">No users found</p>
        )}
      </div>
    </div>
  );
}
