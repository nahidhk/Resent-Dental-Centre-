import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRestApi } from "../../hooks/getjson/useRestApi";
// icons
import { FaRegUser } from "react-icons/fa";
import { PiGenderIntersexLight } from "react-icons/pi";
import { MdEditCalendar } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import sex from "../../data/present/sex.json";
import { postApi } from "../../hooks/post/postApi"
import nameTitle from "../../data/present/nametitle.json"


function PresentAbbPrepction({ onAddPatient }) {
    const users_DB = "users";
    const { jsonData: users, refetch } = useRestApi(users_DB)
    // steps
    const [step, setStep] = useState(1);
    // patient info
    const [pName, setName] = useState("");
    const [pxAge, setAge] = useState("");
    const [pSex, setSex] = useState("");
    const [number, setNumber] = useState("");
    // Next Step Button
    const handleNext = () => {
        if (!number) {
            toast.error("Please enter phone number");
            return;
        }
        if (number.length !== 11) {
            toast.error("Phone number must be exactly 11 digits");
            return;
        }

        const user = users.find(user => user.number === number);

        if (user) {
            setName(user.name);
            setAge(user.age);
            setSex(user.sex);
            toast.success("User found and data populated.");
        } else {
            setName("");
            setAge("");
            setSex("");
            toast.warning("No user found with this number, please enter details manually!");
        }

        setStep(2);
    };


    // Back Button
    const handleBack = () => {
        setStep(1);
    };


    // Add Patient Button
    const handleAddPatient = () => {

        if (!pName || !pxAge || !pSex) {
            toast.error("Fill all information");
            return;
        }

        const newPatient = {
            name: pName,
            age: pxAge,
            sex: pSex,
            number: number
        };

        if (typeof onAddPatient === "function") {
            onAddPatient(newPatient);
        }

        const isUserExist = users.find(user => user.number === number);



        if (!isUserExist) {
            postApi({
                db_name: users_DB,
                data: newPatient
            });
            toast.info("Lodding....");
            refetch();

        }
        // Reset Fields
        setName("");
        setAge("");
        setSex("");
        setNumber("");
        setStep("");
    };

    return (
        <>

            <div className="flex medel center">
                <div className="flex medel">

                    {/* STEP 1 */}
                    {step === 1 && (
                        <>
                            <div className="grap">
                                <label>
                                    <HiOutlinePhone /> Patient Phone Number
                                </label>
                                <br />
                                <input
                                    value={number}
                                    type="tel"
                                    className="input"
                                    placeholder="01812345678"
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>

                            <div className="grap">
                                <button
                                    className="btn styleBtn printBtn"
                                    style={{ marginTop: "10px" }}
                                    onClick={handleNext}
                                >
                                    Next <GrLinkNext />
                                </button>
                            </div>
                        </>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <>
                            <div className="grap">
                                <label>
                                    <FaRegUser /> Patient Name:
                                </label>
                                <br />
                                <input
                                    list="patientNameData"
                                    placeholder="Md. Rohim Khan"
                                    type="text"
                                    className="input"
                                    onChange={(e) => setName(e.target.value)}
                                    value={pName}
                                />

                                <datalist id="patientNameData">
                                    {
                                        nameTitle.map(item => (
                                            <option key={item.id}>{item.name}.&nbsp;</option>
                                        ))
                                    }
                                </datalist>
                            </div>

                            <div className="grap">
                                <label>
                                    <MdEditCalendar /> Age:
                                </label>
                                <br />
                                <input
                                    type="text"
                                    className="input w50px"
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="00"
                                    value={pxAge}
                                />
                            </div>

                            <div className="grap">
                                <label>
                                    <PiGenderIntersexLight /> Sex:
                                </label>
                                <br />
                                <select
                                    className="select"
                                    value={pSex}
                                    onChange={(e) => setSex(e.target.value)}
                                >
                                    <option value=""> Select Sex</option>
                                    {
                                        sex.map(item => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="flex grap">
                                <button className=" btn styleBtn printBtn" onClick={handleBack}>
                                    <GrLinkPrevious /> Back
                                </button>
                                <button className="btn styleBtn printBtn" onClick={handleAddPatient}>
                                    Add Patient
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default PresentAbbPrepction;
