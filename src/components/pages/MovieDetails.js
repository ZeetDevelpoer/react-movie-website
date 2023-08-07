import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MovieDetails({ match }) {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const response = await fetch(`http://localhost:4000/moviesData/${id}`);
                if (!response.ok) {
                    throw new Error("Movie not found");
                }
                const data = await response.json();
                setMovie(data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }

        fetchMovieDetails();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <>
            <section id="movie-details" className="mt-[50px]">
                <div className="bg-red-500 rounded-lg h-[500px] relative">
                    <img src={movie.movieImage} className="w-full rounded-lg shadow-xl h-full object-cover center" alt="img" />
                    <div className="absolute bg-black p-7  bottom-[-15%]  opacity-75 left-0 m-7 rounded-md shadow-xl">
                        <h1 className=" bg-transparent text-white text-[48px] font-bold">{movie.movieName}</h1>
                        <p className=" bg-transparent text-white">
                            Movie Type : <span className=" bg-transparent ms-2">{movie.movieType}</span>
                        </p>
                        <span className=" bg-transparent text-white mt-3 block">Release Date : &nbsp; {movie.releaseDate}</span>
                        <span className=" bg-transparent text-white mt-3 block">{movie.roc}</span>
                        <span className="flex items-center mt-3 bg-transparent">
                            <span className="text-white bg-transparent">Ratinng : </span>
                            <div className=" bg-transparent flex items-center">
                                <span className=" bg-transparent text-white ms-2 text-xl">{movie.movieRating} </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white bg-transparent ms-1 text-yellow-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            </div>
                        </span>
                    </div>
                    <Link
                        to="/All-Movies"
                        className="p-5 bg-black opacity-75 hover:opacity-90 duration-500 cursor-pointer rounded-lg absolute top-0 left-0 m-7"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 bg-transparent text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                </div>
                <div className="flex flex-col mt-[90px]">
                    <div className="w-1/2 mb-5">
                        <h3 className="text-[26px] text-white font-semibold">Cast </h3>
                        <span className="text-white">{movie.castName}</span>
                    </div>
                    <span className=" mt-2 mb-4 w-[200px] h-[1px] bg-white opacity-10"></span>
                    <div className="w-1/2 mb-5">
                        <h3 className="text-[26px] text-white font-semibold">Director </h3>
                        <span className="text-white">{movie.directorName}</span>
                    </div>
                    <span className=" mt-2 mb-4 w-[200px] h-[1px] bg-white opacity-10"></span>
                    <div className="w-full mb-5">
                        <h3 className="text-[26px] text-white font-semibold">Plot </h3>
                        <p className="text-white">{movie.plot}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
