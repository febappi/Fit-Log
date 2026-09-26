const WorkoutLoading = () => {
    return (
        <div className="px-6">
            <div className="mx-auto mt-10 mb-10 grid max-w-7xl gap-10 lg:grid-cols-2">
                <div className="skeleton relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-base-300"></div>

                <div>
                    <div className="skeleton h-10 w-3/4 mb-3"></div>

                    <div className="space-y-2 mt-3 mb-4">
                        <div className="skeleton h-4 w-full max-w-lg"></div>
                        <div className="skeleton h-4 w-5/6 max-w-lg"></div>
                        <div className="skeleton h-4 w-4/5 max-w-lg"></div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <div className="skeleton h-6 w-20 rounded-full"></div>
                        <div className="skeleton h-6 w-24 rounded-full"></div>
                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-base-300 px-6 py-1">
                        {[...Array(7)].map((_, i) => (
                            <div key={i} className={`flex items-center justify-between py-3.5 ${i !== 6 ? 'border-b border-white/10' : ''}`}>
                                <div className="skeleton h-3 w-20"></div>
                                <div className="skeleton h-4 w-16"></div>
                            </div>
                        ))}
                    </div>

                    <h2 className="mt-8 font-display text-sm font-bold uppercase tracking-wider">
                        <div className="skeleton h-4 w-28"></div>
                    </h2>

                    <div className="mt-6 space-y-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="skeleton h-4 w-4 shrink-0"></div>
                                <div className="skeleton h-4 w-full max-w-md"></div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <div className="skeleton h-12 w-48 rounded-md"></div>
                        <div className="skeleton h-12 w-36 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutLoading;