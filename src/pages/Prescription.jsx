import React, { useEffect, useState } from "react";
// components
import A4page from "../components/system/print/A4page";
import PresentAbbPrepction from "../components/prepction/PresentAbbPrepction";
import MedicineAddPrepction from "../components/prepction/medicineAddPrepction";
import CcOeADVX_ray from "../components/prepction/CcOeADVX_ray"






export default function Prescription() {
    const [medicineData, setMedicineData] = useState(null)
    const [newPatient, setNewPatient] = useState(null);
    const [prepctionAllData, setPrepctionAllData] = useState(null)
     const [on_CC_OE_ADV_XRY_Data, set_ON_CC_OE_ADV_XRY] = useState(null);


    const handeladd = () => {
        const alldata = {
            date: "30-03-2007",
            rpid: "12345678",
            userNumber: newPatient.number,
            medicineData: medicineData,
            cc_oe_avd_xry: on_CC_OE_ADV_XRY_Data
        }
        setPrepctionAllData(alldata)
    }

  

    return (
        <>
            <div>
                {JSON.stringify(prepctionAllData)}
            </div>

            <button onClick={handeladd}>
                click
            </button>

            <PresentAbbPrepction onAddPatient={setNewPatient} />
            <MedicineAddPrepction onAddMedicine={setMedicineData} />

            {/* Print section */}
            <div className="flex">
               {/* Add CC  */}
               <CcOeADVX_ray on_CC_OE_ADV_XRY={set_ON_CC_OE_ADV_XRY}/>
                <div>
                    <A4page
                        patientData={null}
                        medicineData={null}
                    />
                </div>
            </div>
        </>
    );
}

