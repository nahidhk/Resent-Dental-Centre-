import React, { useEffect } from "react";
import Box from "../components/porpos/Box";
import doctors from "../assets/pageImg/docotors.png";
import Card from "../components/porpos/Card";



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
                      <Card />
                    </div>
                </div>
            </Box>
        </>
    )
}