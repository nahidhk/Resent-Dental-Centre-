import React from "react";


// icons


import { MdHome } from "react-icons/md";
import { FaFilePrescription } from "react-icons/fa";



export default function SideNav() {
    return (
        <blockquote>
            <div>
                <button className="sideNavBtn btn flex medel">
                    <MdHome className="icon" />
                    <span>
                        Home
                    </span>
                </button>
                <button className="sideNavBtn btn flex medel">
                    <FaFilePrescription className="icon"/>
                    <span>
                        Prescription
                    </span>
                </button>
            </div>
        </blockquote>
    )
}