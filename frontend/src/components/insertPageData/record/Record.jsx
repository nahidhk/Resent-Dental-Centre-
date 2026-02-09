import React, { useState } from "react";
import UiModiul from "../../ui/UiModiul";
import { useRestApi } from "../../../hooks/getjson/useRestApi";
import { GrPrint } from "react-icons/gr";
import A4page from "../../system/print/A4page";
import { BsSearch } from "react-icons/bs";

export default function Records() {
    const db = "patient_records";
    const { jsonData: recordData } = useRestApi(db);
    const [mainData, setMainData] = useState("");
    const [ridValue, setRIDValue] = useState("");
    const [phone, setPhone] =useState("");
    const printData = (dataP) => {
        const formateJson = {
            date: dataP.date,
            rpid: dataP.rpid,
            userNumber: dataP.userNumber,
            medicineData: JSON.parse(dataP.medicineData),
            cc_oe_avd_xry: JSON.parse(dataP.cc_oe_avd_xry) || "{}"
        }
        setMainData(formateJson);
    }
    const filterData = recordData.filter(item => 
        item.userNumber.toLowerCase().includes(phone.toLowerCase()) &&
        item.rpid.toLowerCase().includes(ridValue.toLowerCase())
    )
    return (
        <UiModiul>

            <div className="flex center w100">
                <div className="uiBox padding w100">
                    <div className="border padding">
                        <div className="border flex center medel">
                            <div>
                                <div className="fx">
                                    <input onChange={(e) => setPhone(e.target.value)} placeholder="Filter In Phone" type="serach" className="fxInput" />
                                    <button className="fxBtn">
                                        <BsSearch />
                                    </button>
                                </div>
                                <div className="fx">
                                    <input onChange={(e) => setRIDValue(e.target.value)} placeholder="Filter in RID" type="text" className="fxInput" />
                                    <button className="fxBtn">
                                        <BsSearch />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="padding flex w90 border around">
                        <div>
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
                                            filterData.map(item => (
                                                <tr >
                                                    <td>{item.id}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.rpid}</td>
                                                    <td>{item.userNumber}</td>
                                                    <td>
                                                        <div onClick={() => printData(item)} className="iconBtn printBtn">
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

                        <div className="popup">
                            <A4page pageData={mainData} />
                        </div>
                    </div>
                </div>
            </div>
        </UiModiul>
    )
}