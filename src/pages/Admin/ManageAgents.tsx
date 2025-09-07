import { ViewUserDetailsModal } from "@/components/Modules/Admin/ViewUserDetailsModal";
import { Button } from "@/components/ui/button";
import { role } from "@/constants/Role";
import { useGetAllUsersQuery, useUpdateUserMutation } from "@/redux/features/user/user.api";
import type { IUser } from "@/types/user.type";
import { toast } from "sonner";

export default function ManageAgents() {
  const { data: users, isLoading } = useGetAllUsersQuery({ role: role.agent });

  const [updateUser] = useUpdateUserMutation()

  const handleUpdateUser = async (data: { id: string, approved: boolean }) => {
    try {
      const updatedData = {
        updateData: { approved: data.approved },
        id: data.id
      }

      const res = await updateUser(updatedData)
      console.log(res);
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
        <h1 className="text-2xl font-bold">👥 Agent Management</h1>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-primary/20">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Verified</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? // Skeleton rows
              Array.from({ length: 7 }).map((_, i) => (
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
                  className="border-b  hover:bg-primary/10"
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phoneNumber || "—"}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    {user.approved ? (
                      <span className="text-green-600 font-medium">
                        ✔ Approved
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium">
                        ❌ Suspend
                      </span>
                    )}
                  </td>
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
                      user.approved ? (
                        <Button
                          onClick={() => handleUpdateUser({ id: user._id, approved: false })}
                          variant={`outline`} className="px-2 py-1 text-sm rounded">
                          Suspend
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleUpdateUser({ id: user._id, approved: true })}
                          className="px-2 py-1 min-w-24 text-sm rounded bg-green-500 text-white hover:bg-green-600">
                          Approved
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
          <p className="text-center py-4 text-gray-500">No agents found</p>
        )}
      </div>
    </div>
  );
}
