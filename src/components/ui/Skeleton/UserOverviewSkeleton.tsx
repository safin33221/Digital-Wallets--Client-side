
import { Skeleton } from "@/components/ui/skeleton";

export default function UserOverviewSkeleton() {
  return (
    <div className="p-6 space-y-6">
      <Skeleton className="h-8 w-48 mb-4" /> {/* Title */}

      {/* Wallet Balance Skeleton */}
      <div className="border rounded-lg p-4 shadow space-y-2">
        <Skeleton className="h-6 w-36" /> {/* Wallet Balance Header */}
        <Skeleton className="h-10 w-24" /> {/* Wallet Balance Value */}
      </div>

      {/* Last Transaction Skeleton */}
      <div className="border rounded-lg p-4 shadow space-y-2">
        <Skeleton className="h-6 w-48" /> {/* Last Transaction Header */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>

      {/* Recent Transactions Table Skeleton */}
      <div className="border rounded-lg p-4 shadow overflow-x-auto space-y-2">
        <Skeleton className="h-6 w-56 mb-2" /> {/* Table Header */}
        <div className="space-y-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="grid grid-cols-5 gap-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
