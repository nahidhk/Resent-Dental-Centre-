import React, { useRef } from "react";
import DoctorData from "../../../data/config/prescription.json";
import siteinfo from "../../../data/setting/siteDetels.json";
import logo from "../../../assets/img/logo.jpg";
import { useReactToPrint } from "react-to-print";
import { convertToBangla } from "../../../scripts/banglaConvart";
import { FaPrescription } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
import BarCodeSvg from "../../barcode/BarCodeSvg";
import "./A4page";

export default function A4page({ patientData, medicineData }) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
    });

    return (
        <div>
            <div className="mainBox flex center">
                <div>
                    <div className="contBox flex flex-col justify-between" ref={componentRef}>
                        {/* HEADER + MODIUL 1 */}
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
                                    <i>{patientData?.name || "____________________"}</i>
                                </span>
                                <span>
                                    <b>Sex : </b>
                                    <i>{patientData?.sex || "______"}</i>
                                </span>
                                <span>
                                    <b>Age : </b>
                                    <i>{patientData?.age || "____"}Y</i>
                                </span>
                                <span>
                                    <b>Date : </b>
                                </span>
                            </div>


                            {/* MODIUL 2 */}
                            <div className="flex beet w100 modiul2">
                                <div className="sideBar">
                                    <div className="cloman">
                                        <span className="bigText">C/C</span>
                                        <br />
                                        <div className="flex">
                                            <div>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, delectus vitae amet ipsum excepturi perferendis corrupti? Placeat harum accusamus corrupti, repellendus vel, praesentium at quasi quibusdam velit fuga iusto beatae?
                                            </div>
                                            <div className="flex cloman">
                                                <div className="flex">
                                                    <div className="rayBox borderRB">
                                                        <input type="checkbox" className="checkSystem" />
                                                    </div>
                                                    <div className="rayBox borderLB">
                                                        <input type="checkbox" className="checkSystem" />
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="rayBox borderRT">
                                                        <input type="checkbox" className="checkSystem" />
                                                    </div>
                                                    <div className="rayBox borderLT">
                                                        <input type="checkbox" className="checkSystem" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cloman">O/E</div>
                                    <div className="cloman">ADV:</div>
                                    <div className="cloman">X-Ray:</div>
                                </div>

                                <div className="w100 borderset">
                                    <div className="flex medel beet ">
                                        <FaPrescription className="iconr" />
                                        <span>
                                            <BarCodeSvg code={"1234567"} />
                                        </span>
                                    </div>
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

                        </div>



                        {/* MODIUL 3 — ALWAYS BOTTOM */}
                        <div className="modiul3 mt-auto">
                            <div className="segestBox flex beet w100">
                                <div className="t16">
                                    <ul>
                                        {(DoctorData?.detels?.idaya || []).map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex">
                                        <p className="mark">চেম্বার :</p>
                                    </div>
                                    <p>
                                        {siteinfo.fullName} <br />
                                        <span className="t16">
                                            {DoctorData.doctor_address.bangla_address}
                                        </span>
                                    </p>
                                    <div className="flex">
                                        <p className="mark">রোগী দেখার সময়:</p>
                                    </div>
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

            <button onClick={handlePrint}>
                print
            </button>
        </div>
    );
}
