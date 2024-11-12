"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Movie} from "@/type";
import {ArrowDownAZ, ArrowDown01} from "lucide-react"
import {Button} from "@/components/ui/button";
import MovieActionsDropdown from "@/app/components/sections/movies/components/MovieActionsDropdown";


export const columns: ColumnDef<Movie>[] = [
    {
        accessorKey: "title",
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
                    <ArrowDownAZ className="ml-2 h-4 w-4"/>
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
        cell: ({row}) => {
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
        header: ({column}) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="flex justify-center w-full"
                >
                    <div className="text-center flex items-center">
                        Rating
                        <ArrowDown01 className="ml-2 h-4 w-4"/>
                    </div>
                </Button>
            )
        },
        cell: ({row}) => {
            const rating = row.original.rating;
            return <div className="text-center font-medium">${rating}/10</div>;
        },
    },
    {
        accessorKey: "duration",
        header: "Duration",
        cell: ({row}) => {
            const duration = row.original.duration;
            return `${duration} min`;
        }
    },
    {
        id: "actions",
        cell: ({ row }) => <MovieActionsDropdown movie={row.original} />,
    },
]
