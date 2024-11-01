"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Movie} from "@/type";
import { ArrowDownAZ,ArrowDown01 } from "lucide-react"
import {Button} from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const columns: ColumnDef<Movie>[] = [
    {
        accessorKey: "title",
        header: ({ column }) =>{
            return(
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
                    <ArrowDownAZ className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "genre",
        header: "Genre",
    },
    {
        accessorKey: "releaseDate",
        header: "Release Date",
        cell: ({ row }) => {
            return new Date(row.original.releaseDate)
                .toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                });
        },
    },
    {
        accessorKey: "rating",
        header: ({ column }) =>{
            return(
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="flex justify-center w-full"
                >
                    <div className="text-center flex items-center">
                        Rating
                        <ArrowDown01 className="ml-2 h-4 w-4" />
                    </div>
                </Button>
            )
        },
        cell: ({ row }) => {
            const rating = row.original.rating;
            return <div className="text-center font-medium">${rating.toFixed(1)}/10</div>;
        },
    },
    {
        accessorKey: "duration",
        header: "Duration",
        cell: ({ row }) => {
            const duration = row.original.duration;
            return `${duration} min`;
        }
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
                        <DropdownMenuItem>View Movie</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
