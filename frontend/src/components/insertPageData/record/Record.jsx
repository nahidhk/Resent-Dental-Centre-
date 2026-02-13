import React, { useState, useEffect, useRef } from "react";
import UiModiul from "../../ui/UiModiul";
import { useRestApi } from "../../../hooks/getjson/useRestApi";
import { GrPrint } from "react-icons/gr";
import A4page from "../../system/print/A4page";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Popup from "../../popup/Popup";
import Social from "../../system/social/Social";
import QRCode from "qrcode";
import { toast } from "react-toastify";

export default function Records() {

    const db = "patient_records";
    const { jsonData: recordData = [] } = useRestApi(db);

    const [mainData, setMainData] = useState("");
    const [ridValue, setRIDValue] = useState("");
    const [phone, setPhone] = useState("");
    const [showShare, setShowShare] = useState(false);
    const [showPrint, setShowPrint] = useState(false);
    const [shareId, setShareId] = useState("");

    const canvasRef = useRef(null);

    const navigate = useNavigate();

 
    const printData = (dataP) => {
        const formateJson = {
            date: dataP.date,
            rpid: dataP.rpid,
            userNumber: dataP.userNumber,
            medicineData: JSON.parse(dataP.medicineData),
            cc_oe_avd_xry: JSON.parse(dataP.cc_oe_avd_xry || "{}")
        };
        setMainData(formateJson);
        setShowPrint(true);
    };

   
    const filterData = recordData.filter(item =>
        item.userNumber?.toLowerCase().includes(phone.toLowerCase()) &&
        item.rpid?.toLowerCase().includes(ridValue.toLowerCase())
    );

   
    const sCall = (id) => {
        setShareId(id);
        setShowShare(true);

    };

   
    useEffect(() => {
        if (!canvasRef.current || !shareId) return;

        const fullUrl = `${window.location.origin}/pub?id=${shareId}`;

        QRCode.toCanvas(canvasRef.current, fullUrl, {
            width: 200,
            margin: 2,
            color: {
                dark: "#000000",
                light: "#ffffff"
            }
        });

    }, [shareId]);


    const copyLink = () => {
        const fullUrl = `${window.location.origin}/pub?id=${shareId}`;
        navigator.clipboard.writeText(fullUrl);
        toast.success("Link Copied 😎")
    };

    return (
        <UiModiul>
            <Popup show={showShare} onClose={() => setShowShare(false)}>
                <div className="flex medel around clomanC">
                    <div className="flex center medel clomanC">
                        <canvas ref={canvasRef}></canvas>
                        <div className="fx">
                            <input
                                readOnly
                                value={`${window.location.origin}/pub?id=${shareId}`}
                                type="text"
                                className="fxInput"
                            />
                            <button onClick={copyLink} className="fxBtn">
                                Copy Link
                            </button>
                        </div>
                    </div>
                    <Social feedLink={`${window.location.origin}/pub?id=${shareId}`}/>
                </div>
            </Popup>

         
            <Popup show={showPrint} onClose={() => setShowPrint(false)}>
                <A4page pageData={mainData} />
            </Popup>

           
            <div className="flex center w100">
                <div className="uiBox padding w50">
                    <div className="border padding ">
                        <div className="border flex center medel">
                            <div>

                                <div className="fx">
                                    <input
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Filter In Phone"
                                        type="text"
                                        className="fxInput"
                                    />
                                    <button className="fxBtn">
                                        <BsSearch />
                                    </button>
                                </div>
                                <div className="fx">
                                    <input
                                        onChange={(e) => setRIDValue(e.target.value)}
                                        placeholder="Filter in RID"
                                        type="text"
                                        className="fxInput"
                                    />
                                    <button className="fxBtn">
                                        <BsSearch />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                        <div className="table_component flex center medel" role="region">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Record ID</th>
                                        <th>Mobile Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.date}</td>
                                            <td>{item.rpid}</td>
                                            <td>{item.userNumber}</td>
                                            <td className="flex center medel">
                                                <button
                                                    onClick={() => printData(item)}
                                                    className="printBtn"
                                                >
                                                    <GrPrint />
                                                </button>

                                                <button
                                                    onClick={() => sCall(item.rpid)}
                                                    className="styleBtn printBtn"
                                                >
                                                    <AiOutlineShareAlt />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            

        </UiModiul>
    );
}
