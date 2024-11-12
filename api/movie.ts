import { axiosInstance } from "@/utills/axiosInstance";
import {Movie} from "@/type";

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

export const deleteMovie = async (movieId: string) => {
    try{
        const res = await axiosInstance.delete(`/movie/${movieId}`);
        return res.data;
    }catch (e){
        throw e;
    }
}

export const updateMovie = async (movieID: string, updatedData: Partial<Movie>) => {
    try {
        const res = await axiosInstance.put(`/user/${movieID}`,updatedData)
        return res.data;
    }catch (e){
        throw e;
    }
}
