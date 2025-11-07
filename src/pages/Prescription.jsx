import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import DoctorData from "../data/config/prescription.json"
import siteinfo from "../data/setting/siteDetels.json"

export default function Prescription() {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
    });



    return (
        <>

            <div className="mailholdbox flex center" ref={componentRef}>

                <div className="w100">
                    <br />
                    {/* nodiul 1 */}
                    <div className="flex w100 center">
                        <div className="flex around w95">
                            <div className="stm300">
                                <h2>
                                    {DoctorData.doctor_name.bangla_name}
                                </h2>
                                <h3>
                                    {DoctorData.doctor_subname.bangla_subname}
                                </h3>
                                <p>
                                    {DoctorData.doctor_degree.bangla_degree}
                                    <br />
                                    বিডিএস রেজিঃ নং-{DoctorData.mbdc_no}
                                    <br />
                                    মোবাইল: {DoctorData.doctor_phone}
                                </p>
                            </div>
                            <div className="stm300">
                                <div className="banar">
                                    {siteinfo.fullName}
                                </div>
                            </div>
                            <div className="stm300 textRight">
                                <h2>
                                    {DoctorData.doctor_name.english_name}
                                </h2>
                                <h3>
                                    {DoctorData.doctor_subname.english_subname}
                                </h3>
                                <p>
                                    {DoctorData.doctor_degree.english_degree}
                                    <br />
                                    BMDC Reg. No.-{DoctorData.mbdc_no}
                                    <br />
                                    Mobile: {DoctorData.doctor_phone}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modiul 2 */}
                    <div className="nameBox flex around medel">
                        <span>Name:</span>
                        <span>Sex:</span>
                        <span>Age:</span>
                        <span>Date:</span>

                    </div>

                    {/* modiul 3 */}
                    <div className="flex beet">
                        <div className="h90vh">
                            <blockquote>
                                <div className="cloman">
                                    C/C
                                </div>

                                <div className="cloman">
                                    O/E
                                </div>
                                <div className="cloman">
                                    ADV:
                                </div>
                                <div className="cloman">
                                    X-Ray:
                                </div>
                            </blockquote>
                        </div>
                        <div className="">

                        </div>
                    </div>

                    {/* modiul 4 */}
                    <div className="segestBox flex around">
                        <div>
                            <ul>
                                {DoctorData.detels.idaya.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <blockquote>
                                <p className="mark">
                                    চেম্নার : 
                                </p>
                                <h2>
                                    {siteinfo.fullName}
                                </h2>
                                <p className="mark">
                                    রোগী দেখার দেখার সময়: 
                                </p>
                                <p>
                                    {DoctorData.chamber_time}
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    {/* modiul 5 */}
                    <div className="bottomSystem">
                        {DoctorData.bottomtext}
                    </div>
                </div>
            </div>

            <button onClick={handlePrint}>Print</button>


            <br />
            <br />
            <br />
        </>
    );
}
