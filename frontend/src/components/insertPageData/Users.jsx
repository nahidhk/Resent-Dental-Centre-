import React, { useEffect, useState } from "react";
import Table from "../system/Table/Table";
// restApi
import { useRestApi } from "../../hooks/getjson/useRestApi";
import sex from "../../data/present/sex.json";
import nametitle from "../../data/present/nametitle.json"
import { sessionData } from "../../scripts/sessionData";
import { postApi } from "../../hooks/post/postApi";
import formatDate from "../../scripts/formatDate";
// icons 
import { IoSaveOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import UiModiul from "../ui/UiModiul";

export default function Users() {
    const db = 'users';
    const { jsonData: users, refetch } = useRestApi(db);

    const [searchNumber, setSearchNumber] = useState("");
    const [nameValue, setName] = useState("");
    const [ageValue, setAge] = useState("");
    const [sexValue, setSexValue] = useState("");
    const [jsonData, setJsonData] = useState({});
    const [patiebtData, setPatientData] = useState([]);

   
    useEffect(() => {
        const getjsonData = sessionData({ get: db });
        if (getjsonData) {
            setSearchNumber(getjsonData.number || "");
            setName(getjsonData.name || "");
            setAge(getjsonData.age || "");
            setSexValue(getjsonData.sex || "");
        }
    }, []);

   
    useEffect(() => {
        const inputJsonData = {
            number: searchNumber,
            name: nameValue,
            age: ageValue,
            sex: sexValue
        };

    
        if (JSON.stringify(inputJsonData) !== JSON.stringify(jsonData)) {
            setJsonData(inputJsonData);
            sessionData({ set: inputJsonData, setDB: db });
        }
    }, [searchNumber, nameValue, ageValue, sexValue, jsonData]);

    const filteredUsers = users.filter(user =>
        (!searchNumber || user.number?.includes(searchNumber)) &&
        (!nameValue || user.name?.toLowerCase().includes(nameValue.toLowerCase())) &&
        (!ageValue || String(user.age).includes(ageValue)) &&
        (!sexValue || user.sex === sexValue)
    );

    
    useEffect(() => {
        const transformedPatients = filteredUsers.map(user => {
            const userSex = sex.find(sexitm => JSON.stringify(sexitm.id) === user.sex);
            return {
                id: user.id,
                number: user.number,
                name: user.name,
                age: user.age,
                sex: userSex ? userSex.name : "N/A",
                create: formatDate(user.created_at),
                update: formatDate(user.updated_at)
            };
        });

        setPatientData(transformedPatients);
    }, [filteredUsers]);

    // post করার function
    const handelPost = () => {
        const numberFilters = users.filter(user => user.number?.includes(searchNumber));
        if (numberFilters[0]) {
            toast.error("ফোন নম্বরটি ইতিমধ্যেই রেকর্ড করা আছে।");
            return;
        }

        if (!searchNumber || !nameValue || !ageValue || !sexValue) {
            let errorMessage = "অনুগ্রহ করে সবগুলো তথ্য দিন:\n";
            if (!searchNumber) errorMessage += "• নম্বর\n";
            if (!nameValue) errorMessage += "• নাম\n";
            if (!ageValue) errorMessage += "• বয়স\n";
            if (!sexValue) errorMessage += "• লিঙ্গ\n";
            toast.error(errorMessage);
            return;
        }

        const sendDB = {
            db_name: db,
            data: jsonData
        };

        toast.info("Loading...");
        postApi(sendDB);
        refetch();
    };

    return (
        <UiModiul>
            <blockquote>
                <div className="flex center medel">
                    <div className="uiBox">
                        <div className="grap flex center">
                            <div className="grap">
                                <label>User Data Analise</label>
                                <br />
                                <div className="fx">
                                    <input
                                        type="number"
                                        className="fxinput"
                                        placeholder="Filter Mobile Number"
                                        value={searchNumber}
                                        onChange={(e) => setSearchNumber(e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        className="fxInput w50px"
                                        placeholder="Age"
                                        value={ageValue}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        className="fxInput"
                                        placeholder="Present Name"
                                        value={nameValue}
                                        onChange={(e) => setName(e.target.value)}
                                        list="patientNameData"
                                    />

                                    <datalist id="patientNameData">
                                        {nametitle.map(item => (
                                            <option key={item.id}>{item.name}</option>
                                        ))}
                                    </datalist>

                                    <select
                                        className="fxinput"
                                        onChange={(e) => setSexValue(e.target.value)}
                                        value={sexValue}
                                    >
                                        <option value="">All Sex</option>
                                        {sex.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>

                                    <button onClick={handelPost} className="fxBtn">
                                        <IoSaveOutline className="bigIcon" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <Table
                                tableData={patiebtData}
                                action={{
                                    delete: db,
                                    edit:db
                                }}
                            />
                        </div>
                        <br /><br />
                    </div>
                </div>
            </blockquote>
        </UiModiul>
    );
}
