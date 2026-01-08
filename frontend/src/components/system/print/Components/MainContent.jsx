import React from "react";
import BarCodeSvg from "../../../barcode/BarCodeSvg";
import { FaPrescription } from "react-icons/fa6";
import { useRestApi } from "../../../../hooks/getjson/useRestApi";
import sexType from "../../../../data/present/sex.json";
import { convertToBangla } from "../../../../scripts/banglaConvart"


export default function MainContent({ pageData }) {
    const { jsonData: users = [] } = useRestApi("users");
    const numbertp = pageData?.userNumber;
    const patientInfo = users.find(user => String(user.number) === String(numbertp));
    const cruccetSex = sexType.find(sexX => String(sexX.id) === String(patientInfo?.sex))?.name || "______";

    //console.log(pageData?.medicineData)


    return (
        <>
            <div className="nameBox w100 ">
                <div className="flex around ">



                    <div>
                        <p className="margin">
                            <b>Name : </b>
                            <i>{patientInfo?.name || "____________________"}</i>
                        </p>
                        <p className="margin">
                            <b>Patient ID : </b>
                            <span>{pageData?.rpid || "____________________"}</span>
                        </p>
                    </div>

                    <div>
                        <p className="margin">
                            <b>Sex : </b>
                            <i>{cruccetSex}</i>
                        </p>

                        <p className="margin">
                            <b>Phone : </b>
                            <span>{pageData?.userNumber || "____________________"}</span>
                        </p>
                    </div>
                    <div>
                        <p className="margin">
                            <b>Age : </b>
                            <i>{patientInfo?.age || "____"}Y</i>
                        </p>

                        <p className="margin">
                            <b>Date : </b>
                            <span>
                                {pageData?.date}
                            </span>
                        </p>
                    </div>
                </div>
            </div>


            {/* MODIUL 2 */}
            <div className="flex beet w100 modiul2">
                <div className="sideBar">
                    <div className="flex cloman">
                        {/* C/C setting */}
                        <div datatype="C/C">
                            <div>
                                <p className="bigText">
                                    C/C:
                                </p>
                            </div>
                            <div className="flex beet">
                                <div>
                                    {pageData?.cc_oe_avd_xry?.cc.notes || ""}
                                </div>
                                <div>
                                    {/* ===========C/C Graph ================ */}
                                    {
                                        pageData?.cc_oe_avd_xry?.cc?.graphOn === true ?
                                            (
                                                <div className="flex cloman animation">
                                                    <div className="flex">
                                                        <div className="rayBox borderRB set">
                                                            {/* LT Value*/}
                                                        </div>
                                                        <div className="rayBox borderLB set">
                                                            {/* RT Value*/}
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="rayBox borderRT set">
                                                            {/* LB Value*/}
                                                        </div>
                                                        <div className="rayBox borderLT set">
                                                            {/* RB Value*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : ("")
                                    }
                                    {/* ================================================= */}

                                </div>
                            </div>
                        </div>
                        {/* O/E Setting */}
                        <div>
                            <div>
                                <p className="bigText">
                                    O/E:
                                </p>
                            </div>
                            <div className="flex beet">
                                <div>
                                    notes
                                </div>
                                <div>
                                    {/* ================ O/E ================= */}
                                    <div className="flex cloman">
                                        <div className="flex">
                                            <div className="rayBox borderRB set">
                                                {/* LT Value*/}
                                            </div>
                                            <div className="rayBox borderLB set">
                                                {/* RT Value*/}
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="rayBox borderRT set">
                                                {/* LB Value*/}
                                            </div>
                                            <div className="rayBox borderLT set">
                                                {/* RB Value*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/* ======================================== */}
                                </div>
                            </div>
                        </div>
                        {/* AVD Setting */}
                        <div>
                            <div>
                                <p className="bigText">
                                    AVD:
                                </p>
                            </div>
                            <div className="flex beet">
                                <div>
                                    Notes
                                </div>
                                <div>
                                    {/* ================== AVD =============== */}
                                    <div className="flex cloman">
                                        <div className="flex">
                                            <div className="rayBox borderRB set">
                                                {/* LT Value*/}
                                            </div>
                                            <div className="rayBox borderLB set">
                                                {/* RT Value*/}
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="rayBox borderRT set">
                                                {/* LB Value*/}
                                            </div>
                                            <div className="rayBox borderLT set">
                                                {/* RB Value*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/* ========================================= */}
                                </div>
                            </div>
                        </div>
                        {/* X-Ray Setting */}
                        <div>
                            <div>
                                <p className="bigText">
                                    X-Ray:
                                </p>
                            </div>
                            <div>
                                * OPG X-Ray
                            </div>
                            <div className="flex beet">
                                <div>
                                    * IOPA View
                                </div>
                                <div>
                                    {/* ================IOPA Graph =============== */}
                                    <div className="flex cloman">
                                        <div className="flex">
                                            <div className="rayBox borderRB set">
                                                {/* LT Value*/}
                                            </div>
                                            <div className="rayBox borderLB set">
                                                {/* RT Value*/}
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="rayBox borderRT set">
                                                {/* LB Value*/}
                                            </div>
                                            <div className="rayBox borderLT set">
                                                {/* RB Value*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/* =============================================== */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w100 borderset ">
                    <div className="flex medel beet">
                        <span>
                            <FaPrescription className="iconr" />
                        </span>
                        <span>
                            <BarCodeSvg code={pageData?.rpid} />
                        </span>
                    </div>




                    <blockquote>
                        <ol>
                            {pageData?.medicineData?.length > 0 ? (
                                pageData?.medicineData.map((item, index) => (

                                    <li key={index}>
                                        <div className="flex beet lineStyle">
                                            <div>
                                                <span className="captext">
                                                    {item.categore} {item.medicine}
                                                </span>
                                                <br />
                                                <p className="medicineNotes">
                                                    {convertToBangla(item.timeL)} ---------------- {item.notes}--------------
                                                </p>
                                            </div>
                                            <div className="medicineNotes flex center medel">
                                                {convertToBangla(item.setDay)}
                                            </div>
                                        </div>
                                    </li>

                                ))
                            ) : (
                                <p className="textCenter">No prescription added yet.</p>
                            )}
                        </ol>

                    </blockquote>



                </div>
            </div>
        </>
    )
}