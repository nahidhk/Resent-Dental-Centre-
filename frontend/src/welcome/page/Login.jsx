import React, { useState, useEffect } from "react";
import Box from "../components/porpos/Box";
import { capitalLetar } from "../../scripts/capitalLetar";
import loginphoto from "../assets/pageImg/loginImg.png";





export default function Login() {


    return (
        <>
            <Box>
                <div className="flex beet medel mbColumn mobileStup loginPage">
                    <div className="flex center medel imgBox">
                        <img src={loginphoto} alt="" className="web-homeImg" />
                    </div>
                    <div className="idol">
                        <div className="flex center medel clomanC">
                            <div className="textCenter">
                                <h1>
                                    Book an Appointment
                                </h1>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number: &nbsp;&nbsp;</label>
                                <br />
                                <input type="text" className="input w100" placeholder="018xxxxxxxx" />
                            </div>
                            <div className="padding">
                                 <button className="roundBtn">
                                    Join and Book the Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box >
        </>
    )
}