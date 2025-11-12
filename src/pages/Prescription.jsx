import React, {  useState } from "react";

// components
import A4page from "../components/A4page";

// icons
import { GrAdd } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { MdAccessTime, MdOutlineEditNote, MdOutlineToday } from "react-icons/md";


export default function Prescription() {

    // input states
    const [categore, setCategore] = useState("");
    const [medicine, setMedicine] = useState("");
    const [timeL1, setTimeL1] = useState("");
    const [timeL2, setTimeL2] = useState("");
    const [timeL3, setTimeL3] = useState("");
    const [notes, setNotes] = useState("");
    const [setDay1, setSetDay1] = useState("");
    const [setDay2, setSetDay2] = useState("");
    // pasent info
    const [pName, setName] = useState("");
    const [pxAge, setAge] = useState("");
    const [pSex, setSex] = useState("");
    const [presentInfo, setpresentInfo] = useState([]);
    const formattedDate = new Date().toLocaleDateString("en-GB");

    const addprsent = () => {
        const pAge = pxAge + "Y";
        const presentData = {
            pName,
            pAge,
            pSex,
            formattedDate
        }
        setpresentInfo(presentData);




    }

    console.log(new Date())





    // prescription list
    const [prescriptions, setPrescriptions] = useState([]);

    const addPre = () => {
        if (!medicine) {
            alert("Please enter medicine name!");
            return;
        }

        const timeL = `${timeL1 || 0} + ${timeL2 || 0} + ${timeL3 || 0}`;
        const setDay = `${setDay1 || ""} ${setDay2 || ""}`;

        const newPrescription = {
            categore,
            medicine,
            timeL,
            notes,
            setDay,
        };

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


            {/* Present Data for from */}


            <div className="flex medel center">
                <div className="flex medel">

                    <div className="grap">
                        <label htmlFor="">Patient Name:</label><br />
                        <input type="text" className="input" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="grap">
                        <label htmlFor="">Patient Age:</label><br />
                        <input type="number" className="input w50px" onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div className="grap">
                        <label htmlFor="">Patient Sex:</label> <br />
                        <select
                            className="select"
                            value={pSex}
                            onChange={(e) => setSex(e.target.value)}
                        >
                            <option value="" disabled>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>

                    <button onClick={addprsent} className="btn btn printBtn styleBtn">
                        Add prsent
                    </button>

                </div>
            </div>

            {/* Present Data for from */}





            {/* form */}
            <div className="center flex medel ">
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
                            <option value="" disabled>
                                Select
                            </option>
                            <option value="Tab.">Tab.</option>
                            <option value="Cap.">Cap.</option>
                            <option value="Syp.">Syp.</option>
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
                                <option value="" selected disabled>day</option>
                                <option value="দিন">দিন</option>
                                <option value="সপ্তাহ">সপ্তাহ</option>
                                <option value="মাস">মাস</option>
                                <option value="বছর">বছর</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button
                    id="addPre"
                    className="btn printBtn styleBtn"
                    onClick={addPre}
                >
                    <GrAdd className="iconx" /> Add
                </button>
            </div>

            {/* print section */}
            <br />

            <div className="hash flex flex-end w100">
               {}
            </div>

            <br />



            <A4page
                patientData={
                    {
                        name: presentInfo.pName,
                        age: presentInfo.pAge,
                        sex: presentInfo.pSex,
                        date: presentInfo.formattedDate
                    }
                }
            />

        </>
    );
}
