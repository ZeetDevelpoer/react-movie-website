import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
export default function Footer() {
    return (
        <>
            <section
                className="border-2 rounded-md pt-[50px] border-slate-700 mt-[80px] flex flex-col justify-center items-center"
                id="footer"
            >
                <div className="flex items-center justify-center flex-col w-1/2">
                    <Link to="/" className="text-white text-[38px] uppercase tracking-[2px] font-bold">
                        <img src={logo} className="w-[400px]" alt="" />
                    </Link>
                    <p className="text-center text-slate-300 my-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem in cum explicabo dolorum delectus rerum
                        officiis natus mollitia perspiciatis modi.
                    </p>
                    <ul className="flex items-center">
                        <li className="mx-2">
                            <a href="/" className="text-white text-md">
                                Home
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="/" className="text-white text-md">
                                Home
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="/" className="text-white text-md">
                                Home
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="/" className="text-white text-md">
                                Home
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="/" className="text-white text-md">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full p-7 mt-[70px] border-t-[0.3px] border-slate-700 flex justify-between items-center">
                    <span className="text-white ">Copy Right 2023 By Lorem Ipsum</span>
                    <div className="flex items-center">
                        <i class="bi bi-facebook text-white hover:text-slate-300 duration-500 hover:scale-125 cursor-pointer mx-2"></i>
                        <i class="bi bi-instagram text-white hover:text-slate-300 duration-500 hover:scale-125 cursor-pointer mx-2"></i>
                        <i class="bi bi-pinterest text-white hover:text-slate-300 duration-500 hover:scale-125 cursor-pointer mx-2"></i>
                        <i class="bi bi-dribbble text-white hover:text-slate-300 duration-500 hover:scale-125 cursor-pointer mx-2"></i>
                        <i class="bi bi-behance text-white hover:text-slate-300 duration-500 hover:scale-125 cursor-pointer mx-2"></i>
                    </div>
                </div>
            </section>
        </>
    );
}
