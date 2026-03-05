import React, { useEffect } from "react";
import Box from "../components/porpos/Box";
import doctors from "../assets/pageImg/docotors.png";
import Head from "../../components/system/print/Components/Head";



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
                       <Head />
                    </div>
                </div>
            </Box>
        </>
    )
}