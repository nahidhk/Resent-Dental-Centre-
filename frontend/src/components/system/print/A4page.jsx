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
            <div className="flex center">
                <div>
                    <div className="contBox flex" ref={componentRef}>
                        {/* HEADER + MODIUL 1 */}
                        <div>
                           <Head />
                           <MainContent pageData={pageData} />
                        </div>

                        <div>
                            {/* MODIUL 3 — ALWAYS BOTTOM */}
                          <Bottom />
                        <sub>Software: www.ndsql.top</sub>
                        </div >
                    </div >
                </div >
            </div >

           <div className="flex center">
             <button className="fullBtn" onClick={handlePrint}>
               <IoMdPrint /> Print Prepction for A4 Page
            </button>
           </div>

        </>
    );
}