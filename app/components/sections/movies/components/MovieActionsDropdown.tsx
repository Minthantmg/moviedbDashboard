import React, {useState} from 'react';
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import DeleteMovieDialog from "@/app/components/sections/movies/components/DeleteMovieDialog";
import {Movie} from "@/type";
import EditMovieDialog from "@/app/components/sections/movies/components/EditMovieDialog";
import MovieDetailSheet from "@/app/components/sections/movies/components/MovieDetailSheet";


const MovieActionsDropdown = ({ movie }: { movie: Movie }) => {
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
                    <MovieDetailSheet movie={movie} />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <EditMovieDialog isOpen={isEditDialogOpen} setIsOpen={setEditDialogOpen} movie={movie} />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <DeleteMovieDialog isOpen={isDeleteDialogOpen} setIsOpen={setDeleteDialogOpen} movie={movie} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MovieActionsDropdown;