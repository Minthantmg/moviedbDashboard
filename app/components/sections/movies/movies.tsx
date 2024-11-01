import React from 'react';
import {useMovies} from "@/hooks/useMovies";
import {DataTable} from "@/app/components/sections/movies/data-table";
import {columns} from "@/app/components/sections/movies/columns";


const AddUser = () => {
    const {getMovieListHook} = useMovies()
    const {data: movie, isSuccess,isLoading ,isError} = getMovieListHook()

    return (
        <div>
            {isError && <>Error...</>}
            {isLoading && <>Loading...</>}
            {isSuccess && (
                <>
                    <div className='text-3xl mt-4'>Movie List</div>
                    <div className='mt-4'>Total: {movie.length} movies</div>
                    <div>
                        <DataTable columns={columns} data={movie}/>
                    </div>
                </>
            )}
        </div>
    );
};

export default AddUser;