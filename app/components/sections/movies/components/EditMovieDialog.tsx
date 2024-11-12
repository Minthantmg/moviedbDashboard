import React, {Dispatch, SetStateAction, useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {Movie} from "@/type";
import {useMovies} from "@/hooks/useMovies";

interface EditMovieDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    movie : Movie;
}

const EditMovieDialog:React.FC<EditMovieDialogProps> = ({isOpen,setIsOpen,movie}) => {
    const [formData, setFormData] = useState<Movie>(movie);
    const {} = useMovies()
    //const { mutateAsync: updateData, isPending} = updateUserHook()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData:Movie) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log(movie._id)
        e.preventDefault();
       // await updateData({ userId: movie._id, updatedData: formData });
        setIsOpen(false);
    };
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogDescription>
                        You can edit the movie details here.
                    </DialogDescription>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="title" className="text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter user name"
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
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter user email"
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
                            value={formData.releaseDate}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="role" className="text-sm font-medium text-gray-700">
                            Genre
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.genre}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
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
                            value={formData.rating}
                            onChange={handleChange}
                            placeholder="Enter password"
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
                            value={formData.director}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="cast" className="text-sm font-medium text-gray-700">
                            Cast
                        </label>
                        <select
                            id="cast"
                            name="cast"
                            value={formData.cast}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        >
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="duration" className="text-sm font-medium text-gray-700">
                            Duration
                        </label>
                        <input
                            type="text"
                            id="duration"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="Enter duration"
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
                            {/*{isPending ? <span className="loading loading-spinner loading-sm"></span> : "Save"}*/}
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditMovieDialog;