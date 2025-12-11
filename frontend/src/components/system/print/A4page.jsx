import React, { useRef } from "react";
import DoctorData from "../../../data/config/prescription.json";
import siteinfo from "../../../data/setting/siteDetels.json";
import { useReactToPrint } from "react-to-print";
import { convertToBangla } from "../../../scripts/banglaConvart";
import { IoMdPrint } from "react-icons/io";
import Head from "./Components/Head";
import Bottom from "./Components/Bottom";
import MainContent from "./Components/MainContent";

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
                           <MainContent pageData={pageData} />
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