import React from 'react';
import Image from "next/image";
import error from "../public/error.png"

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Image src={error} alt="error_img" width={80} height={80}/>
            <div className="mt-10 text-xl text-center">
                This page is not available in mobile view.
            </div>
        </div>
    );
};

export default ErrorPage;