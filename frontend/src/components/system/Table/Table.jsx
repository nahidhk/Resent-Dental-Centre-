import React, { useState, useEffect } from "react";
import ErrorNote from "../../../hooks/ErrorNote";
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { drop } from "../../../hooks/drop/drop";
import Edit from "./Edit/Edit";

export default function Table({ tableData, action }) {


    if (!tableData) {
        return <ErrorNote errorText={"সঠিক ভাবে ডাটা কনফিগ করা হইনি ।"} />;
    }

    if (tableData.length === 0) {
        return "No Records Found!";
    }
    const dropData = (data) =>{
        const dropJson = {
            action: action.deleteBtn,
            id: data
        }
        drop(dropJson);
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
                                        {action.deleteBtn && (
                                            <div className="iconBtn" onClick={() => dropData(row.id)}>
                                                <RiDeleteBin5Fill className="iconTab deleteBtn" />
                                            </div>
                                        )}
                                        {action.editBtn && (
                                            <div className="iconBtn">
                                                <RiEditBoxLine className="iconTab editBtn" />
                                            </div>
                                        )}
                                        {action.viewBtn && (
                                            <div className="iconBtn">
                                                <IoEyeOutline className="iconTab viewBtn" />
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          <Edit inputJsonData={{name:"nahid"}}/>
        </>
    );
}
