import React from "react";
import siteLogo from "../../assets/img/logo.jpg"

export default function Nav() {


    return (
        <>
            <div className="flex around medel web-nav">
                <div className="flex center medel ">
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
                        <li>
                            Service
                        </li>
                        <li>
                            Doctors
                        </li>
                        <li>
                            Pricing
                        </li>
                        <li>
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