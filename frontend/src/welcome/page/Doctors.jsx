import React, { useEffect } from "react";
import Box from "../components/porpos/Box";
import doctors from "../assets/pageImg/docotors.png";




export default function Doctors() {
useEffect(() => {
    document.title = "Rds - Doctors"
}, [])
    return (
        <>
            <Box>
                <div className="flex beet medel mbColumn mobileStup loginPage">
                    <div className="flex center medel imgBox">
                        <img src={doctors} alt="" className="web-homeImg" />
                    </div>
                    <div className="idol">
                        <h1>
                            Dr. md nahidul islam
                        </h1>
                    </div>
                </div>
            </Box>
        </>
    )
}