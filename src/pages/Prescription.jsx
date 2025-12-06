import React, { useEffect, useState } from "react";
import A4page from "../components/system/print/A4page";
import PresentAbbPrepction from "../components/prepction/PresentAbbPrepction";
import MedicineAddPrepction from "../components/prepction/medicineAddPrepction";
import CcOeADVX_ray from "../components/prepction/CcOeADVX_ray";
import { brCodeID } from "../components/barcode/brCodeID";
import { todayDate } from "../scripts/todayDate";

export default function Prescription() {
    const [medicineData, setMedicineData] = useState(null);
    const [newPatient, setNewPatient] = useState(null);
    const [prepctionAllData, setPrepctionAllData] = useState(null);
    const [on_CC_OE_ADV_XRY_Data, set_ON_CC_OE_ADV_XRY] = useState(null);

    const [barcode] = useState(brCodeID());
    const pNumber = newPatient ? newPatient.number : null;
    const [today] = useState(todayDate())


    const handelApppageData = () => {
        const alldata = {
            date: today,
            rpid: barcode,
            userNumber: pNumber,
            medicineData: medicineData,
            cc_oe_avd_xry: on_CC_OE_ADV_XRY_Data,
        };
        setPrepctionAllData(alldata);
    }


    return (
        <>
            <div>{JSON.stringify(prepctionAllData)}</div>

            <PresentAbbPrepction onAddPatient={setNewPatient} />
            <MedicineAddPrepction onAddMedicine={setMedicineData} />
            <div className="w100 flex center medel">
                <button onClick={handelApppageData} className="btn printBtn">
                    Show
                </button>
            </div>
            <div className="flex">
                <CcOeADVX_ray on_CC_OE_ADV_XRY={set_ON_CC_OE_ADV_XRY} />

                <div>
                    <A4page pageData={prepctionAllData} />
                </div>
            </div>
        </>
    );
}
