import React, { useState } from "react";
import Table from "../system/Table/Table";
import { RiPlayListAddFill } from "react-icons/ri";

import { useRestApi } from "../../hooks/getjson/useRestApi";
import { usePostApi as postApi } from "../../hooks/post/usePostApi";

export default function Categ() {
    const db = "category";

    const { jsonData: categories } = useRestApi(db);
    const [jsonData, setJsonData] = useState([]);
    const [catValue, setCat] = useState("");
    const handelDataSet = () =>{
      setJsonData({
        name: catValue,
        db_name: db
    })
    }


    const fitersUsers = categories.filter(item =>
        item.name.toLowerCase().includes(catValue.toLowerCase())
    );




    return (
        <>
            <blockquote>
                <div className="flex center medel w50%">
                    <div className="w50 uiBox">

                        <div className="grap w100 flex center">
                            <div className="grap">
                                <label>Category Type Insert</label>
                                <br />
                                <div className="fx">
                                    <input
                                        type="text"
                                        value={catValue}
                                        className="fxInput"
                                        placeholder="e.g."
                                        onChange={(e) => setCat(e.target.value)}
                                    />
                                    <button onClick={handelDataSet} className="fxBtn">
                                        <RiPlayListAddFill /> Add
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <Table tableData={fitersUsers} action={{ deleteBtn: "category" }} />
                        </div>

                    </div>
                </div>
            </blockquote>
        </>
    );
}
