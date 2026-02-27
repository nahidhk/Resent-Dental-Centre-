import React, { useEffect } from "react";
import siteLogo from "../../assets/img/logo.jpg";
import { useNavigate } from "react-router-dom";
import siteData from "../../data/setting/siteDetels.json";
import { capitalLetar } from "../../scripts/capitalLetar";
import { IoMenu } from "react-icons/io5";


export default function Nav() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Rds - Login";
    })
    return (
        <>
            <div className="flex around medel web-nav">
                <div onClick={() => navigate("/")} className="flex center medel pointer">
                    <img src={siteLogo} alt="" className="webNavLogo" />
                    <h2>
                        &nbsp; {capitalLetar(siteData.siteName_en)}
                    </h2>
                </div>
                <div>
                    <span className="menuIcon">
                        <IoMenu className="icon"/>
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
                    <button onClick={() => navigate("login")} className="roundBtn">
                        Join Appointment
                    </button>
                </div>
            </div>
        </>
    )
}