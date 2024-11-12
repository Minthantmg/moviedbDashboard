"use client"
import React, {Dispatch, SetStateAction, useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useMovies} from "@/hooks/useMovies";

interface AddMovieDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddMovieSheet: React.FC<AddMovieDialogProps> = ({isOpen,setIsOpen}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [genre, setGenre] = useState<string[]>([]);
    const [rating, setRating] = useState<number>(0);
    const [director, setDirector] = useState("");
    const [cast] = useState<string[]>(["Actor A"]);
    const [duration, setDuration] = useState<number>(0);
    const {createMovieHook} = useMovies()
    const {mutateAsync:createMovie,isPending} = createMovieHook()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await createMovie({
                title,
                description,
                releaseDate,
                genre,
                rating,
                director,
                cast,
                duration,
            });
            setIsOpen(false);
        } catch (error) {
            console.error("Error creating movie:", error);
        }
    };

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button className="text-sm mt-4" variant="outline">Add Movie</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Movie</DialogTitle>
                        <DialogDescription>
                            You can add movie details here.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="scrollable-container space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="title" className="text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Enter movie title"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="description" className="text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Enter movie description"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="releaseDate" className="text-sm font-medium text-gray-700">
                                    ReleaseDate
                                </label>
                                <input
                                    type="text"
                                    id="releaseDate"
                                    name="releaseDate"
                                    placeholder="Enter movie releaseDate"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                    onChange={e => setReleaseDate(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="genre" className="text-sm font-medium text-gray-700">
                                    Genre
                                </label>
                                <select
                                    id="genre"
                                    name="genre"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                    onChange={(e) => {
                                        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
                                        setGenre(selectedOptions);
                                    }}
                                >
                                    <option value="sci-Fi">Sci-Fi</option>
                                    <option value="action">Action</option>
                                    <option value="crime">Crime</option>
                                    <option value="drama">Drama</option>
                                    <option value="biography">Biography</option>
                                    <option value="history">History</option>
                                    <option value="romance">Romance</option>
                                    <option value="history">History</option>
                                    <option value="animation">Animation</option>
                                    <option value="adventure">Adventure</option>
                                    <option value="war">War</option>
                                </select>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="rating" className="text-sm font-medium text-gray-700">
                                    Rating
                                </label>
                                <input
                                    type="text"
                                    id="rating"
                                    name="rating"
                                    placeholder="Enter movie rating"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                    onChange={e => setRating(Number(e.target.value))}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="director" className="text-sm font-medium text-gray-700">
                                    Director
                                </label>
                                <input
                                    type="text"
                                    id="director"
                                    name="director"
                                    placeholder="Enter movie director"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                    onChange={e => setDirector(e.target.value)}
                                />
                            </div>

                            {/*<div className="flex flex-col">*/}
                            {/*    <label htmlFor="cast" className="text-sm font-medium text-gray-700">*/}
                            {/*        Cast*/}
                            {/*    </label>*/}
                            {/*    <select*/}
                            {/*        id="cast"*/}
                            {/*        name="cast"*/}
                            {/*        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"*/}
                            {/*        required*/}
                            {/*        onChange={(e) => {*/}
                            {/*            const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);*/}
                            {/*            setGenre(selectedOptions);*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        <option value="sci-Fi">Sci-Fi</option>*/}
                            {/*        <option value="action">Action</option>*/}
                            {/*        <option value="crime">Crime</option>*/}
                            {/*        <option value="drama">Drama</option>*/}
                            {/*        <option value="biography">Biography</option>*/}
                            {/*        <option value="history">History</option>*/}
                            {/*        <option value="romance">Romance</option>*/}
                            {/*        <option value="history">History</option>*/}
                            {/*        <option value="animation">Animation</option>*/}
                            {/*        <option value="adventure">Adventure</option>*/}
                            {/*        <option value="war">War</option>*/}
                            {/*    </select>*/}
                            {/*</div>*/}

                            <div className="flex flex-col">
                                <label htmlFor="duration" className="text-sm font-medium text-gray-700">
                                    Duration
                                </label>
                                <input
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    placeholder="Enter movie duration"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                    onChange={e => setDuration(Number(e.target.value))}
                                />
                            </div>


                            <div className="flex items-center justify-end space-x-2">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                >
                                    {isPending ? <span className="loading loading-spinner loading-sm"></span> : "Save"}
                                </button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddMovieSheet;