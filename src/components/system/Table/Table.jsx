import React from "react";

// icons
import { RiDeleteBin5Fill, RiEditBoxLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

export default function Table({ tableData, title, action }) {

    if (!tableData || tableData.length === 0) {
        return <p className="error">This number is'n use!</p>;
    }
    const headers = Object.keys(tableData[0]);

    return (
        <div className="table_component" role="region" tabIndex={0}>
            <table>
                <caption>{title}</caption>

                <thead>
                    <tr>
                        {headers.map((head, i) => (
                            <th key={i}>{head.toUpperCase()}</th>
                        ))}
                        <th className="textCenter w200px">ACTION</th>

                    </tr>
                </thead>

                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            {headers.map((key, i) => (
                                <td key={i}>{row[key]}</td>
                                
                            ))}
                             <td>
                                <div className="flex center medel w100">
                                {
                                    (action.deleteBtn) ? (
                                        <div className="iconBtn">
                                            <RiDeleteBin5Fill className="iconTab deleteBtn" />
                                        </div>
                                    ) : null
                                }
                                {
                                    (action.editBtn) ? (
                                        <div className="iconBtn">
                                            <RiEditBoxLine className="iconTab editBtn" />
                                        </div>
                                    ) : null
                                }
                                {
                                    (action.viewBtn) ? (
                                        <div  className="iconBtn">
                                            <IoEyeOutline className="iconTab viewBtn" />
                                        </div>
                                    ) : null
                                }
                                </div>

                            </td>

                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}