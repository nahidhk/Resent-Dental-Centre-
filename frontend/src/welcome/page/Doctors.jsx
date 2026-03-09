import React, { useEffect } from "react";
import Box from "../components/porpos/Box";
import doctors from "../assets/pageImg/docotors.png";
import Card from "../components/porpos/Card";
import arif from "../assets/doctors/arif.png"



export default function Doctors() {
useEffect(() => {
    document.title = "Rds - Doctors"
}, [])
    return (
        <>
            <Box>
                <div className="flex beet medel mbColumn mobileStup loginPage">
                    <div className="flex center medel imgBox round">
                        <img src={doctors} alt="" className="web-homeImg round" />
                    </div>
                    <div className="idol flex center medel">
                      <Card>
                        <img src={arif} className="userImg" />
                        <h2>
                            Dr. Name last name 
                        </h2>
                        <p>
                                
                        </p>
                      </Card>
                    </div>
                </div>
            </Box>
        </>
    )
}