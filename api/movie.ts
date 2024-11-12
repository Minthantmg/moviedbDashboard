import { axiosInstance } from "@/utills/axiosInstance";

export interface CreateMovieParams {
    title: string;
    description: string;
    releaseDate: string;
    genre: string[];
    rating: number;
    director: string;
    cast: string[];
    duration: number;
}

export const getMovieList = async () => {
    try {
        const res = await axiosInstance.get("/movies");
        return res.data;
    } catch (e) {
        throw e;
    }
};

export const createMovie = async (movieData: CreateMovieParams) => {
    try {
        const res = await axiosInstance.post("/movie", movieData);
        return res.data;
    } catch (e) {
        throw e;
    }
}
