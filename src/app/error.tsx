'use client'
const ErrorFound=() => {
    return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center px-6">
                <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-tight text-center">
                    Something went wrong!, reload to retry again!
                </h2>
            </div>
        )
}
export default ErrorFound;