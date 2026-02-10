import React from "react";
import BarCodeSvg from "../../../barcode/BarCodeSvg";
import { FaPrescription } from "react-icons/fa6";
import { useRestApi } from "../../../../hooks/getjson/useRestApi";
import sexType from "../../../../data/present/sex.json";
import { convertToBangla } from "../../../../scripts/banglaConvart";
import { GiCheckMark } from "react-icons/gi";
import { capitalLetar } from "../../../../scripts/capitalLetar";


export default function MainContent({ pageData }) {
    const { jsonData: users = [] } = useRestApi("users");
    const { jsonData: categories = [] } = useRestApi("category");
    // Loand and find Mobile number to user Data //
    const numbertp = pageData?.userNumber;
    const patientInfo = users.find(user => String(user.number) === String(numbertp));
    const cruccetSex = sexType.find(sexX => String(sexX.id) === String(patientInfo?.sex))?.name || "______";

    return (
        <>
            <div className="nameBox w100 ">
                <div className="flex around ">
                    <div>
                        <p className="margin">
                            <b>Name : </b>
                            <i>{capitalLetar(patientInfo?.name) || "                 "}</i>
                        </p>
                        <p className="margin">
                            <b>Patient ID : </b>
                            <span>{pageData?.rpid || "               "}</span>
                        </p>
                    </div>
                    <div>
                        <p className="margin">
                            <b>Sex : </b>
                            <i>{cruccetSex}</i>
                        </p>
                        <p className="margin">
                            <b>Phone : </b>
                            <span>{pageData?.userNumber || "                 "}</span>
                        </p>
                    </div>
                    <div>
                        <p className="margin">
                            <b>Age : </b>
                            <i>{patientInfo?.age || "_____"}Y</i>
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
                                    Chief Complaint
                                </p>
                            </div>
                            <div className="flex beet blankPrintAutoFill">
                                <div>
                                    <ul>
                                        {
                                            pageData?.cc_oe_avd_xry?.cc.notes.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    {/* ================ C/C Graph ================ */}

                                    {
                                        pageData?.cc_oe_avd_xry?.cc?.graphOn === true ?
                                            (
                                                <div className="flex cloman animation">
                                                    <div className="flex">
                                                        <div className="rayBox borderRB set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.cc?.graph?.LT ? (<GiCheckMark />) : ("")
                                                            }
                                                        </div>
                                                        <div className="rayBox borderLB set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.cc?.graph?.RT ? (<GiCheckMark />) : ("")
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="rayBox borderRT set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.cc?.graph?.LB ? (<GiCheckMark />) : ("")
                                                            }
                                                        </div>
                                                        <div className="rayBox borderLT set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.cc?.graph?.RB ? (<GiCheckMark />) : ("")
                                                            }
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
                                    On Examination
                                </p>
                            </div>
                            <div className="flex beet blankPrintAutoFill">
                                <div>
                                    <ul>
                                        {
                                            pageData?.cc_oe_avd_xry?.oe.notes.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    {/* ================ O/E ================= */}

                                    {
                                        pageData?.cc_oe_avd_xry?.oe?.graphOn === true ?
                                            (
                                                <div className="flex cloman animation">
                                                    <div className="flex">
                                                        <div className="rayBox borderRB set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.oe?.graph?.LT
                                                            }
                                                        </div>
                                                        <div className="rayBox borderLB set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.oe?.graph?.RT
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="rayBox borderRT set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.oe?.graph?.LB
                                                            }
                                                        </div>
                                                        <div className="rayBox borderLT set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.oe?.graph?.LR
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : ("")
                                    }
                                    {/* ======================================== */}
                                </div>
                            </div>
                        </div>
                        {/* AVD Setting */}
                        <div>
                            <div>
                                <p className="bigText">
                                    Advice
                                </p>
                            </div>
                            <div className="flex beet blankPrintAutoFill">
                                <div>
                                    <ul>
                                        {
                                            pageData?.cc_oe_avd_xry?.avd.notes.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    {/* ================== AVD =============== */}
                                    {
                                        pageData?.cc_oe_avd_xry?.avd?.graphOn === true ?
                                            (
                                                <div className="flex cloman animation">
                                                    <div className="flex">
                                                        <div className="rayBox borderRB set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.avd?.graph?.LT
                                                            }
                                                        </div>
                                                        <div className="rayBox borderLB set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.avd?.graph?.RT
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="rayBox borderRT set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.avd?.graph?.LB
                                                            }
                                                        </div>
                                                        <div className="rayBox borderLT set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.avd?.graph?.LR
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : ("")
                                    }
                                    {/* ========================================= */}
                                </div>
                            </div>
                        </div>
                        {/* X-Ray Setting */}
                        <div>
                            <div>
                                <p className="bigText">
                                    X-Ray
                                </p>
                            </div>
                            <div>
                                {
                                    pageData?.cc_oe_avd_xry?.x_ray?.opg
                                }
                            </div>
                            <div className="flex beet blankPrintAutoFill">
                                <div>
                                    {
                                        pageData?.cc_oe_avd_xry?.x_ray?.iopa?.title
                                    }
                                </div>
                                <div>
                                    {/* ================IOPA Graph =============== */}
                                    {
                                        pageData?.cc_oe_avd_xry?.x_ray?.iopa?.graphOn === true ?
                                            (
                                                <div className="flex cloman animation">
                                                    <div className="flex">
                                                        <div className="rayBox borderRB set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.x_ray?.iopa?.graph?.LT
                                                            }
                                                        </div>
                                                        <div className="rayBox borderLB set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.x_ray?.iopa?.graph?.RT
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="rayBox borderRT set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.x_ray?.iopa?.graph?.LB
                                                            }
                                                        </div>
                                                        <div className="rayBox borderLT set">
                                                            {
                                                                pageData?.cc_oe_avd_xry?.x_ray?.iopa?.graph?.LR
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : ("")
                                    }
                                    {/* =============================================== */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w100 borderset ">
                    <div className="flex beet">
                        <span>
                            <FaPrescription className="iconr" />
                        </span>
                        <span>
                            <BarCodeSvg code={pageData?.rpid} />
                        </span>
                    </div>
                    <div>
                        <ol>
                            {pageData?.medicineData?.length > 0 ? (
                                pageData?.medicineData.map((item, index) => (
                                    <li key={index}>
                                        <div className="lineStyle">
                                            <span>
                                                <span className="captext">
                                                    {
                                                        capitalLetar(categories.find(cat => String(cat.id) === String(item.categore))?.name || " ")
                                                    }.&nbsp;
                                                    {capitalLetar(item.medicine)}
                                                </span>
                                            </span>
                                                <span className="medicineNotes flex beet w100 medel">
                                                    <p>
                                                        {convertToBangla(item.timeL)}
                                                    </p>
                                                    <p className="dashG">
                                                        
                                                    </p>
                                                    <p>
                                                        {item.notes}
                                                    </p>
                                                    <p className="dashG">
                                                        
                                                    </p>
                                                    <p>
                                                        {convertToBangla(item.setDay)}
                                                    </p>
                                                </span>
                                        </div>

                                    </li>

                                ))
                            ) : ""}
                        </ol>
                    </div>
                </div>



            </div>
        </>
    )
}