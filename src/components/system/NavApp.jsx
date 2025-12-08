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

        <div className="flex">

            {/* Home */}
            <button
                onClick={() => navigate("/")}
                className={`appBtn flex medel center ${isActive("/") ? "active" : ""}`}
            >
                <AiOutlineHome className="appicon" />
                <span className="appBtnName">Home</span>
            </button>

            {/* Prescription */}
            <button
                onClick={() => navigate("/prescription")}
                className={`appBtn flex medel center ${isActive("/prescription") ? "active" : ""}`}
            >
                <LiaFilePrescriptionSolid className="appicon" />
                <span className="appBtnName">Prescription</span>
            </button>

            {/* Insert Data */}
            <button
                onClick={() => navigate("/insert")}
                className={`appBtn flex medel center ${isActive("/insert") ? "active" : ""}`}
            >
                <VscInsert className="appicon" />
                <span className="appBtnName">Insert Data</span>
            </button>

        </div>

    )
}
