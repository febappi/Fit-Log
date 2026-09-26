import React from "react";

const LibrarySkeleton = () => {
    return (
        <div id="library" className="mt-15 mb-10 scroll-mt-24">
            <div className="mb-10">
                <h1 className="font-display text-3xl font-bold lg:leading-[0.5] tracking-tight">
                    THE LIBRARY
                </h1>
                <p className="lg:mt-2 max-w-md text-sm leading-6 text-gray-400">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            
            <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="mb-4 w-full overflow-hidden rounded-2xl border border-white/10 bg-base-300"
                    >
                        <div className="skeleton w-full aspect-[1.45/1] rounded-none"></div>

                        <div className="p-7">
                            <div className="skeleton h-6 w-16 rounded-full mb-5"></div>
                            
                            <div className="skeleton h-8 w-3/4 mb-3"></div>
                            
                            <div className="skeleton h-4 w-1/2 mb-5"></div>

                            <div className="my-5 border-t border-white/10" />

                            <div className="flex gap-5">
                                <div className="skeleton h-5 w-16"></div>
                                <div className="skeleton h-5 w-16"></div>
                                <div className="skeleton h-5 w-12"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibrarySkeleton;
