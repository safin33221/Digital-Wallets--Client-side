import { role } from "@/constants/Role";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import type { IUser } from "@/types/user.type";

export default function ManageAgents() {
  const { data: users, isLoading } = useGetAllUsersQuery({ role: role.agent });
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
                    {user.isVerified ? (
                      <span className="text-green-600 font-medium">
                        ✔ Verified
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium">
                        ❌ Not Verified
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
                    <button className="px-2 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600">
                      View
                    </button>
                    <button className="px-2 py-1 text-sm rounded bg-yellow-500 text-white hover:bg-yellow-600">
                      Edit
                    </button>
                    <button className="px-2 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600">
                      Block
                    </button>
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
