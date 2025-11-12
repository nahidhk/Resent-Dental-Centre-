import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import DoctorData from "../data/config/prescription.json";
import siteinfo from "../data/setting/siteDetels.json";
import logo from "../assets/img/logo.jpg";

// icons
import { FaPrescription } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { MdAccessTime, MdOutlineEditNote, MdOutlineToday } from "react-icons/md";

export default function Prescription() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
    });

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


            <div className="flex medel">
                <div className="flex">

                    <div className="grap">
                        <label htmlFor="">Present Name:</label><br />
                        <input type="text" className="input" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="grap">
                        <label htmlFor="">Prsent Age:</label><br />
                        <input type="number" className="input w50px" onChange={(e) => setAge(e.target.value)} />
                    </div>

                    <div className="grap">
                        <label htmlFor="">prsent Sex:</label> <br />
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
                                placeholder="৭"
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
                <button className="printBtn" onClick={handlePrint}>
                    <IoMdPrint className="iconx" /> Print
                </button>
            </div>

            <br />
            <div className="mainBox flex center">
                <div className="contBox">
                    <div className="ex" ref={componentRef}>
                        {/* Header */}
                        <div className="modiul1">
                            <div className="flex w100 center">
                                <div className="flex around w95">
                                    <div className="w100">
                                        <h2>{DoctorData.doctor_name.bangla_name}</h2>
                                        <h3>{DoctorData.doctor_subname.bangla_subname}</h3>
                                        <p>
                                            {DoctorData.doctor_degree.bangla_degree}
                                            <br />
                                            বিএমডিসি রেজিঃ নং-{DoctorData.mbdc}
                                            <br />
                                            মোবাইল: {DoctorData.doctor_phone}
                                        </p>
                                    </div>
                                    <div className="w100 textCenter flex center end cloman">
                                        <div className="w100">
                                            <img className="pLogo" src={logo} alt="" />
                                        </div>
                                        <div className="banar flex center medel">
                                            {siteinfo.fullName}
                                        </div>
                                    </div>
                                    <div className="w100 textRight">
                                        <h2>{DoctorData.doctor_name.english_name}</h2>
                                        <h3>{DoctorData.doctor_subname.english_subname}</h3>
                                        <p>
                                            {DoctorData.doctor_degree.english_degree}
                                            <br />
                                            BMDC Reg. No.-{DoctorData.mbdc_no}
                                            <br />
                                            Mobile: {DoctorData.doctor_phone}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="nameBox flex around medel w100">
                                <span>
                                    <b>Name : </b>
                                    <span className="styleText">
                                        <i>{presentInfo.pName}</i>
                                    </span>
                                </span>

                                <span>
                                    <b>Sex : </b>
                                    <span className="styleText">
                                        <i>{presentInfo.pSex}</i>
                                    </span>
                                </span>

                                <span>
                                    <b>Age : </b>
                                    <span className="styleText">
                                        <i>{presentInfo.pAge}</i>
                                    </span>
                                </span>


                                <span>
                                    <b>Date : </b>
                                    <span className="styleText">
                                        <i>{presentInfo.formattedDate}</i>
                                    </span>
                                </span>

                            </div>
                        </div>

                        {/* prescription list */}
                        <div className="flex beet w100 modiul2">
                            <div className="sideBar">
                                <blockquote>
                                    <div className="cloman">C/C</div>
                                    <div className="cloman">O/E</div>
                                    <div className="cloman">ADV:</div>
                                    <div className="cloman">X-Ray:</div>
                                </blockquote>
                            </div>
                            <div className="w100">
                                <FaPrescription className="iconr" />
                                <blockquote>
                                    {prescriptions.length === 0 ? (
                                        <p className="textCenter mark">No prescription added yet.</p>
                                    ) : (
                                        prescriptions.map((item, index) => (
                                            <div key={index} className="flex beet lineStyle">
                                                <div>
                                                    <span className="captext">
                                                        {item.categore} {item.medicine}
                                                    </span>
                                                    <br />
                                                    {item.timeL} {" "} {item.notes}
                                                </div>
                                                <div>{item.setDay}</div>
                                            </div>
                                        ))
                                    )}
                                </blockquote>
                            </div>
                        </div>

                        {/* footer */}
                        <div className="modiul3">
                            <div className="segestBox flex beet w100">
                                <div className="t16">
                                    <ul>
                                        {DoctorData.detels.idaya.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="mark">চেম্বার :</p>
                                    <p>{siteinfo.fullName}</p>
                                    <p className="mark">রোগী দেখার সময়:</p>
                                    <p className="t16">{DoctorData.chamber_time}</p>
                                </div>
                            </div>
                            <div className="bottomSystem t16 w100">
                                {DoctorData.bottomtext}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
