import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/elements/Footer";
import Navbar from "./components/elements/Navbar";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import AllMovies from "./components/pages/AllMovies";
import MovieDetails from "./components/pages/MovieDetails";
import Dashboard from "./components/pages/Dashboard";

function App() {
    return (
        <>
            <BrowserRouter>
                <main className="py-5 w-11/12 mx-auto">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Sign-In" element={<SignIn />} />
                        <Route path="/Sign-Up" element={<SignUp />} />
                        <Route path="/All-Movies" element={<AllMovies />} />
                        <Route path="/Movie-Details/:id" element={<MovieDetails />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                    </Routes>
                    <Footer />
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
