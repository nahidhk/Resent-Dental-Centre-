import React, { useState } from "react";
import SiteName from "../../../hooks/SiteName"
import Clock from "../components/Clock";


export default function MainDesk() {

    return (
        <>
            <br />
            <br />
            <br />
            <div className="flex around">
                <div>
                    <blockquote>
                        <b className="title">
                            <SiteName />
                        </b>
                    </blockquote>

                </div>
                {/* clock */}
                <div>
                    <Clock />
                </div>
            </div>
        </>
    );
}
