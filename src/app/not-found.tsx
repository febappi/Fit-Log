import Link from "next/link";

const GlobalNotFound = () => {
    return (
        <div className="px-6">
            <div className="mx-auto mt-10 mb-10 flex max-w-7xl flex-col items-center rounded-xl border border-white/10 bg-base-300 px-8 py-20 text-center">
                <p className="font-logo text-xs font-light text-primary tracking-widest">
                    404 — NOT FOUND
                </p>

                <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight">
                    PAGE NOT FOUND
                </h1>

                <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
                    The page you are looking for doesn&apos;t exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="btn btn-primary mt-6 rounded-md px-5 text-xs font-bold border-none inline-flex items-center gap-2"
                >
                    RETURN HOME
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default GlobalNotFound;
