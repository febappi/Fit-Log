const MyPlanLoading = () => {
    return (
        <div className="px-6">
            <div className="mx-auto mt-10 mb-10 max-w-7xl">
                <h1 className="font-display text-3xl font-bold uppercase tracking-tight">
                    MY PLAN
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                <div className="mt-6 grid rounded-xl border border-white/10 bg-base-300 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="px-8 py-6 text-center sm:text-left">
                            <p className="text-xs text-gray-400">
                                {i === 0 ? "Exercises" : i === 1 ? "Minutes" : "Calories"}
                            </p>
                            <div className="skeleton h-10 w-16 mt-2 mx-auto sm:mx-0"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-1 rounded-lg border border-white/10 p-1 text-xs">
                        <div className="skeleton h-8 w-24 rounded-md"></div>
                        <div className="skeleton h-8 w-16 rounded-md"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-400">Sort By</span>
                        <div className="skeleton h-8 w-24 rounded-md"></div>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 rounded-xl border border-white/10 bg-base-300 p-4 sm:p-3"
                        >
                            <div className="skeleton relative h-40 w-full sm:h-20 sm:w-36 shrink-0 rounded-lg"></div>

                            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                                <div className="skeleton h-5 w-48 mb-2"></div>
                                <div className="skeleton h-4 w-24 mb-3"></div>
                                <div className="flex gap-4 mt-1">
                                    <div className="skeleton h-4 w-16"></div>
                                    <div className="skeleton h-4 w-16"></div>
                                    <div className="skeleton h-4 w-12"></div>
                                </div>
                            </div>

                            <div className="flex w-full sm:w-auto items-center justify-center sm:justify-start gap-3 mt-2 sm:mt-0">
                                <div className="skeleton h-8 w-24 rounded-full"></div>
                                <div className="skeleton h-8 w-32 rounded-full"></div>
                                <div className="skeleton h-8 w-8 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyPlanLoading;
