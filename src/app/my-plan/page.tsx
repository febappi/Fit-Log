import { getData } from "@/lib/data";
import PlanManager from "./PlanManager";

const MyPlanPage = async () => {
    // Fetch data on the server
    const data = await getData();

    return (
        <div className="px-6">
            <div className="mx-auto mt-10 mb-10 max-w-7xl">
                <h1 className="font-display text-3xl font-bold uppercase tracking-tight">
                    MY PLAN
                </h1>

                <p className="mt-2 text-sm text-gray-400">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

                {/* Pass all workouts, let the client filter them based on Context IDs */}
                <PlanManager allWorkouts={data} />
            </div>
        </div>
    );
};

export default MyPlanPage;
