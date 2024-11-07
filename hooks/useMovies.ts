import { useQuery } from "@tanstack/react-query";
import {getMovieList} from "@/api/movie";
import {Movie} from "@/type";
import {createUser} from "@/api/user";

const getMovieListHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ["get", "movies"],
        queryFn: getMovieList,
    });
};

export const useMovies = () => {
    return {
        getMovieListHook
    };
};