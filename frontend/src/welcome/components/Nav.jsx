import React, { useEffect, useState } from "react";
import siteLogo from "../../assets/img/logo.jpg";
import { useNavigate } from "react-router-dom";
import siteData from "../../data/setting/siteDetels.json";
import { capitalLetar } from "../../scripts/capitalLetar";
import { IoMenu } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";

export default function Nav() {
    const navigate = useNavigate();
    const [togelApp, setTogelApp] = useState(false);

    // Page title set (run only once)
    useEffect(() => {
        document.title = "Rds - Login";
    }, []);

    return (
        <div className="flex around medel web-nav">

            {/* Logo Section */}
            <div
                onClick={() => navigate("/")}
                className="flex center medel pointer"
            >
                <img src={siteLogo} alt="logo" className="webNavLogo" />
                <h2>&nbsp; {capitalLetar(siteData.siteName_en)}</h2>
            </div>

            {/* Menu Section */}
            <div>


                {/* Nav Links (toggle controlled) */}
                <div className="bottomNav">
                    <div className={`nav-link `}>
                        <li onClick={() => navigate("doctors")}>Doctors</li>
                        <li onClick={() => navigate("pricing")}>Pricing</li>
                        <li onClick={() => navigate("contacts")}>Contacts</li>
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <div>
                <button
                    onClick={() => navigate("login")}
                    className="roundBtn"
                >
                    Join Appointment
                </button>
            </div>

        </div>
    );
}