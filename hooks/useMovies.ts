import {useMutation, useQuery} from "@tanstack/react-query";
import {createMovie, getMovieList} from "@/api/movie";
import { CreateMovieParams } from "@/api/movie";

const getMovieListHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ["get", "movies"],
        queryFn: getMovieList,
    });
};

const createMovieHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationFn: (newMovie: CreateMovieParams) => createMovie(newMovie),
    });
};

export const useMovies = () => {
    return {
        getMovieListHook,
        createMovieHook
    };
};