import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("email") !== null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/users");
        const users = await response.json();
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            setIsLoggedIn(true);
            localStorage.setItem("email", email);
            navigate("/");
            window.location.reload();
        } else {
            alert("Your Email Or Password is incorrect");
        }
    };

    return (
        <>
            <section id="sign-up" className=" mt-[50px] flex items-center">
                <div className="w-1/2 rounded-l-md h-[650px] ">
                    <img
                        src="https://wallpaperaccess.com/full/8652624.jpg"
                        className="h-full w-full rounded-xl shadow-xl object-cover"
                        alt=""
                    />
                </div>
                <div className="w-1/2 p-7 rounded-r-md">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="flex flex-col  mx-3 mt-7">
                            <label className="text-white text-lg">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Your Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col  mx-3 mt-7">
                            <label className="text-white text-lg">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                className="border-2 border-slate-500 py-2 px-3 text-white rounded-md mt-3"
                                placeholder="Enter Your Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col  mx-3 mt-0">
                            <input type="submit" value="" />
                            <input
                                type="submit"
                                name="sign-in"
                                value="Sign In"
                                className="bg-blue-700 border-slate-500 cursor-pointer py-3 px-3 text-white rounded-md mt-3 hover:bg-blue-600 duration-500"
                            />
                        </div>
                        <div className="mt-7">
                            <p className="text-center text-white capitalize">
                                If You Have Account
                                <Link to="/Sign-Up" className="text-blue-500 cursor-pointer ms-2 underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
