import React, { useState, useEffect } from "react";

// icons
import { GrAdd } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { MdAccessTime, MdOutlineEditNote, MdOutlineToday } from "react-icons/md";

// hooks

import { toast } from "react-toastify";

export default function MedicineAddPrepction({ onAddMedicine }) {

    const categories = useState(null);

    // form states
    const [categore, setCategore] = useState("");
    const [medicine, setMedicine] = useState("");
    const [timeL1, setTimeL1] = useState("");
    const [timeL2, setTimeL2] = useState("");
    const [timeL3, setTimeL3] = useState("");
    const [notes, setNotes] = useState("");
    const [setDay1, setSetDay1] = useState("");
    const [setDay2, setSetDay2] = useState("");

    const [prescriptions, setPrescriptions] = useState([]);

    const addPre = () => {
        if (!medicine) {
            toast.error("Please enter medicine name!");
            return;
        }

        const timeL = `${timeL1 || 0} + ${timeL2 || 0} + ${timeL3 || 0}`;
        const setDay = `${setDay1 || ""} ${setDay2 || ""}`;

        const newPrescription = {
            categore,
            medicine,
            timeL,
            notes,
            setDay
        };

        setPrescriptions([...prescriptions, newPrescription]);
        // clear input
        setCategore("");
        setMedicine("");
        setTimeL1("");
        setTimeL2("");
        setTimeL3("");
        setNotes("");
        setSetDay1("");
        setSetDay2("");
    };

    if (typeof onAddMedicine === "function") {
        onAddMedicine(prescriptions)
    }
    // setting medichen dropdown 
    return (
        <>
            <div className="center flex medel wrap">

                <div className="flex">

                    {/* Category */}
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

                            {categories.map(item => (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Medicine */}
                    <div className="grap dropdownOpen">
                        <label htmlFor="medicine">
                            <TbCategory /> Medicine Name:
                        </label>
                        <br />
                        <input
                            type="text"
                            id="medicine"
                            className="input w200px "
                            placeholder="Type Keyword"
                            value={medicine}
                            onChange={(e) => setMedicine(e.target.value)}
                        />
                        <div className="dropDown">
                            <div className="dropBtn" onClick={() => setMedicine("Napa")}>
                                Napa
                            </div>
                            <div className="dropBtn">
                                Losect
                            </div>
                            <div className="dropBtn">
                                Dexit
                            </div>
                            <div className="dropBtn">
                                Cetofar
                            </div>
                            <div className="dropBtn">
                                Seclo
                            </div>
                        </div>
                    </div>

                    {/* Time label */}
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

                    {/* Notes */}
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

                    {/* Set Day */}
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
                                <option value="" disabled>day</option>
                                <option value="দিন">দিন</option>
                                <option value="সপ্তাহ">সপ্তাহ</option>
                                <option value="মাস">মাস</option>
                                <option value="বছর">বছর</option>
                            </select>
                        </div>
                    </div>

                    {/* Add Button */}
                    <button id="addPre" className="btn printBtn styleBtn" onClick={addPre}>
                        <GrAdd className="iconx" /> Add
                    </button>

                </div>
            </div>
        </>
    );
} 
