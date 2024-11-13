import React from 'react';
import {Movie} from "@/type";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

interface MovieDetailSheetProps {
    movie: Movie;
}

const MovieDetailSheet: React.FC<MovieDetailSheetProps> = ({movie}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="text-sm cursor-pointer py-2
                                    hover:bg-gray-100 px-2">View Detail
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{movie.title}</SheetTitle>
                    <div>
                        <div className="text-black">
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    Description
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {movie.description}
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    ReleaseDate
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {new Date(movie.releaseDate).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    Rating
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {movie.rating}/10
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    Genre
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {movie.genre}
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    Director
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {movie.director}
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    Cast
                                </div>
                                <div className="w-2/3 text-gray-500 break-all">
                                    {movie.cast.join(", ")}
                                </div>
                            </div>
                            <div className="mt-4">
                                <div>
                                    Comments
                                </div>
                                <div className="mt-4 text-gray-500 space-y-2">
                                    {movie.comments.map((comment, index) => (
                                        <div key={comment._id || index}
                                             className="border-b border-gray-200 pb-2 mb-2">
                                            <div><span
                                                className="font-semibold">User:</span> {comment.username}
                                            </div>
                                            <div><span
                                                className="font-semibold">Comment:</span> {comment.commentText}
                                            </div>
                                            <div><span
                                                className="font-semibold">Rating:</span> {comment.rating}/10
                                            </div>
                                            <div><span
                                                className="font-semibold">Date:</span> {new Date(comment.createdAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default MovieDetailSheet;