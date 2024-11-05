"use client"

import {ColumnDef} from "@tanstack/react-table"
import {User} from "@/type";
import { ArrowDownAZ,ArrowDown01 } from "lucide-react"
import {Button} from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: ({ column }) =>{
            return(
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Username
                    <ArrowDownAZ className="ml-2 h-4 w-4" />
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
        // cell: ({ row }) => {
        //     // Retrieve the password and truncate it to 10 characters followed by "..."
        //     const truncatedPassword = row.original.password.substring(0, 10) + '...';
        //     return <span>{truncatedPassword}</span>;
        // },
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const movie = row.original
            console.log(movie)
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Detail</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
