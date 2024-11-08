'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {User} from "@/type";
import {Dispatch, SetStateAction} from "react";
import {useUser} from "@/hooks/useUser";

interface DeleteUserDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    user: User;
}

const DeleteUserDialog: React.FC<DeleteUserDialogProps> = ({ isOpen, setIsOpen ,user}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {deleteUserHook} = useUser()
    const { mutateAsync: deleteData, isPending } = deleteUserHook();

    console.log(user);
    const handleDelete = async () => {
        try {
            console.log('Deleting user with ID:', user._id);
            await deleteData(user._id);
            setIsOpen(false);
            console.log('User deleted successfully');
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
                        {isPending ? 'Deleting...' : 'Delete'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteUserDialog;
