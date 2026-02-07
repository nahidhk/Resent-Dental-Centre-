import React from "react";
import UiModiul from "../../ui/UiModiul";
import { useRestApi } from "../../../hooks/getjson/useRestApi";
import { GrPrint } from "react-icons/gr";

export default function Records() {
    const db = "patient_records";
    const { jsonData: recordData } = useRestApi(db)
    return (
        <UiModiul>
            <div className="flex center w100">
                <div className="uiBox padding w50">
                    <div className="border padding">
                        <div className="border flex center">
                            <h1>
                                It's Working
                            </h1>
                        </div>
                    </div>
                    <div className="padding flex center medel w100 border">
                        <div className="table_component animate__animated animate__fadeIn w100 " role="region">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            ID
                                        </th>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Record ID
                                        </th>
                                        <th>
                                            Mobile Number
                                        </th>
                                        <th>
                                            Print
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        recordData.map(item => (
                                            <tr >
                                                <td>{item.id}</td>
                                                <td>{item.date}</td>
                                                <td>{item.rpid}</td>
                                                <td>{item.userNumber}</td>
                                                <td>
                                                    <div className="iconBtn printBtn">
                                                        <GrPrint />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </UiModiul>
    )
}