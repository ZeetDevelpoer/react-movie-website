import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [userdata, setUserdata] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        coPassword: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "hobbies") {
            const index = userdata.hobbies.indexOf(value);
            if (index > -1) {
                userdata.hobbies.splice(index, 1);
            } else {
                userdata.hobbies.push(value);
            }
            setUserdata({ ...userdata });
        } else {
            setUserdata({ ...userdata, [name]: value });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (userdata.password !== userdata.coPassword) {
            alert("Error: Passwords do not match");
            return;
        }

        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata),
        })
            .then((response) => {
                if (response.ok) {
                    setUserdata({
                        firstName: "",
                        lastName: "",
                        username: "",
                        email: "",
                        password: "",
                        coPassword: "",
                    });
                    alert("Form data stored successfully!");

                    navigate("/Sign-In");
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
            <div className="my-[50px] flex items-center">
                <div className="w-1/2 rounded-l-md h-[650px]">
                    <img
                        src="https://cutewallpaper.org/21/avatar-4k-wallpaper/258-Avatar-HD-Wallpapers-Background-Images-Wallpaper-Abyss.jpg"
                        className="h-full w-full rounded-xl shadow-xl object-cover"
                        alt=""
                    />
                </div>
                <div className="w-1/2 p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="flex">
                            <div className="flex flex-col w-1/2 mx-3">
                                <label className="text-white text-lg">First Name</label>
                                <input
                                    type="text"
                                    className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                    placeholder="Enter Your First Name"
                                    onChange={handleChange}
                                    name="firstName"
                                    value={userdata.firstName}
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-1/2 mx-3">
                                <label className="text-white text-lg">Last Name</label>
                                <input
                                    type="text"
                                    className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                    placeholder="Past Your Favorite Movie Poster Url"
                                    onChange={handleChange}
                                    name="lastName"
                                    value={userdata.lastName}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mt-7 mx-3">
                            <label className="text-white text-lg">Username</label>
                            <input
                                type="text"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Your Username"
                                name="username"
                                value={userdata.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col mt-7 mx-3">
                            <label className="text-white text-lg">Email</label>
                            <input
                                type="text"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Your Email Address"
                                name="email"
                                value={userdata.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col  mx-3 mt-7">
                            <label className="text-white text-lg">Password</label>
                            <input
                                type="password"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Your Password"
                                name="password"
                                value={userdata.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col  mx-3 mt-7">
                            <label className="text-white text-lg">Conform Password</label>
                            <input
                                type="password"
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Password Again"
                                name="coPassword"
                                value={userdata.coPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col  mx-3 mt-4">
                            <input
                                type="submit"
                                name="sign-up"
                                value="Sign Up"
                                className="bg-blue-700 cursor-pointer border-slate-500 py-3 px-3 text-white rounded-md mt-3 hover:bg-blue-600 duration-500"
                            />
                        </div>
                        <div className="mt-7">
                            <p className="text-center text-white capitalize">
                                If You Have Account{" "}
                                <Link to="/Sign-In" className="text-blue-500 cursor-pointer ms-2 underline">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
