import React, { useState, useMemo } from "react";
import { GrAdd } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { MdAccessTime, MdOutlineEditNote, MdOutlineToday } from "react-icons/md";
import { useRestApi } from "../../hooks/getjson/useRestApi";
import { toast } from "react-toastify";

export default function MedicineAddPrescription({ onAddMedicine }) {
    const { jsonData: categories = [] } = useRestApi("category");
    const { jsonData: medichenData = [] } = useRestApi("medicine");

    const [categore, setCategore] = useState("");
    const [medicine, setMedicine] = useState("");
    const [timeL1, setTimeL1] = useState("");
    const [timeL2, setTimeL2] = useState("");
    const [timeL3, setTimeL3] = useState("");
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

    return (
        <div className="center flex medel wrap gap10">

            {/* Category */}
            <div className="grap">
                <label><GiMedicines /> Category</label>
                <br />
                <select className="select w120px" value={categore} onChange={e => setCategore(e.target.value)}>
                    <option value="">Select</option>
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
                <div className="dropDown">
                    {filterMedicine.length ? filterMedicine.map(item => (
                        <div key={item.id} className="dropBtn" onClick={() => setMedicine(item.name)}>
                            ({item.id}) {item.name}
                        </div>
                    )) : <div className="dropBtn">No medicine</div>}
                </div>
            </div>

            {/* Time Label */}
            <div className="grap">
                <label><MdAccessTime /> Time Label</label>
                <br />

                <div className="flex gap5">
                    <input type="number" className="input w50px" placeholder="সকাল" value={timeL1} onChange={e => setTimeL1(e.target.value)} />
                    +
                    <input type="number" className="input w50px" placeholder="দুপুর" value={timeL2} onChange={e => setTimeL2(e.target.value)} />
                    +
                    <input type="number" className="input w50px" placeholder="রাত" value={timeL3} onChange={e => setTimeL3(e.target.value)} />
                </div>
            </div>

            {/* Notes */}
            <div className="grap">
                <label><MdOutlineEditNote /> Notes</label>
                <br />

                <input type="text" className="input w150px" placeholder="খাবার পর" value={notes} onChange={e => setNotes(e.target.value)} />
            </div>

            {/* Set Day */}
            <div className="grap">
                <label><MdOutlineToday /> Set Day</label>
                <br />

                <div className="flex gap5">
                    <input type="number" className="input w50px" placeholder="00" value={setDay1} onChange={e => setSetDay1(e.target.value)} />
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
