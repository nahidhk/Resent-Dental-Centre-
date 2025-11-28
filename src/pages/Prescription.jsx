import React, { useState } from "react";
// components
import A4page from "../components/system/print/A4page";
import PresentAbbPrepction from "../components/prepction/PresentAbbPrepction";
import MedicineAddPrepction from "../components/prepction/medicineAddPrepction";






export default function Prescription() {

const [newPatient, setNewPatient] = useState(null);


    return (
        <>

            <PresentAbbPrepction onAddPatient={setNewPatient} />
            <MedicineAddPrepction />




            {/* Print section */}
            <div className="flex">
                <div className="ccOg">
                    {/* C/C */}
                    <div>
                        <hr />
                        <label htmlFor="">C/C</label>
                        <blockquote>
                            <label htmlFor="">Notes</label>
                            <input type="text" className="input" />
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
                        </blockquote>
                        <hr />
                    </div>
                </div>
                <div>
                    <A4page
                        patientData={newPatient}
                        medicineData={null}
                    />
                </div>
            </div>
        </>
    );
}
