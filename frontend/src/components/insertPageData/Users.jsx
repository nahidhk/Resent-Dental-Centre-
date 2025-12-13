import React, { useEffect, useState } from "react";
import Table from "../system/Table/Table";
import useUsers from "../../hooks/getjson/useUsers";

// icons 
import { FaSearch } from "react-icons/fa";

export default function Users() {
    const [searchNumber, setSearchNumber] = useState("");
    const  users  = useUsers();
    // filter logic

    const filteredUsers = users.filter(user =>
        user.number.includes(searchNumber)
    );

    return (
        <>
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
                                    <button className="fxBtn">
                                        <FaSearch />
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
        </>
    );
}
