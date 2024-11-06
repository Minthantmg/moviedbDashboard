import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {User} from "@/type";
import {Dispatch, SetStateAction} from "react";


interface DeleteUserDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    user: User;
}

const DeleteUserDialog: React.FC<DeleteUserDialogProps> = ({ isOpen, setIsOpen }) => {
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
                    <Button variant="destructive" onClick={() => { /* Perform delete action */ setIsOpen(false); }}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteUserDialog;
