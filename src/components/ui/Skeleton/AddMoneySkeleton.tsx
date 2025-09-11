
import { Skeleton } from "@/components/ui/skeleton";

export default function AddMoneySkeleton() {
    return (
        <div className="flex items-center justify-center p-6">
            <div className="md:grid grid-cols-12 w-full gap-10 space-y-6">
                {/* Agent Balance Card Skeleton */}
                <div className="rounded-2xl flex flex-col items-center justify-center text-left h-full shadow-md border backdrop-blur-md p-6 col-span-4">
                    <div className="flex items-center justify-between mb-4 w-full">
                        <div className="text-left space-y-2">
                            <Skeleton className="h-6 w-40" />
                            <Skeleton className="h-6 w-28" />
                        </div>
                    </div>
                </div>

                {/* Transfer Form Skeleton */}
                <div className="col-span-8 max-w-2xl mx-auto">
                    <div className="w-full backdrop-blur-md rounded-2xl shadow-2xl p-6 border space-y-6">
                        {/* Header Skeleton */}
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-12 w-12 rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-5 w-40" />
                                <Skeleton className="h-4 w-56" />
                            </div>
                        </div>

                        {/* Input Fields Skeleton */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-40" />
                                <Skeleton className="h-10 w-full rounded-md" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-10 w-full rounded-md" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-10 w-full rounded-md" />
                            </div>
                        </div>

                        {/* Submit Button Skeleton */}
                        <Skeleton className="h-10 w-full rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
}
