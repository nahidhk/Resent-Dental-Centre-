import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
import Popup from "../../popup/Popup";

export default function Edit({ onCloseEdit, receveData }) {
    const jsonData = receveData;
    const [editShow , setEditShow] = useState(false);

    const data = jsonData[0];
    const editClose = () => {
        if (typeof onCloseEdit === "function") onCloseEdit(false);
    }

    return (
        <Popup show={editShow} onClose={() => setEditShow(false)}>
            <div className="animation padding margin">
                <div className="card padding">
                    <p className="margin padding flex center medel w100">
                        <strong>
                            Edit The DB_Name Database Info
                        </strong>
                    </p>
                    {
                        Object.entries(data).map(([key, value], i) => (
                            <div className="grap margin padding" key={i}>
                                <label className="padding">{key}:</label> <br />
                                <input className="input" value={value} type="text" />
                            </div>
                        ))
                    }
                    <div className="flex center beet medel w100">
                        <button onClick={editClose} className="printBtn deleteBtn">
                            <RiCloseLargeFill className="inco" /> &nbsp; Close
                        </button>
                        <button className="printBtn">
                            <CiEdit className="inco" /> &nbsp; Edit info
                        </button>
                    </div>
                </div>
            </div>
        </Popup>

    );

}
