import React, { useEffect, useState } from "react";
import PresentAbbPrepction from "../components/prepction/PresentAbbPrepction";
import MedicineAddPrepction from "../components/prepction/medicineAddPrepction";
import CcOeADVX_ray from "../components/prepction/CcOeADVX_ray";
import { brCodeID } from "../components/barcode/brCodeID";
import { todayDate } from "../scripts/todayDate";
import UiModiulNav from "../components/ui/components/UiModiulNav";
import MainContent from "../components/system/print/Components/MainContent";
import { CgClose } from "react-icons/cg";
import { postApi } from "../hooks/post/postApi";
import { toast } from "react-toastify";
import A4page from "../components/system/print/A4page";

export default function Prescription() {
    const recordsMedicen_DB = "patient_records"
    const [medicineData, setMedicineData] = useState(null);
    const [newPatient, setNewPatient] = useState(null);
    const [prepctionAllData, setPrepctionAllData] = useState(null);
    const [on_CC_OE_ADV_XRY_Data, set_ON_CC_OE_ADV_XRY] = useState(null);

    const [barcode] = useState(brCodeID());
    const pNumber = newPatient ? newPatient.number : null;
    const [today] = useState(todayDate())

    const [demoShow, setDemoShow] = useState(false);
    const [printOk, setPrintOk] = useState(false);
    const alldata = {
        date: today,
        rpid: barcode,
        userNumber: pNumber,
        medicineData: medicineData,
        cc_oe_avd_xry: on_CC_OE_ADV_XRY_Data,
    };
    const handelApppageData = () => {
        setPrepctionAllData(alldata);
        setDemoShow(true);
    }

    const handelSaveToServerData = () => {
        if (alldata.userNumber) {
            postApi({
                db_name: "patient_records",
                data: alldata
            });
            toast.info("Lodding....");
            setPrintOk(true);
            setPrepctionAllData(alldata);
        } else {
            toast.error("else the Number!");
        }
    }

    return (
        <div className="uiModiul animate__animated animate__backInUp">
            <UiModiulNav />
            {/* <div>{JSON.stringify(prepctionAllData)}</div> */}
            <div className="uiBox" >
                <PresentAbbPrepction onAddPatient={setNewPatient} />
                {
                    pNumber && (
                        <MedicineAddPrepction onAddMedicine={setMedicineData} />
                    )
                }


            </div>
            <div className="flex center w100">
                <div className="uiBox scroll animate__fadeIn animate__animated">
                    <CcOeADVX_ray on_CC_OE_ADV_XRY={set_ON_CC_OE_ADV_XRY} />
                </div>

                <div className="uiBox">
                    <div>
                        {
                            medicineData && medicineData.length > 0 ? (
                                <div>
                                    <h3>Medicine List:</h3>
                                    <ul>
                                        {medicineData.map((med, index) => (
                                            <li className="list" key={index}>
                                                {med.medicine} ------ {med.timeL} ------- {med.notes} --------- {med.setDay}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <p>No medicines added.</p>
                            )
                        }
                    </div>

                    {
                        demoShow && (
                            <div className="popupBG">
                                <div className="popup">
                                    <div className="flex beet">
                                        <div></div>
                                        <div onClick={() => setDemoShow(false)} className="closeButton">
                                            <CgClose className="iconx" />
                                        </div>
                                    </div>
                                    <MainContent pageData={prepctionAllData} />
                                </div>
                            </div>
                        )
                    }
                    {
                        printOk && (
                            <div className="popupBG">
                                <div className="popup">
                                    <div className="flex beet">
                                        <div></div>
                                        <div onClick={() => setPrintOk(false)} className="closeButton">
                                            <CgClose className="iconx" />
                                        </div>
                                    </div>
                                    <A4page pageData={prepctionAllData} />
                                </div>
                            </div>
                        )
                    }
                   
                </div>
                <div className="uiBox w200px">
                    {/* Add the coustonbutton and setup now */}
                    {/* today is veribad so do not cool this update  */}
                    <button onClick={handelApppageData} className="btn printBtn">
                        View Graphic
                    </button>
                    <button onClick={handelSaveToServerData} className="btn printBtn">
                        Save and Print
                    </button>
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}
