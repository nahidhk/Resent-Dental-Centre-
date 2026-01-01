import React, { useState } from "react";
import SiteName from "../../../hooks/SiteName"
import Clock from "../components/Clock";


export default function MainDesk() {

    return (
        <>
            <blockquote>
                <br />
                <br />
                <br />
                <div className="flex around">
                    <div className="w100">
                        <b className="title">
                            <SiteName />
                        </b>
                    </div>
                    <div className="w100">
                        <Clock />
                    </div>
                </div>
            </blockquote>
        </>
    );
}
