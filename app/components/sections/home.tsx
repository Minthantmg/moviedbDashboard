'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/hooks/useUser';
import { useMovies } from '@/hooks/useMovies';
import Loading from '@/app/components/sections/loading';
import { Doughnut } from 'react-chartjs-2';
import { Chart, Tooltip, Legend, ArcElement, ChartData, ChartOptions } from 'chart.js';
import { Movie } from '@/type';

Chart.register(Tooltip, Legend, ArcElement);

const Home = () => {
    const { getUserListHook } = useUser();
    const { data: users, isSuccess: isUserSuccess, isLoading: isUserLoading } = getUserListHook();

    const { getMovieListHook } = useMovies();
    const { data: movies, isSuccess, isLoading } = getMovieListHook();

    const [movieChartData, setMovieChartData] = useState<ChartData<'doughnut'>>({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    });

    const options: ChartOptions<'doughnut'> = {
        plugins: {
            legend: {
                display: true,
                position: 'right',
            },
        },
    };

    useEffect(() => {
        if (movies && movies.length > 0) {
            const genreCounts = movies.reduce((acc: { [key: string]: number }, movie: Movie) => {
                movie.genre.forEach((genre) => {
                    acc[genre] = (acc[genre] || 0) + 1;
                });
                return acc;
            }, {});

            const labels = Object.keys(genreCounts);
            const data = labels.map((genre) => genreCounts[genre]);

            setMovieChartData({
                labels: labels.map((genre) => `${genre}`),
                datasets: [
                    {
                        data: data,
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                    },
                ],
            });
        }
    }, [movies]);

    return (
        <div>
            {(isUserLoading || isLoading) && <Loading />}
            {isSuccess && isUserSuccess && (
                <>
                    <div className='text-3xl mt-4'>
                        Dashboard
                    </div>
                    <div className="stats shadow mt-10">
                        <div className="stat">
                            <div className="stat-title">Total Movies</div>
                            <div className="stat-value text-primary">{movies ? movies.length : 0}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Users</div>
                            <div className="stat-value text-primary">{users ? users.length : 0}</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-16">
                        <div className="w-full h-96 mr-10">
                            <Doughnut options={options} data={movieChartData} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
