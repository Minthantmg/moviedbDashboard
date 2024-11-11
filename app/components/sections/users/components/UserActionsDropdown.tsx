import { useState } from "react";
import { User } from "@/type";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import EditUserDialog from "@/app/components/sections/users/components/EditUserDialog";
import DeleteUserDialog from "@/app/components/sections/users/components/DeleteUserDialog";
import UserDetailSheet from "@/app/components/sections/users/components/UserDetailSheet";

const UserActionsDropdown = ({ user }: { user: User }) => {
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                    <UserDetailSheet user={user} />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <EditUserDialog isOpen={isEditDialogOpen} setIsOpen={setEditDialogOpen} user={user}/>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <DeleteUserDialog isOpen={isDeleteDialogOpen} setIsOpen={setDeleteDialogOpen} user={user} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserActionsDropdown;
