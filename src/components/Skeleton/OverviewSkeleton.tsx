
export default function OverviewSkeleton()  {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4 space-y-10">
                {/* Top Highlight Section */}
                <div className="grid gap-6 md:grid-cols-3 animate-pulse">
                    <div className="col-span-2 bg-card p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                        <div className="h-8 w-40 bg-secondary rounded mb-3"></div>
                        <div className="h-4 w-64 bg-secondary/30 rounded mb-6"></div>

                        <div className="mt-6 flex items-center gap-10">
                            <div>
                                <div className="h-10 w-16 bg-secondary rounded mb-2"></div>
                                <div className="h-3 w-20 bg-secondary/30 rounded"></div>
                            </div>
                            <div>
                                <div className="h-10 w-16 bg-secondary rounded mb-2"></div>
                                <div className="h-3 w-20 bg-secondary/30 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
                        <div className="h-10 w-10 bg-secondary rounded-full mb-3"></div>
                        <div className="h-6 w-12 bg-secondary rounded mb-2"></div>
                        <div className="h-3 w-24 bg-gray-200 rounded"></div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-pulse">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="bg-secondary p-6 rounded-xl shadow flex flex-col items-center"
                        >
                            <div className="h-8 w-8 bg-secondary rounded-full mb-3"></div>
                            <div className="h-6 w-16 bg-secondary rounded mb-2"></div>
                            <div className="h-3 w-20 bg-secondary/20 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};
