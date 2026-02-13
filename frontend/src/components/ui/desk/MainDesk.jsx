import React from "react";
import SiteName from "../../../hooks/SiteName"
import Clock from "../components/Clock";
import Weather from "../../wathear/Weather";


export default function MainDesk() {

    return (
        <>
            <blockquote>
                <br />
                
                <div className="flex around medel">
                    <div className="w100">
                        <b className="title">
                            <SiteName />
                        </b>
                    </div>
                    <div>
                        <Weather />
                    </div>
                    <div className="w100">
                        <Clock />
                    </div>
                </div>
            </blockquote>
        </>
    );
}
