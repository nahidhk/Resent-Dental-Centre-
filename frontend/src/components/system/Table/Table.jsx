import React, { useState, useEffect } from "react";
import ErrorNote from "../../../hooks/ErrorNote";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { drop } from "../../../hooks/drop/drop"

export default function Table({ tableData, action }) {


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
        alert(JSON.stringify(data));
    }

    const headers = Object.keys(tableData[0]);

    return (
        <>
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
                                <td  className="flex center medel">
                                     <div className="flex center medel w100">
                                        {action.delete && (
                                            <div className="iconBtn deleteBtn" onClick={() => dropData(row.id)}>
                                               <MdDeleteForever />
                                            </div>
                                        )}
                                        {action.edit && (
                                            <div onClick={() => editData(row)} className="iconBtn editBtn">
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
