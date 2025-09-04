import { role } from "@/constants/Role";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";

export default function ManageAgents() {
  const { data: users } = useGetAllUsersQuery({ role: role.agent })
  return (
    <div className="p-6 space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold">👥 Agent Management</h1>

        {/* <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="🔍 Search by name, email or phone"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />

          <select
            // value={filter}
            // onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="all">All Users</option>
            <option value="verified">Verified</option>
            <option value="non-verified">Non-Verified</option>
            <option value="blocked">Blocked</option>
            <option value="unblocked">Unblocked</option>
            <option value="agent">Agents</option>
            <option value="user">Users</option>
          </select>
        </div> */}
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
              <th className="p-3 text-left">Verified</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users?.data?.map((user: IUser) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phoneNumber || "—"}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">
                    {user.isVerified ? (
                      <span className="text-green-600 font-medium">✔ Verified</span>
                    ) : (
                      <span className="text-red-600 font-medium">❌ Not Verified</span>
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
        {users?.length === 0 && (
          <p className="text-center py-4 text-gray-500">No users found</p>
        )}
      </div>
    </div>
  );
};
