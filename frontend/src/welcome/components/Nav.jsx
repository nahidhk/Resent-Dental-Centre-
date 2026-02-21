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
            <div>2</div>
            <div>3</div>
        </div>
        </>
    )
}