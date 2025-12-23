import React from "react";
import UiModiulNav from "../../../ui/components/UiModiulNav";

export default function Edit() {

    const editData = [
        {
            name: "nahid",
            age: 20
        }
    ];

    const headers = Object.keys(editData[0]);

    return (
        <div className="uiModiul">
            <UiModiulNav />

            <div className="flex center w100 padding">
                <div className="uiBox">
                    <div
                        className="table_component animate__animated animate__fadeIn"
                        role="region"
                        tabIndex={0}
                    >
                        <table>
                            <thead>
                                <tr>
                                    {headers.map((head, i) => (
                                        <th key={i}>{head.toUpperCase()}</th>
                                    ))}
                                    <th className="textCenter w200px">ACTION</th>
                                </tr>
                            </thead>

                            <tbody>
                                {editData.map((row, index) => (
                                    <tr key={index}>
                                        {headers.map((key, i) => (
                                            <td key={i}>{row[key]}</td>
                                        ))}
                                        <td className="textCenter">
                                            <button>Send</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
