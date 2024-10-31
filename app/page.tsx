import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <main className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1>Welcome to MovieDB Dashboard</h1>
                <p>
                    Go to your <Link href="/dashboard">Dashboard</Link>
                </p>
            </div>
        </main>
    );
};

export default Page;