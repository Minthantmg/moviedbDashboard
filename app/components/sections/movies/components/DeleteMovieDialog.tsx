import React, {Dispatch, SetStateAction} from 'react';
import {Movie} from "@/type";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useMovies} from "@/hooks/useMovies";

interface DeleteMovieDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    movie : Movie;
}

const DeleteMovieDialog:React.FC<DeleteMovieDialogProps> = ({ isOpen, setIsOpen ,movie}) => {

    const {deleteMovieHook} = useMovies();
    const {mutateAsync:deleteMovie,isPending} = deleteMovieHook()
    const handleDelete = async () => {
        try {
            await deleteMovie(movie._id);
            setIsOpen(false);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="text-sm cursor-pointer py-2 hover:bg-gray-100 px-2">Delete</div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button variant="destructive" onClick={handleDelete}>
                        {isPending ? <span className="loading loading-spinner loading-sm"></span> : 'Delete'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteMovieDialog;