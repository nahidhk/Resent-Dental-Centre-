import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// icons
import { AiOutlineHome } from "react-icons/ai";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { VscInsert } from "react-icons/vsc";
import { CiMemoPad } from "react-icons/ci";
import { FaUserCog } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";



export default function SideNav() {
    const navigate = useNavigate();
    const location = useLocation();
    // Active class check function
    const isActive = (path) => location.pathname === path;
    const subIsActive = (path) => location.pathname.startsWith(path);

    return (
        <div className="flex cloman">
            {/* Home */}
            <button
                onClick={() => navigate("/")}
                className={`appBtn medel ${isActive("/") ? "active" : ""}`}
            >
                <AiOutlineHome className="appicon" />
                <span className="appBtnName">Home</span>
            </button>
            {/* Prescription */}
            <button
                onClick={() => navigate("/prescription")}
                className={`appBtn medel  ${isActive("/prescription") ? "active" : ""}`}
            >
                <LiaFilePrescriptionSolid className="appicon" />
                <span className="appBtnName">Prescription</span>
            </button>
            {/* Insert Data */}
            <button
                onClick={() => navigate("/insert")}
                className={`appBtn  medel ${subIsActive("/insert") ? "active" : ""}`}
            >
                <VscInsert className="appicon" />
                <span className="appBtnName" >Insert</span>
            </button>
            {/* Demo */}
            <button
                onClick={() => navigate("/memo")}
                className={`appBtn medel  ${isActive("/memo") ? "active" : ""}`}
            >
                <CiMemoPad className="appicon" />
                <span className="appBtnName">Memo</span>
            </button>
                        {/* Demo */}
            <button
                onClick={() => window.location.href="https://wa.me/+8801763279587"}
                className={`appBtn medel`}
            >
                <FaUserCog className="appicon" />
                <span className="appBtnName">Developer Need</span>
            </button>
                                    {/* Demo */}
            <button
                onClick={() => window.location.href="https://www.ndsql.top"}
                className={`appBtn medel`}
            >
                <FaKey className="appicon" />
                <span className="appBtnName">NdSQL API</span>
            </button>
        </div>
    )
}
