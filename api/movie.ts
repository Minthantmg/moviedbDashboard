import { axiosInstance } from "@/utills/axiosInstance";
import {Comment} from "@/type";

export interface CreateMovieParams {
    title: string;
    description: string;
    releaseDate: string;
    genre: string[];
    rating: number;
    director: string;
    cast: string[];
    duration: number;
    comments: Comment[];
    createdAt: string;
}

export const getMovieList = async () => {
    try {
        const res = await axiosInstance.get("/movies");
        console.log(res.data);
        return res.data;
    } catch (e) {
        throw e;
    }
};

export const createMovie = async (movieData: CreateMovieParams) => {
    try {
        const res = await axiosInstance.post("/movies", movieData);
        return res.data;
    } catch (e) {
        throw e;
    }
}
