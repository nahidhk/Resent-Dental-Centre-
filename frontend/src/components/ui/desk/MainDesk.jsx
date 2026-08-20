import React from "react";
import SiteName from "../../../hooks/SiteName"
import Clock from "../components/Clock";



export default function MainDesk() {

    return (
        <>
            <blockquote>
                <br />
                
                <div className="flex center cloman medel">
                    <div>
                        <b className="title">
                            <SiteName />
                        </b>
                    </div>
                    <div>
                       <br />
                    </div>
                    <div className="w100">
                        <Clock />
                    </div>
                </div>
            </blockquote>
        </>
    );
}
