import React, { useState, useMemo } from "react";
import { GrAdd } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { MdAccessTime, MdOutlineEditNote, MdOutlineToday } from "react-icons/md";
import { useRestApi } from "../../hooks/getjson/useRestApi";
import { toast } from "react-toastify";
import { postApi } from "../../hooks/post/postApi";

export default function MedicineAddPrescription({ onAddMedicine }) {
    const medichenDB = "medicine";
    const { jsonData: mnote = [] } = useRestApi("mnote");
    const { jsonData: categories = [] } = useRestApi("category");
    const { jsonData: medichenData = [], refetch } = useRestApi(medichenDB);
    const [categore, setCategore] = useState("");
    const [medicine, setMedicine] = useState("");
    const [timeL1, setTimeL1] = useState(0);
    const [timeL2, setTimeL2] = useState(0);
    const [timeL3, setTimeL3] = useState(0);
    const [notes, setNotes] = useState("");
    const [setDay1, setSetDay1] = useState("");
    const [setDay2, setSetDay2] = useState("");
    const [prescriptions, setPrescriptions] = useState([]);

    // Filter medicine for dropdown
    const filterMedicine = useMemo(() => {
        if (!categore && !medicine) return [];
        return medichenData.filter(item => {
            const cateMatch = categore ? String(item.catg_id) === String(categore) : true;
            const nameMatch = medicine ? item.name.toLowerCase().includes(medicine.toLowerCase()) : true;
            return cateMatch && nameMatch;
        });
    }, [medichenData, categore, medicine]);

    const addPrescription = () => {
        if (!medicine) return toast.error("Please enter medicine name!");
        const newPrescription = {
            categore,
            medicine,
            timeL: `${timeL1 || 0} + ${timeL2 || 0} + ${timeL3 || 0}`,
            notes,
            setDay: `${setDay1 || ""} ${setDay2 || ""}`
        };
        setPrescriptions(prev => [...prev, newPrescription]);
        setCategore(""); setMedicine(""); setTimeL1(""); setTimeL2(""); setTimeL3(""); setNotes(""); setSetDay1(""); setSetDay2("");
    };
    if (typeof onAddMedicine === "function") onAddMedicine(prescriptions);
    const handelAddMedecine = () => {
        toast.warning("Please wait....")
        postApi({
            db_name: medichenDB,
            data: {
                catg_id: categore,
                name: medicine
            }
        });
        refetch();
    }
    console.log(mnote)
    return (
        <div className="center flex medel wrap gap10 ">

            {/* Category */}
            <div className="grap">
                <label><GiMedicines /> Category</label>
                <br />
                <select className="select w120px" value={categore} onChange={e => setCategore(e.target.value)}>
                    <option value={""}>Select</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
            </div>

            {/* Medicine */}
            <div className="grap dropdownOpen">
                <label><TbCategory /> Medicine Name</label>
                <br />

                <input
                    className="input w200px"
                    value={medicine}
                    onChange={e => setMedicine(e.target.value)}
                    placeholder="Type keyword"
                />
                <div className="dropDown w200px">
                    {
                        categore ? (
                            filterMedicine.length ? (
                                filterMedicine.map(item => (
                                    <div
                                        key={item.id}
                                        className="dropBtn"
                                        onClick={() => setMedicine(item.name)}
                                    >
                                        ({item.id}) {item.name}
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <div className="textCenter">
                                        This medicine is not recorded. Save it.
                                    </div>
                                    <button onClick={handelAddMedecine} className="btn printBtn">
                                        Save Recored
                                    </button>
                                </div>
                            )
                        ) : (
                            <div className="textCenter">
                                Please select the medicine category.
                            </div>
                        )
                    }
                </div>
            </div>

            {/* Time Label */}
            <div className="grap">
                <label><MdAccessTime /> Time Label</label>
                <br />

                <div className="flex gap5 medel center">
                    <input
                        type="number"
                        onClick={() => setTimeL1("")}
                        className="input w50px inputScroll"
                        placeholder="সকাল" value={timeL1}
                        onChange={e => setTimeL1(e.target.value)}
                    />
                    <span className="plusTop">
                        +
                    </span>
                    <input
                        type="number"
                        onClick={() => setTimeL2("")}
                        className="input w50px inputScroll"
                        placeholder="দুপুর"
                        value={timeL2}
                        onChange={e =>
                            setTimeL2(e.target.value)}
                    />
                    <span className="plusTop">
                        +
                    </span>
                    <input
                        type="number"
                        onClick={() => setTimeL3("")}
                        className="input w50px inputScroll"
                        placeholder="রাত"
                        value={timeL3}
                        onChange={e => setTimeL3(e.target.value)} />
                </div>
            </div>

            {/* Notes */}
            <div className="grap dropdownOpen">
                <label><MdOutlineEditNote /> Notes</label>
                <br />
                <input type="text" className="input w200px" placeholder="খাবার পর" value={notes} onChange={e => setNotes(e.target.value)} />

                <div className="dropDown w200px">
                    {
                        mnote.map(item => (
                            <div className="dropBtn" onClick={() => setNotes(item.note)} key={item.id}>
                                {`(${item.id})`} {item.note}
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Set Day */}
            <div className="grap">
                <label><MdOutlineToday /> Set Day</label>
                <br />

                <div className="flex gap5">
                    <input type="number" className="input w50px inputScroll" placeholder="00" value={setDay1} onChange={e => setSetDay1(e.target.value)} />
                    -
                    <select className="select w80px" value={setDay2} onChange={e => setSetDay2(e.target.value)}>
                        <option value="">day</option>
                        <option value="দিন">দিন</option>
                        <option value="সপ্তাহ">সপ্তাহ</option>
                        <option value="মাস">মাস</option>
                        <option value="বছর">বছর</option>
                    </select>
                </div>
            </div>

            {/* Add Button */}
            <button className="btn printBtn styleBtn flexCenter" onClick={addPrescription}>
                <GrAdd /> Add
            </button>

        </div>
    );
}
