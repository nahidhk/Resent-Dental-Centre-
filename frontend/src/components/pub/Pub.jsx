import React, { useState, useEffect, useRef } from "react";
import A4page from "../system/print/A4page";
import Bottom from "../system/print/Components/Bottom";
import Head from "../system/print/Components/Head";
import Loading from "../system/Loading";
import { useNavigate } from "react-router-dom";
import MainContent from "../system/print/Components/MainContent";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Pub({ idData }) {

    const navigate = useNavigate();
    const pdfRef = useRef();

    const apiurl = `https://api.ndsql.top/rds/api/p/?id=${idData}`;

    const [dataP, setAPiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [inputData, setInputData] = useState("");
    const [openjson, setOpenJson] = useState(false);

    useEffect(() => {
        fetch(apiurl)
            .then(res => res.json())
            .then(ret => {
                setAPiData(ret[0]);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [apiurl]);

    const navcalfun = () => {
        const setcal = `?id=${inputData}`;
        navigate(setcal);
        window.location.reload();
    };

    // ===============================
    // JSON Format
    // ===============================
    const formateJson = dataP && {
        date: dataP.date,
        rpid: dataP.rpid,
        userNumber: dataP.userNumber,
        medicineData: JSON.parse(dataP.medicineData || "[]"),
        cc_oe_avd_xry: JSON.parse(dataP.cc_oe_avd_xry || "{}")
    };

    // ===============================
    // Download PDF
    // ===============================
    const downloadPDF = async () => {

        const element = pdfRef.current;

        const canvas = await html2canvas(element, {
            scale: 2,
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save(`${formateJson.rpid}.pdf`);
    };

    // ===============================
    // Download JSON
    // ===============================
    const downloadJSON = () => {
        const blob = new Blob(
            [JSON.stringify(formateJson, null, 2)],
            { type: "application/json" }
        );

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${formateJson.rpid}.json`;
        a.click();

        URL.revokeObjectURL(url);
    };

    if (loading) return <Loading />;

    if (!dataP) return (
        <div className="uiBox">
            <Head />
            <hr />
            <div className="flex center medel clomanC">
                <p>
                    {idData
                        ? <span style={{ color: "red" }}>
                            ** {idData} - Do not save this Patient ID **
                        </span>
                        : "Input your Patient ID"}
                </p>

                <div className="grap flex center medel">
                    <input
                        onChange={(e) => setInputData(e.target.value)}
                        placeholder="Patient ID"
                        type="text"
                        className="input"
                    />
                    <button
                        onClick={navcalfun}
                        className="printBtn styleBtn"
                    >
                        Search
                    </button>
                </div>
            </div>
            <Bottom />
        </div>
    );

    return (
        <div className="uiBox">

            {/* Toggle Buttons */}
            <div className="flex center medel">
                <div className="stmybtn flex center medel">
                    <div
                        onClick={() => setOpenJson(false)}
                        className={`myBtn ${!openjson ? "myActive" : ""}`}
                    >
                        A4page
                    </div>

                    <div
                        onClick={() => setOpenJson(true)}
                        className={`myBtn ${openjson ? "myActive" : ""}`}
                    >
                        JsonCode
                    </div>
                </div>
            </div>

            <br />
            Date: {formateJson.date}
            <br />
            RP ID: {formateJson.rpid}

            {openjson ? (
                <>
                    <br /><br />
                    <button
                        className="printBtn styleBtn"
                        onClick={downloadJSON}
                    >
                        Download JSON
                    </button>

                    <code>
                        <pre>
                            {JSON.stringify(formateJson, null, 2)}
                        </pre>
                    </code>
                </>
            ) : (
                <div className="scrollTip">
                    <button
                        className="printBtn styleBtn"
                        onClick={downloadPDF}
                    >
                        Download PDF
                    </button>

                    <br /><br />

                    <div className="a4page" ref={pdfRef}>
                        <Head />
                        <MainContent pageData={formateJson} />
                        <Bottom />
                    </div>

                </div>
            )}

        </div>
    );
}
