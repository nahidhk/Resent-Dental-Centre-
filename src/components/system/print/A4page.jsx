import React, { useRef } from "react";
import DoctorData from "../../../data/config/prescription.json";
import siteinfo from "../../../data/setting/siteDetels.json";
import { useReactToPrint } from "react-to-print";
import { convertToBangla } from "../../../scripts/banglaConvart";
import { FaPrescription } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
import BarCodeSvg from "../../barcode/BarCodeSvg";
import Head from "./Components/Head";
import Bottom from "./Components/Bottom";

export default function A4page({ pageData }) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
    });

    return (
        <>
            <div className="mainBox flex center">
                <div>
                    <div className="contBox flex" ref={componentRef}>
                        {/* HEADER + MODIUL 1 */}
                        <div className="modiul1">
                           <Head />


                            <div className="nameBox flex around medel w100">
                                <span>
                                    <b>Name : </b>
                                    <i>{"____________________"}</i>
                                </span>
                                <span>
                                    <b>Sex : </b>
                                    <i>{"______"}</i>
                                </span>
                                <span>
                                    <b>Age : </b>
                                    <i>{"____"}Y</i>
                                </span>
                                <span>
                                    <b>Date : </b>
                                    <span>
                                        {pageData?.date}
                                    </span>
                                </span>
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

                                <div className="w100 borderset">
                                    <div className="flex medel beet ">
                                        <FaPrescription className="iconr" />
                                        <span>
                                            <BarCodeSvg code={pageData?.rpid} />
                                        </span>
                                    </div>




                                    {/* <blockquote>
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

                                            </blockquote> */}



                                </div>
                            </div>
                        </div>

                        <div>
                            {/* MODIUL 3 — ALWAYS BOTTOM */}
                          <Bottom />
                        </div >
                    </div >
                </div >
            </div >
            <button onClick={handlePrint}>
                print
            </button>

        </>
    );
}