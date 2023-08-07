import React from "react";
import { useState } from "react";
export default function Dashboard() {
    const [movieData, setMovieData] = useState({
        movieName: "",
        movieImage: "",
        movieType: [],
        roc: "",
        releaseDate: "",
        movieRating: "",
        castName: "",
        directorName: "",
        plot: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "hobbies") {
            const index = movieData.hobbies.indexOf(value);
            if (index > -1) {
                movieData.hobbies.splice(index, 1);
            } else {
                movieData.hobbies.push(value);
            }
            setMovieData({ ...movieData });
        } else {
            setMovieData({ ...movieData, [name]: value });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:4000/moviesData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Form data stored successfully!");
                    setMovieData({
                        movieName: "",
                        movieImage: "",
                        movieType: [],
                        roc: "",
                        releaseDate: "",
                        movieRating: "",
                        castName: "",
                        directorName: "",
                        plot: "",
                    });
                } else {
                    console.log("Error storing form data:", response.statusText);
                }
            })
            .catch((error) => {
                console.log("Error storing form data:", error.message);
            });
    }

    return (
        <section className="mt-[50px]" id="Dashboard">
            <h3 className="text-center text-white text-[28px]">Add Your Favorite Movie</h3>
            <div className="my-[50px]">
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <div className="flex flex-col w-1/2 mx-3">
                            <label className="text-white text-lg">Movie Name</label>
                            <input
                                type="text"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Your Favorite Movie Name"
                                onChange={handleChange}
                                name="movieName"
                                value={movieData.movieName}
                                required
                            />
                        </div>
                        <div className="flex flex-col w-1/2 mx-3">
                            <label className="text-white text-lg">Movie Image</label>
                            <input
                                type="text"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Past Your Favorite Movie Poster Url"
                                onChange={handleChange}
                                name="movieImage"
                                value={movieData.movieImage}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mt-7">
                        <div className="flex flex-col  w-1/3 mx-3">
                            <label className="text-white text-lg">Movie Type</label>
                            <div className="flex justify-between pe-4 mt-5">
                                <div className="flex items-center ">
                                    <input
                                        type="checkbox"
                                        name="movieType"
                                        value="Action"
                                        checked={movieData.movieType.includes("Action")}
                                        onChange={handleChange}
                                    />
                                    <span className="ms-2 text-white">Action</span>
                                </div>
                                <div className="flex items-center ">
                                    <input
                                        type="checkbox"
                                        name="movieType"
                                        value="Adventure"
                                        checked={movieData.movieType.includes("Adventure")}
                                        onChange={handleChange}
                                    />
                                    <span className="ms-2 text-white">Adventure</span>
                                </div>
                                <div className="flex items-center ">
                                    <input
                                        type="checkbox"
                                        name="movieType"
                                        value="Comedy"
                                        checked={movieData.movieType.includes("Comedy")}
                                        onChange={handleChange}
                                    />
                                    <span className="ms-2 text-white">Comedy</span>
                                </div>
                                <div className="flex items-center ">
                                    <input
                                        type="checkbox"
                                        name="movieType"
                                        value="Horror"
                                        checked={movieData.movieType.includes("Horror")}
                                        onChange={handleChange}
                                    />
                                    <span className="ms-2 text-white">Horror</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-1/3 mx-3">
                            <label className="text-white text-lg">Released Or Comming Soon</label>
                            <select
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                style={{ "-webkit-appearance": "none" }}
                                onChange={handleChange}
                                name="roc"
                                value={movieData.roc}
                                required
                            >
                                <option value="null">-- Select --</option>
                                <option value="Released">Released</option>
                                <option value="Comming Soon">Comming Soon</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-1/3 mx-3">
                            <label className="text-white text-lg">Release Date</label>
                            <input
                                type="date"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                name="releaseDate"
                                value={movieData.releaseDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mt-7 ">
                        <div className="flex flex-col 2/12 mx-3">
                            <label className="text-white text-lg">Movie Rating</label>
                            <select
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                style={{ "-webkit-appearance": "none" }}
                                name="movieRating"
                                value={movieData.movieRating}
                                onChange={handleChange}
                                required
                            >
                                <option value="null">-- Select --</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className="flex flex-col w-6/12 mx-3">
                            <label className="text-white text-lg">Movie Cast Names</label>
                            <input
                                type="text"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Movie Cast Names"
                                name="castName"
                                value={movieData.castName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col w-5/12 mx-3">
                            <label className="text-white text-lg">Movie Director Name</label>
                            <input
                                type="text"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Movie Director Name"
                                name="directorName"
                                value={movieData.directorName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mt-7">
                        <div className="flex flex-col mx-3">
                            <label className="text-white text-lg">Enter Movie Plot</label>
                            <textarea
                                cols="165"
                                rows="10"
                                className="border-2 border-slate-500 py-2 px-3 text-white  rounded-md mt-3"
                                placeholder="Enter Your Favorite Movie Name"
                                name="plot"
                                value={movieData.plot}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col  mx-3 mt-4">
                        <input
                            type="submit"
                            name="sign-in"
                            value="Upload"
                            className="bg-blue-700 cursor-pointer border-slate-500 py-3 px-3 text-white rounded-md mt-3 hover:bg-blue-600 duration-500"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}
