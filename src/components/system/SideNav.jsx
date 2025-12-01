import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// icons
import { AiOutlineHome } from "react-icons/ai";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { VscInsert } from "react-icons/vsc";

export default function SideNav() {
    const navigate = useNavigate();
    const location = useLocation();

    // Active class check function
    const isActive = (path) => location.pathname === path;

    return (

        <div className="coner">

            {/* Home */}
            <button
                onClick={() => navigate("/")}
                className={`sideNavBtn flex medel ${isActive("/") ? "active" : ""}`}
            >
                <AiOutlineHome className="icon" />
                <span>Home</span>
            </button>

            {/* Prescription */}
            <button
                onClick={() => navigate("/prescription")}
                className={`sideNavBtn flex medel ${isActive("/prescription") ? "active" : ""}`}
            >
                <LiaFilePrescriptionSolid className="icon" />
                <span>Prescription</span>
            </button>

            {/* Insert Data */}
            <button
                onClick={() => navigate("/insert")}
                className={`sideNavBtn flex medel ${isActive("/insert") ? "active" : ""}`}
            >
                <VscInsert className="icon" />
                <span>Insert Data</span>
            </button>

        </div>

    )
}
