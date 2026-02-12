import React, { useState, useEffect } from "react";
import A4page from "../system/print/A4page";
import Bottom from "../system/print/Components/Bottom";
import Head from "../system/print/Components/Head";
import Loading from "../system/Loading";
import { useNavigate } from "react-router-dom";

export default function Pub({ idData }) {
    const navigate = useNavigate();
    const apiurl = `https://api.ndsql.top/rds/api/p/?id=${idData}`;
    const [dataP, setAPiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [inputData, setInputData] = useState("");
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
    }, []);

    const navcalfun = () => {
        const setcal = `?id=${inputData}`;
        navigate(setcal);
        window.location.reload();
    }

    if (loading) return <Loading />;
    if (!dataP) return (
        <div className="uiBox">
            <Head />
            <hr color="#000" hight="10" />
            <div className="flex center medel clomanC">
                <p>
                    {
                        idData ? (<p style={{ color: "red" }}>** {dataP ? "" : `${idData} - Do not save this Patient ID`} **</p>) : "Input your Patient ID"
                    }
                </p>
                <div className="grap flex center medel">
                    <input onChange={(e) => setInputData(e.target.value)} placeholder="Patient ID" type="text" className="input" />
                    <button onClick={navcalfun} className="printBtn styleBtn">
                        Search
                    </button>
                </div>
            </div>
            <Bottom />
        </div>
    )




    const formateJson = {
        date: dataP.date,
        rpid: dataP.rpid,
        userNumber: dataP.userNumber,
        medicineData: JSON.parse(dataP.medicineData || "[]"),
        cc_oe_avd_xry: JSON.parse(dataP.cc_oe_avd_xry || "{}")
    };

    return (
        <>

            <div className="uiBox">
                <div className="flex center medel">
                    <div className="stmybtn flex center medel">
                        <div className="myBtn">
                            A4page
                        </div>
                        <div className="myBtn">
                            jsonCode
                        </div>
                    </div>
                </div>
                Date: {formateJson.date}
                <br />
                RP ID: {formateJson.rpid}
                <pre>
                    {JSON.stringify(formateJson, null, 2)}
                </pre>
                <div className="w100 ppBox">

                </div>
            </div>
            <A4page pageData={formateJson} />
        </>
    );
}
