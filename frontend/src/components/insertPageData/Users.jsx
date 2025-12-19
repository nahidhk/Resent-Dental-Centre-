import React, { useEffect, useState } from "react";
import Table from "../system/Table/Table";
import UiModiulNav from "../ui/components/UiModiulNav";
// restApi
import { useRestApi } from "../../hooks/getjson/useRestApi";
import sex from "../../data/present/sex.json"

// icons 
import { IoSaveOutline } from "react-icons/io5";

export default function Users() {
    const { jsonData: users } = useRestApi('users');
    const [searchNumber, setSearchNumber] = useState("");
    const filteredUsers = users.filter(user =>
        user.number?.includes(searchNumber)
    );


    return (
        <>
            <div className="uiModiul animate__animated animate__backInUp">
                <UiModiulNav />
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
                                        />
                                        <input
                                            type="text"
                                            className="fxInput"
                                            placeholder="Present Name"
                                        />
                                        <select
                                            className="fxinput"
                                        >
                                            <option selected> All Sex</option>
                                            {
                                                sex.map(item=>(
                                                    <option key={item.id} value={item.id}>
                                                        {item.name}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        <button className="fxBtn">
                                            <IoSaveOutline className="bigIcon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <Table
                                    tableData={filteredUsers}
                                    action={{
                                        deleteBtn: "delete",
                                        editBtn: "edit",
                                        viewBtn: "view"
                                    }}
                                />
                            </div>
                            <br /><br />
                        </div>
                    </div>
                </blockquote>
            </div>
        </>
    );
}
