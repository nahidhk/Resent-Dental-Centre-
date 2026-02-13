import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
import Popup from "../../popup/Popup";

export default function Edit({ vusale, receveData }) {

    const [editShow, setEditShow] = useState(false);

    useEffect(() => {
        setEditShow(vusale);
    }, [vusale]);
    const data = receveData?.[0];
    if (!data) return null;

    return (
        <Popup show={editShow} onClose={() => setEditShow(false)}>
            <div className="animation padding margin">
                <div className="card padding">
                    <p className="margin padding flex center medel w100">
                        <strong>Edit The DB_Name Database Info</strong>
                    </p>

                    {Object.entries(data).map(([key, value], i) => (
                        <div className="grap margin padding" key={i}>
                            <label className="padding">{key}:</label> <br />
                            <input className="input" defaultValue={value} type="text" />
                        </div>
                    ))}

                    <div className="flex center beet medel w100">
                        <button
                            className="printBtn deleteBtn"
                            onClick={() => setEditShow(false)}
                        >
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
