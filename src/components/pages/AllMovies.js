import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function AllMovies() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/moviesData")
            .then((response) => response.json())
            .then((data) => setApiData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <section id="all-movies" className="mt-[50px]">
                <div className="flex flex-col justify-center items-center ">
                    <h3 className="text-white text-[28px]">All Movies</h3>
                    <div className="flex flex-row w-full mt-[50px] flex-wrap " id="img-carousel">
                        {apiData.map((item) => (
                            <Link
                                to={`/Movie-Details/${item.id}`}
                                className=" group w-1/5  overflow-hidden rounded-t-lg cursor-pointer"
                            >
                                <div className="p-2">
                                    <div className="overflow-hidden">
                                        <img
                                            src={item.movieImage}
                                            className="w-full h-[200px] object-cover rounded-t-lg group-hover:scale-110 duration-700"
                                            alt=""
                                        />
                                    </div>
                                    <div className=" h-[230px] bg-[#2b2d34] rounded-b-md overflow-hidden">
                                        <div className="text-white h-[75px] px-3 border-b-2 border-white border-opacity-5 bg-transparent font-medium flex justify-between items-center capitalize">
                                            <h2 className=" bg-transparent text-[18px]"> {item.movieName}</h2>
                                        </div>
                                        <div className="py-4 px-3 bg-transparent">
                                            <span className="flex items-center justify-between text-white bg-transparent text-[18px] ">
                                                Rating :
                                                <span className=" bg-transparent flex items-center">
                                                    {item.movieRating}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5 ms-1 bg-transparent text-yellow-500"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>

                                            <span className="text-white mt-2 flex justify-between bg-transparent">
                                                Movie Type <span className="text-slate-300 bg-transparent">{item.movieType}</span>
                                            </span>
                                            <span className="text-white mt-2 flex justify-between bg-transparent">
                                                Released Date
                                                <span className="text-slate-300 bg-transparent">{item.releaseDate}</span>
                                            </span>
                                            <span className="text-white mt-2 flex justify-between bg-transparent">
                                                Movie <span className="text-slate-300 bg-transparent">{item.roc}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
