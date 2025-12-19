import React, { useState } from "react";
import { toast } from "react-toastify";
//#info- api data load 
// api
import api from "../../api/api.json";

// icons
import { FaRegUser } from "react-icons/fa";
import { PiGenderIntersexLight } from "react-icons/pi";
import { MdEditCalendar } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";


function PresentAbbPrepction({ onAddPatient }) {
    // loading
    const [load, setLoad] = useState(false);
    const [users , setUers] = useState([])
    // user data

    // steps
    const [step, setStep] = useState(1);

    // patient info
    const [pName, setName] = useState("");
    const [pxAge, setAge] = useState("");
    const [pSex, setSex] = useState("");
    const [number, setNumber] = useState("");


    // Next Step Button
    
    const handleNext = () => {

        const userData ="";
        setUers(userData);



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
            toast.success("User found and data populated");
        } else {
            setName("");
            setAge("");
            setSex("");
            toast.info("No user found with this number, please enter details manually");
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

       
        setLoad(true);

     
        if (!isUserExist) {

            fetch(`${api.request}://${api.server}${api.postPath}?key=${api.apikey}&post=users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newPatient)
            })
                .then(res => res.json())
                .then(data => {
                    setLoad(false); 

                    if (data.success) {
                        toast.success("New patient added to system");
                    } else {
                        toast.error("Error: " + data.error);
                    }
                })
                .catch(err => {
                    setLoad(false); 
                    console.error(err);
                    toast.error("Server Error");
                });

        } else {
            setLoad(false); 
            toast.info("Patient already exists in the system");
        }

        // Reset Fields
        setName("");
        setAge("");
        setSex("");
        setNumber("");
        setStep(2);
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
                                <label>
                                    <MdEditCalendar /> Age:
                                </label>
                                <br />
                                <input
                                    type="number"
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
