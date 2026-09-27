import { TWorkout } from "@/types/workout.type";

export const getData = async (): Promise<TWorkout[]> => {
    try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        if (!res) {
            throw new Error("Failed to fech workout data!");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }
};