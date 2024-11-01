export type Comment = {
    username: string;
    commentText: string;
    rating: number;
    createdAt: string;
    _id: string;
};

export type Movie = {
    _id: string;
    title: string;
    description: string;
    releaseDate: string;
    genre: string[];
    rating: number;
    director: string;
    cast: string[];
    duration: number;
    comments: Comment[];
    createdAt: string;
    __v: number;
};