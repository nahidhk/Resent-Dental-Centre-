import React from "react";
import Nav from "./components/Nav";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Doctors from "./page/Doctors";
import Record from "./page/Record";

export default function Welcome() {
    return (
        <div className="website">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="doctors" element={<Doctors />} />
                <Route path="record" element={<Record />} />
            </Routes>
        </div>
    )
}