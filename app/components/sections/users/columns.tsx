"use client"

import {ColumnDef} from "@tanstack/react-table"
import {User} from "@/type";
import {ArrowDownAZ} from "lucide-react"
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import {useState} from "react";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Username
                    <ArrowDownAZ className="ml-2 h-4 w-4"/>
                </Button>
            )
        }
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "password",
        header: "Password",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        id: "actions",
        cell: ({row}) => {
            const user = row.original;
            console.log(user);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [isEditDialogOpen, setEditDialogOpen] = useState(false);

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <div className="text-sm cursor-pointer py-2
                                    hover:bg-gray-100 px-2">View Detail
                                    </div>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>{user.name}</SheetTitle>
                                        <SheetDescription>
                                            <div className="text-black">
                                                <div className="flex mt-4">
                                                    <div className="w-1/3">
                                                        Name
                                                    </div>
                                                    <div className="w-2/3 text-gray-500 break-all">
                                                        {user.email}
                                                    </div>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="w-1/3">
                                                        Password
                                                    </div>
                                                    <div className="w-2/3 text-gray-500 break-all">
                                                        {user.password}
                                                    </div>
                                                </div>
                                                <div className="flex mt-4">
                                                    <div className="w-1/3">
                                                        Role
                                                    </div>
                                                    <div className="w-2/3 text-gray-500 break-all">
                                                        {user.role}
                                                    </div>
                                                </div>
                                            </div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Dialog open={isEditDialogOpen} onOpenChange={setEditDialogOpen}>
                                <DialogTrigger asChild>
                                    <div className="text-sm cursor-pointer py-2
                                    hover:bg-gray-100 px-2">Edit
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit User</DialogTitle>
                                        <DialogDescription>
                                            You can edit the user details here.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form className="space-y-4">
                                        <div className="flex flex-col">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Enter user name"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                required
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Enter user email"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                required
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Enter password"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                required
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label htmlFor="role" className="text-sm font-medium text-gray-700">
                                                Role
                                            </label>
                                            <select
                                                id="role"
                                                name="role"
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                required
                                            >
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                        </div>

                                        <div className="flex items-center justify-end space-x-2">
                                            <button
                                                type="button"
                                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                                                onClick={() => setEditDialogOpen(false)}
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
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Dialog open={isDeleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                                <DialogTrigger asChild>
                                    <div className="text-sm cursor-pointer py-2
                                    hover:bg-gray-100 px-2">Delete
                                    </div>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                                            Cancel
                                        </Button>
                                        <Button variant="destructive" onClick={() => {
                                            setDeleteDialogOpen(false);
                                        }}>
                                            Delete
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
