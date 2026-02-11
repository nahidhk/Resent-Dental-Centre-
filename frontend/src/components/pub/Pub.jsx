import React, { useState, useEffect } from "react";
import A4page from "../system/print/A4page";
import Bottom from "../system/print/Components/Bottom";
import Head from "../system/print/Components/Head";

export default function Pub({ idData }) {

    const apiurl = "https://api.ndsql.top/rds/api/p/?id=110226150920";

    const [dataP, setAPiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(apiurl)
            .then(res => res.json())
            .then(ret => {
                setAPiData(ret[0]); // সরাসরি প্রথম object রাখলাম
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (!dataP) return <h2>No Data Found</h2>;

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
                <Head />
                <hr color="#000" hight="10" />
                <div className="flex center medel">
                    <div className="grap flex center medel">
                        <input placeholder="Patient ID" type="text" className="input" />
                        <button className="printBtn styleBtn">
                            Search
                        </button>
                    </div>
                </div>
                <Bottom />
            </div>



















            {/* <h1>
                Hello World! id : {idData}
                <br />
                Date: {formateJson.date}
                <br />
                RP ID: {formateJson.rpid}
            </h1>

            <pre>
                {JSON.stringify(formateJson, null, 2)}
            </pre>

            <A4page pageData={formateJson} /> */}
        </>
    );
}
