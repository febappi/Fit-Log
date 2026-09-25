import Link from "next/link";

const WorkoutNotFound = () => {
    return (
        <div className="px-6">
            <div className="mx-auto mt-10 mb-10 flex max-w-7xl flex-col items-center rounded-xl border border-white/10 bg-base-300 px-8 py-20 text-center">
                <p className="font-logo text-xs font-light text-primary tracking-widest">
                    404 — NOT FOUND
                </p>

                <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight">
                    WORKOUT NOT FOUND
                </h1>

                <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
                    This lift isn&apos;t in the library. It may have been removed, or the link is wrong.
                </p>

                <Link
                    href="/workout"
                    className="btn btn-primary mt-6 rounded-md px-5 text-xs font-bold border-none"
                >
                    BROWSE WORKOUTS
                </Link>
            </div>
        </div>
    );
};

export default WorkoutNotFound;