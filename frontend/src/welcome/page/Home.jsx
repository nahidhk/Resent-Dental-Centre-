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
                            Your Perfect Smile Starts with Resent Dental
                        </div>
                    </div>


                    <div className="flex center medel">
                        <img src={HomeImg} alt="" className="web-homeImg" />
                    </div>
                </div>
            </Box>
        </>
    )
}