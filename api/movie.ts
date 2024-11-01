import { axiosInstance } from "@/utills/axiosInstance";

export const getMovieList = async () => {
    try {
        const res = await axiosInstance.get("/movies");
        return res.data;
    } catch (e) {
        throw e;
    }
};