import React, { useState, useEffect } from "react";
import Box from "../components/porpos/Box";
import { capitalLetar } from "../../scripts/capitalLetar";





export default function Login() {


    return (
        <>
            <Box>
                <div className="flex beet medel mbColumn mobileStup loginPage">
                    <div className="idol">
                        <div className="web-name">
                            <span className="vw5">
                            
                            </span>
                            <p className="smailTitle">
                                Advanced dental care with a gentle touch. <br />
                                Book your appointment today.
                            </p>
                            <br /><br />
                            <div className="flex center beet mbColumn">
                                <div className="web-card">
                                    <div className="workTimeBox flex center medel ">
                                        <div>
                                            <h2>
                                                Working Time
                                            </h2>
                                            <br />
                                            <div>
                                                <div className="flex around">
                                                    <div className="padding">Saturday - Thursday </div>
                                                    <div className="padding"> 9AM - 8PM</div>
                                                </div>
                                                <div className="flex beet medel">
                                                    <div>
                                                        <div class="loader3"></div>
                                                    </div>
                                                    <div>
                                                        Master Plaza (2nd Floor),
                                                        <br /> next to Square Market,
                                                        <br />  Ataikula Bazar, Pabna.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                      
                                           
                                    </div>
                                </div>

                                <div  className="web-card flex center medel clomanC pinBtn pointer">
                                    <div className="clickRound flex center medel">
                                        
                                    </div>
                                    <p className="similr">
                                        Book an Appointment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex center medel imgBox">
                    
                    </div>
                </div>
            </Box >
        </>
    )
}