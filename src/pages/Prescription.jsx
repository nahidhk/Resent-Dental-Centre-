import React, { useEffect, useState } from "react";
// components
import A4page from "../components/A4page";
import { brCodeID } from "../scripts/brCodeID";
// hooks
import useCategory from "../hooks/useCategore";
// icons
import { GrAdd } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { MdAccessTime, MdOutlineEditNote, MdOutlineToday, MdEditCalendar } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiGenderIntersexLight } from "react-icons/pi";
import { MdPersonAddAlt } from "react-icons/md";


export default function Prescription() {

    // Custom hook call করতে হবে
    const categories = useCategory();
    // Step state
    const [step, setStep] = useState(1); // 1 = show patient form, 2 = show prescription form

    // input states
    const [categore, setCategore] = useState("");
    const [medicine, setMedicine] = useState("");
    const [timeL1, setTimeL1] = useState("");
    const [timeL2, setTimeL2] = useState("");
    const [timeL3, setTimeL3] = useState("");
    const [notes, setNotes] = useState("");
    const [setDay1, setSetDay1] = useState("");
    const [setDay2, setSetDay2] = useState("");

    // prescription list
    const [prescriptions, setPrescriptions] = useState([]);

    // patient info
    const [pName, setName] = useState("");
    const [pxAge, setAge] = useState("");
    const [pSex, setSex] = useState("");
    const [presentInfo, setpresentInfo] = useState({});
    const formattedDate = new Date().toLocaleDateString("en-GB");
    const brcodeid = brCodeID();

    const addPresent = () => {
        if (!pName || !pxAge || !pSex) {
            alert("Please fill all fields");
            return;
        }
        const pAge = pxAge + "Y";
        const presentData = { pName, pAge, pSex, formattedDate, brcodeid };
        setpresentInfo(presentData);


        setStep(2);
    };

    useEffect(() => {

    })

    const addPre = () => {
        if (!medicine) {
            alert("Please enter medicine name!");
            return;
        }
        const timeL = `${timeL1 || 0} + ${timeL2 || 0} + ${timeL3 || 0}`;
        const setDay = `${setDay1 || ""} ${setDay2 || ""}`;
        const newPrescription = { categore, medicine, timeL, notes, setDay };
        setPrescriptions([...prescriptions, newPrescription]);

        // Clear inputs after add
        setCategore("");
        setMedicine("");
        setTimeL1("");
        setTimeL2("");
        setTimeL3("");
        setNotes("");
        setSetDay1("");
        setSetDay2("");
    };

    return (
        <>
            {/* Step 1 - Patient Form */}
            {step === 1 && (
                <div className="flex medel center">
                    <div className="flex medel">
                        <div className="grap">
                            <label htmlFor="">
                                <FaRegUser /> Patient Name:
                            </label>
                            <br />
                            <input
                                list="patientNameData"
                                placeholder="Md. Rohim Khan"
                                type="text"
                                className="input"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <datalist id="patientNameData">
                                <option value="Md. " />
                                <option value="Mst. " />
                                <option value="Mr. " />
                                <option value="Mis. " />
                                <option value="Dr. " />
                                <option value="Dev. " />
                                <option value="En. " />
                            </datalist>
                        </div>
                        <div className="grap">
                            <label htmlFor="">
                                <MdEditCalendar /> Patient Age:
                            </label>
                            <br />
                            <input
                                type="number"
                                className="input w50px"
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="00"
                            />
                        </div>
                        <div className="grap">
                            <label htmlFor="">
                                <PiGenderIntersexLight /> Patient Sex:
                            </label>
                            <br />
                            <select
                                className="select"
                                value={pSex}
                                onChange={(e) => setSex(e.target.value)}
                            >
                                <option value="" disabled>
                                    Select
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button onClick={addPresent} className="btn printBtn styleBtn">
                            <MdPersonAddAlt /> &nbsp; Add Patient
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2 - Prescription Form */}
            {step === 2 && (
                <div className="center flex medel">
                    {/* Prescription form code here */}
                    {/* Category, Medicine, Time, Notes, Set Day */}
                    {/* Add button */}
                    <div className="flex">
                        <div className="grap">
                            <label htmlFor="categore">
                                <GiMedicines /> Category:
                            </label>
                            <br />
                            <select
                                id="categore"
                                className="select w100px"
                                value={categore}
                                onChange={(e) => setCategore(e.target.value)}
                            >
                                <option value="" disabled>Select</option>

                                {categories.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="grap">
                            <label htmlFor="medicine">
                                <TbCategory /> Medicine Name:
                            </label>
                            <br />
                            <input
                                type="text"
                                id="medicine"
                                className="input w200px"
                                placeholder="Type Keyword"
                                value={medicine}
                                onChange={(e) => setMedicine(e.target.value)}
                            />
                        </div>
                        <div className="grap">
                            <label htmlFor="timeL">
                                <MdAccessTime /> Time Label
                            </label>
                            <div className="shortDiv flex around center medel">
                                <input
                                    id="timeL1"
                                    type="number"
                                    className="input w50px"
                                    placeholder="সকাল"
                                    value={timeL1}
                                    onChange={(e) => setTimeL1(e.target.value)}
                                />
                                +
                                <input
                                    id="timeL2"
                                    type="number"
                                    className="input w50px"
                                    placeholder="দুপুর"
                                    value={timeL2}
                                    onChange={(e) => setTimeL2(e.target.value)}
                                />
                                +
                                <input
                                    id="timeL3"
                                    type="number"
                                    className="input w50px"
                                    placeholder="রাত"
                                    value={timeL3}
                                    onChange={(e) => setTimeL3(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grap">
                            <label htmlFor="notes">
                                <MdOutlineEditNote /> Notes:
                            </label>
                            <br />
                            <input
                                id="notes"
                                type="text"
                                className="input"
                                placeholder="খাবার পর"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>
                        <div className="grap">
                            <label htmlFor="setDay">
                                <MdOutlineToday /> Set Day
                            </label>
                            <br />
                            <div className="flex around center medel">
                                <input
                                    id="setDay1"
                                    type="number"
                                    className="input w50px"
                                    placeholder="00"
                                    value={setDay1}
                                    onChange={(e) => setSetDay1(e.target.value)}
                                />
                                -
                                <select
                                    id="setDay2"
                                    className="select"
                                    value={setDay2}
                                    onChange={(e) => setSetDay2(e.target.value)}
                                >
                                    <option value="" disabled>
                                        day
                                    </option>
                                    <option value="দিন">দিন</option>
                                    <option value="সপ্তাহ">সপ্তাহ</option>
                                    <option value="মাস">মাস</option>
                                    <option value="বছর">বছর</option>
                                </select>
                            </div>
                        </div>
                        <button id="addPre" className="btn printBtn styleBtn" onClick={addPre}>
                            <GrAdd className="iconx" /> Add
                        </button>
                    </div>
                </div>

            )}

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
                        patientData={{
                            name: presentInfo.pName,
                            age: presentInfo.pAge,
                            sex: presentInfo.pSex,
                            date: presentInfo.formattedDate,
                            barcodeid: presentInfo.brcodeid,
                        }}
                        medicineData={prescriptions}
                    />
                </div>
            </div>
        </>
    );
}
