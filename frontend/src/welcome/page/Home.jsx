import React from "react";
import Box from "../components/porpos/Box";
import HomeImg from "../assets/588302125_3973849302913489_5961459030279599930_n.jpg"

export default function Home() {
    return (
        <>
            <Box>
                <div className="flex beet medel">
                    <div>
                        <div className="web-name">
                            <span className="vw5">
                                Your Perfect Smile Starts with Resent Dental
                            </span>
                            <p className="smailTitle">
                                Advanced dental care with a gentle touch. <br />
                                Book your appointment today.
                            </p>
                            <br /><br />
                            <div className="flex center beet">
                                <div className="web-card">
                                    <div className="workTimeBox flex center medel ">
                                        <div>
                                            <h2>
                                                Working Time
                                            </h2>
                                            <br />
                                            <p>
                                                Monday-Friday 
                                                9AM-9PM <br />
                                                Saturday, Sunday 
                                                10AM-6PM
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                       <div className="tofay flex medel center">
                                        today
                                       </div>
                                    </div>
                                </div>

                                <div className="web-card flex center medel clomanC pinBtn">
                                    <span>
                                        Icon
                                    </span>
                                    <p>
                                        This is smaill text
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex center medel imgBox">
                        <img src={HomeImg} alt="" className="web-homeImg" />
                    </div>
                </div>
            </Box>
        </>
    )
}