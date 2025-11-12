import React, { useRef } from "react";
import DoctorData from "../data/config/prescription.json";
import siteinfo from "../data/setting/siteDetels.json";
import logo from "../assets/img/logo.jpg";
import { useReactToPrint } from "react-to-print";
import { convertToBangla } from "../scripts/banglaConvart";
import { FaPrescription } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
import { brCode } = 

export default function A4page({ patientData, medicineData }) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
    });

    return (
        <>
            <div className="mainBox flex center">
                <div className="contBox">
                    <div className="ex" ref={componentRef}>
                        {/* Header */}
                        <div className="modiul1">
                            <div className="flex w100 center">
                                <div className="flex around w95">
                                    <div className="w100">
                                        <h2>{DoctorData.doctor_name.bangla_name}</h2>
                                        <h3>{DoctorData.doctor_subname.bangla_subname}</h3>
                                        <p>
                                            {DoctorData.doctor_degree.bangla_degree}
                                            <br />
                                            বিএমডিসি রেজিঃ নং-{DoctorData.mbdc_no}
                                            <br />
                                            মোবাইল: {DoctorData.doctor_phone}
                                        </p>
                                    </div>

                                    <div className="w100 textCenter flex center end cloman">
                                        <div className="w100">
                                            <img className="pLogo" src={logo} alt="" />
                                        </div>
                                        <div className="banar flex center medel">
                                            {siteinfo.fullName}
                                        </div>
                                    </div>

                                    <div className="w100 textRight">
                                        <h2>{DoctorData.doctor_name.english_name}</h2>
                                        <h3>{DoctorData.doctor_subname.english_subname}</h3>
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

                            <div className="nameBox flex around medel w100">
                                <span>
                                    <b>Name : </b>
                                    <i>{patientData.name}</i>
                                </span>
                                <span>
                                    <b>Sex : </b>
                                    <i>{patientData.sex}</i>
                                </span>
                                <span>
                                    <b>Age : </b>
                                    <i>{patientData.age}</i>
                                </span>
                                <span>
                                    <b>Date : </b>
                                    <i>{patientData.date}</i>
                                </span>
                            </div>
                        </div>

                        {/* Prescription list */}
                        <div className="flex beet w100 modiul2">
                            <div className="sideBar">
                                <blockquote>
                                    <div className="cloman">C/C</div>
                                    <div className="cloman">O/E</div>
                                    <div className="cloman">ADV:</div>
                                    <div className="cloman">X-Ray:</div>
                                </blockquote>
                            </div>

                            <div className="w100">
                                <FaPrescription className="iconr" />
                                <blockquote>
                                    {medicineData?.length > 0 ? (
                                        medicineData.map((item, index) => (
                                            <div key={index} className="flex beet lineStyle">
                                                <div>
                                                    <span className="captext">
                                                        {item.categore} {item.medicine}
                                                    </span>
                                                    <br />
                                                    {convertToBangla(item.timeL)} {item.notes}
                                                </div>
                                                <div>{convertToBangla(item.setDay)}</div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="textCenter">No prescription added yet.</p>
                                    )}
                                </blockquote>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="modiul3">
                            <div className="segestBox flex beet w100">
                                <div className="t16">
                                    <ul>
                                        {(DoctorData?.detels?.idaya || []).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="mark">চেম্বার :</p>
                                    <p>{siteinfo.fullName}</p>
                                    <p className="mark">রোগী দেখার সময়:</p>
                                    <p className="t16">{DoctorData.chamber_time}</p>
                                </div>
                            </div>

                            <div className="bottomSystem t16 w100">
                                {DoctorData.bottomtext}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Print Button */}
            <div className="hash flex flex-end w100">
                <button className="printBtn" onClick={handlePrint}>
                    <IoMdPrint className="iconx" /> Print
                </button>
            </div>
        </>
    );
}
