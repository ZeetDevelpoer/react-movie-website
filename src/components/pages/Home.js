import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("email") !== null);

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/moviesData")
            .then((response) => response.json())
            .then((data) => setApiData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <section id="slider" className="mt-[50px]">
                <div className="w-full   mt-5 rounded-lg shadow-md ">
                    {isLoggedIn ? (
                        <>
                            {apiData.map((item) => {
                                if (item.id < 2) {
                                    return (
                                        <Link
                                            className="w-full h-full inline-block rounded-lg group "
                                            to={`/Movie-Details/${item.id}`}
                                        >
                                            <div className="bg-red-500 rounded-lg h-[500px] relative ">
                                                <div className="overflow-hidden h-full w-full rounded-lg">
                                                    <img
                                                        src={item.movieImage}
                                                        className="w-full rounded-lg shadow-xl h-full object-cover center group-hover:scale-105 duration-1000 delay-300"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="absolute bg-black p-7  bottom-[-15%]  opacity-75 left-0 m-7 rounded-md shadow-xl">
                                                    <h1 className=" bg-transparent text-white text-[48px] font-bold">
                                                        {item.movieName}
                                                    </h1>
                                                    <p className=" bg-transparent text-white">
                                                        Movie Type : <span className=" bg-transparent ms-2">{item.movieType}</span>
                                                    </p>
                                                    <span className=" bg-transparent text-white mt-3 block">
                                                        Release Date : &nbsp; {item.releaseDate}
                                                    </span>
                                                    <span className=" bg-transparent text-white mt-3 block">{item.roc}</span>
                                                    <span className="flex items-center mt-3 bg-transparent">
                                                        <span className="text-white bg-transparent">Ratinng : </span>
                                                        <div className=" bg-transparent flex items-center">
                                                            <span className=" bg-transparent text-white ms-2 text-xl">
                                                                {item.movieRating}{" "}
                                                            </span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-5 h-5 bg-transparent ms-1 text-yellow-500"
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
                                            </div>
                                        </Link>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </>
                    ) : (
                        <>
                            {apiData.map((item) => {
                                if (item.id < 2) {
                                    return (
                                        <div
                                            onClick={() => alert("Please Sign In Your Account")}
                                            className="w-full h-full inline-block rounded-lg group "
                                            to={`/Movie-Details/${item.id}`}
                                        >
                                            <div className="bg-red-500 rounded-lg h-[500px] relative ">
                                                <div className="overflow-hidden h-full w-full rounded-lg">
                                                    <img
                                                        src={item.movieImage}
                                                        className="w-full rounded-lg shadow-xl h-full object-cover center group-hover:scale-105 duration-1000 delay-300"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="absolute bg-black p-7  bottom-[-15%]  opacity-75 left-0 m-7 rounded-md shadow-xl">
                                                    <h1 className=" bg-transparent text-white text-[48px] font-bold">
                                                        {item.movieName}
                                                    </h1>
                                                    <p className=" bg-transparent text-white">
                                                        Movie Type : <span className=" bg-transparent ms-2">{item.movieType}</span>
                                                    </p>
                                                    <span className=" bg-transparent text-white mt-3 block">
                                                        Release Date : &nbsp; {item.releaseDate}
                                                    </span>
                                                    <span className=" bg-transparent text-white mt-3 block">{item.roc}</span>
                                                    <span className="flex items-center mt-3 bg-transparent">
                                                        <span className="text-white bg-transparent">Ratinng : </span>
                                                        <div className=" bg-transparent flex items-center">
                                                            <span className=" bg-transparent text-white ms-2 text-xl">
                                                                {item.movieRating}{" "}
                                                            </span>
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-5 h-5 bg-transparent ms-1 text-yellow-500"
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
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </>
                    )}
                </div>
            </section>
            <section className="mt-[80px]" id="movie">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-white text-[28px]">Recommended Movies</h3>
                    <div className="flex flex-row flex-wrap w-full mt-[50px]" id="img-carousel">
                        {isLoggedIn ? (
                            <>
                                {apiData.map((item) => {
                                    if (item.id <= 5) {
                                        return (
                                            <>
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
                                                                    Movie Type{" "}
                                                                    <span className="text-slate-300 bg-transparent">
                                                                        {item.movieType}
                                                                    </span>
                                                                </span>
                                                                <span className="text-white mt-2 flex justify-between bg-transparent">
                                                                    Released Date
                                                                    <span className="text-slate-300 bg-transparent">
                                                                        {item.releaseDate}
                                                                    </span>
                                                                </span>
                                                                <span className="text-white mt-2 flex justify-between bg-transparent">
                                                                    Movie{" "}
                                                                    <span className="text-slate-300 bg-transparent">{item.roc}</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </>
                        ) : (
                            <>
                                {apiData.map((item) => {
                                    if (item.id <= 5) {
                                        return (
                                            <>
                                                <div
                                                    className=" group w-1/5  overflow-hidden rounded-t-lg cursor-pointer"
                                                    onClick={() => alert("Please Sign In Your Account")}
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
                                                                    Movie Type{" "}
                                                                    <span className="text-slate-300 bg-transparent">
                                                                        {item.movieType}
                                                                    </span>
                                                                </span>
                                                                <span className="text-white mt-2 flex justify-between bg-transparent">
                                                                    Released Date
                                                                    <span className="text-slate-300 bg-transparent">
                                                                        {item.releaseDate}
                                                                    </span>
                                                                </span>
                                                                <span className="text-white mt-2 flex justify-between bg-transparent">
                                                                    Movie
                                                                    <span className="text-slate-300 bg-transparent">{item.roc}</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </>
                        )}
                    </div>
                    <div className="mt-[50px]">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/All-Movies"
                                    className="text-white bg-blue-500 py-4 px-[50px] cursor-pointer rounded-md hover:bg-blue-600 duration-500"
                                >
                                    View All
                                </Link>
                            </>
                        ) : (
                            <>
                                <div
                                    onClick={() => alert("Please Sign In Your Account")}
                                    className="text-white bg-blue-500 py-4 px-[50px] cursor-pointer rounded-md hover:bg-blue-600 duration-500"
                                >
                                    View All
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
