import React, { useState } from "react";
import ErrorNote from "../../../hooks/ErrorNote";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { drop } from "../../../hooks/drop/drop"
import Popup from "../../popup/Popup";
export default function Table({ tableData, action }) {
    const [show, setShow] = useState(false);
    const [gavirData , setGivarData] = useState({});

    if (!tableData) {
        return <ErrorNote errorText={"সঠিক ভাবে ডাটা কনফিগ করা হইনি ।"} />;
    }

    if (tableData.length === 0) {
        return "No Records Found!";
    }
    const dropData = (data) => {
        const dropJson = {
            action: action.delete,
            id: data
        }
        drop(dropJson);
    }

    const editData = (data) => {
        setGivarData(data);
        setShow(true);
    }

    const headers = Object.keys(tableData[0]);
    return (
        <>
            <Popup show={show} onClose={() => setShow(false)}>
                {Object.entries(gavirData).map(([key, value], i) => (
                    <div key={i}>
                        <label className="padding">{key}:</label> <br />
                        <input className="input" defaultValue={value} type="text" />
                    </div>
                ))}
                <p>
                    its working
                </p>
            </Popup>
            <div className="table_component animate__animated animate__fadeIn" role="region" tabIndex={0}>
                <table>
                    <thead>
                        <tr>
                            {headers.map((head, i) => (
                                <th key={i}>{head.toUpperCase()}</th>
                            ))}
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                {headers.map((key, i) => (
                                    <td key={i}>{row[key]}</td>
                                ))}
                                <td className="flex center medel">
                                    <div className="flex center medel w100">
                                        {action.delete && (
                                            <div className="printBtn deleteBtn" onClick={() => dropData(row.id)}>
                                                <MdDeleteForever />
                                            </div>
                                        )}
                                        {action.edit && (
                                            <div onClick={() => editData(row)} className="printBtn editBtn">
                                                <MdOutlineModeEditOutline />
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
