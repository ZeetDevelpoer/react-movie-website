import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("email") !== null);
    const [user, setUser] = useState(localStorage.getItem("email"));
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Are you sure you want to log out?");
        localStorage.removeItem("email");
        setIsLoggedIn(false);
        setUser(null);
        navigate("/Sign-in");
    };

    return (
        <div className="flex items-center justify-between">
            <div id="logo" className="flex items-center">
                <Link to="/" className="text-white text-[38px] uppercase tracking-[2px] font-bold me-4">
                    <img src={logo} className="w-[200px]" alt="" />
                </Link>
                <ul className="flex items-center">
                    <li className="mx-3 text-white hover:text-slate-300 duration-500">
                        <Link to="/">Home</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li className="mx-3 text-white hover:text-slate-300 duration-500">
                                <Link to="/Dashboard">Add New Movie</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="mx-3 text-white hover:text-slate-300 duration-500"></li>
                        </>
                    )}
                </ul>
            </div>
            <div className="flex items-center">
                {isLoggedIn ? (
                    <>
                        <p className="text-white mr-3">
                            Logged in as : <span className="text-green-500 mx-2">{user}</span>
                        </p>
                        <button
                            className="bg-blue-700 border-slate-500 cursor-pointer py-3 px-7 text-white rounded-md mt-3 hover:bg-blue-600 duration-500"
                            onClick={handleLogout}
                        >
                            Log out
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/sign-up"
                            className="mx-2 text-white border-2  rounded-md capitalize py-3 px-7 hover:bg-blue-600 hover:border-blue-600 duration-500"
                        >
                            Sign up
                        </Link>
                        <Link
                            to="/sign-in"
                            className="mx-2 bg-blue-600 border-2 border-blue-600 hover:bg-blue-800 hover:border-blue-800 rounded-md capitalize py-3 px-7 text-white duration-500"
                        >
                            Sign in
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
