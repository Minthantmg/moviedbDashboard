import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <div>
            <Skeleton className="h-10 w-36 mt-4"/>
            <Skeleton className="h-6 w-36 mt-4"/>
            <Skeleton className="h-10 w-96 mt-4"/>
            <Skeleton className="h-[300px] w-full mt-4 mr-4"/>
        </div>
    );
};

export default Loading;