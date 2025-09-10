import { ViewUserDetailsModal } from "@/components/Modules/Admin/ViewUserDetailsModal";
import { Button } from "@/components/ui/button";
import { useGetAllUsersQuery, useUpdateUserMutation } from "@/redux/features/user/user.api";
import type { IUser } from "@/types/user.type";
import { useState } from "react";
import { toast } from "sonner";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function ManageAgents() {

  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const [currentPage, setCurrentPage] = useState<number>(1)
  const query = {
    searchTerm: search || undefined,
    approved: statusFilter !== "all" ? statusFilter === "Approved" ? true : false : undefined,
    page: currentPage,
    role: "AGENT"
  };
  const { data: users, isLoading } = useGetAllUsersQuery(query);
  const totalPage: number = users?.data?.meta?.totalPage

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
        <h1 className="text-2xl font-bold">Agent Management</h1>

        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="🔍 Search by phone or type"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          >
            <option value="all">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Suspend">Suspend</option>

          </select>

        </div>
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
              : users?.data?.data?.map((user: IUser) => (
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
        <Pagination>
          <PaginationContent>
            <PaginationItem className={currentPage === 1 ? "opacity-35 cursor-no-drop" : ""}>
              <PaginationPrevious onClick={() => currentPage != 1 && setCurrentPage((prev) => prev - 1)} />
            </PaginationItem>

            {
              Array.from({ length: totalPage }, (_, id) => id + 1).map((page) => (
                <PaginationItem>
                  <PaginationLink isActive={currentPage === page}>{page}</PaginationLink>
                </PaginationItem>
              ))
            }

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem className={currentPage === totalPage ? "opacity-35 cursor-no-drop" : ""}>
              <PaginationNext onClick={() => currentPage != totalPage && setCurrentPage((prev) => prev + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        {/* Empty State */}
        {!isLoading && users?.data?.length === 0 && (
          <p className="text-center py-4 text-gray-500">No agents found</p>
        )}
      </div>
    </div>
  );
}
