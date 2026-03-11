import React, { useEffect } from "react";
import Box from "../components/porpos/Box";
import doctors from "../assets/pageImg/docotors.png";
import Card from "../components/porpos/Card";
import arif from "../assets/doctors/arif.png"
import DoctorData from "../../data/config/prescription.json";


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
                         
                            <p>
                                <h2>{DoctorData.doctor_name.english_name}</h2>
                                <h3>{DoctorData.doctor_subname.english_subname}</h3>
                                <p>
                                    {DoctorData.doctor_degree.english_degree}
                                    <br />
                                    BMDC Reg. No.-{DoctorData.mbdc_no}
                                    <br />
                                    Mobile: {DoctorData.doctor_phone}
                                </p>
                            </p>
                        </Card>
                    </div>
                </div>
            </Box>
        </>
    )
}