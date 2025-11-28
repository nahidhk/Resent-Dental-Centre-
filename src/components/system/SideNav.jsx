import React from "react";
import { useNavigate } from "react-router-dom";


// icons


import { AiOutlineHome } from "react-icons/ai";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { VscInsert } from "react-icons/vsc";



export default function SideNav() {
    const navigate = useNavigate();
    return (
        <blockquote>
            <div>
                <button onClick={() => navigate("/")} className="sideNavBtn btn flex medel">
                    <AiOutlineHome className="icon" />
                    <span>
                        Home
                    </span>
                </button>
                <button onClick={() => navigate("/prescription")} className="sideNavBtn btn flex medel">
                    <LiaFilePrescriptionSolid className="icon" />
                    <span>
                        Prescription
                    </span>
                </button>
                <button onClick={() => navigate("insert")} className="sideNavBtn btn flex medel">
                    <VscInsert className="icon" />
                   <span>
                        Insert Data
                   </span>
                </button>
            </div>
        </blockquote>
    )
}