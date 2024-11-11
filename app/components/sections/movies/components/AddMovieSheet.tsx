"use client"
import React, {Dispatch, SetStateAction} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

interface AddMovieDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddMovieSheet: React.FC<AddMovieDialogProps> = ({isOpen,setIsOpen}) => {
    // const [title, setTitle] = useState("");
    // const [description,setDescription] = useState("")
    // const [releaseDate, setReleaseDate] = useState("");
    // const [genre, setGenre] = useState("");
    // const [rating, setRating] = useState("");
    // const [director, setDirector] = useState("");
    // const [cast, setCast] = useState("");
    // const [duration,setDuration] = useState("");

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
                    <form>
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
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="cast" className="text-sm font-medium text-gray-700">
                                    Cast
                                </label>
                                <input
                                    type="text"
                                    id="cast"
                                    name="cast"
                                    placeholder="Enter movie cast"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>

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
                                    Save
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