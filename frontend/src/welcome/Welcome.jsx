import React from "react";
import Nav from "./components/Nav";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Doctors from "./page/Doctors";

export default function Welcome() {
    return (
        <div className="website">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="doctors" element={<Doctors />} />
            </Routes>
        </div>
    )
}