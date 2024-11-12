import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {createMovie, deleteMovie, getMovieList, updateMovie} from "@/api/movie";
import { CreateMovieParams } from "@/api/movie";
import {Movie} from "@/type";

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

const deleteMovieHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationFn: deleteMovie
    })
}

const updateMovieHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationKey: ["update", "movie"],
        mutationFn: ({ movieId, updatedData }: { movieId: string; updatedData: Partial<Movie> }) =>
            updateMovie(movieId, updatedData),
        onSuccess: () => {
            try {
                // @ts-ignore
                queryClient.invalidateQueries(["get", "movies"]);
            } catch (error) {
                console.error('Error while invalidating query:', error);
            }
        },
    })
}

export const useMovies = () => {
    return {
        getMovieListHook,
        createMovieHook,
        deleteMovieHook,
        updateMovieHook
    };
};
