import React from "react";
import siteLogo from "../../assets/img/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Nav() {
const navigate = useNavigate();

    return (
        <>
            <div className="flex around medel web-nav">
                <div onClick={() => navigate("/")} className="flex center medel pointer">
                    <img src={siteLogo} alt="" className="webNavLogo" />
                    <h2>
                        &nbsp; Resent Dental
                    </h2>
                </div>
                <div>
                    <span className="menuIcon">
                        Icon
                    </span>
                    <ul className="nav-link">
                        <li onClick={() => navigate("service")}>
                            Service
                        </li>
                        <li onClick={() => navigate("doctors")}>
                            Doctors
                        </li>
                        <li onClick={() => navigate("pricing")}>
                            Pricing
                        </li>
                        <li onClick={() => navigate("contacts")}>
                            Contacts
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="roundBtn">
                        Join Appointment
                    </button>
                </div>
            </div>
        </>
    )
}