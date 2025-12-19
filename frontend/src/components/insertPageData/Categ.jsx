import React, { useEffect, useState } from "react";
import Table from "../system/Table/Table";
import { RiPlayListAddFill } from "react-icons/ri";
import { useRestApi } from "../../hooks/getjson/useRestApi";
import { postApi } from "../../hooks/post/postApi";
import { toast } from "react-toastify";
import UiModiulNav from "../ui/components/UiModiulNav";

export default function Categ() {
    const db = "category";

    const [catValue, setCat] = useState("");
    const { jsonData: categories, refetch } = useRestApi(db);
    const handelDataSet = () => {
        if (!catValue) {
            toast.error("Fild The Category")
        } else {
            const jsonData = {
                name: catValue,
                db_name: db
            };
            postApi(jsonData);
            refetch();
        }
    }




    const fitersUsers = categories.filter(item =>
        item.name.toLowerCase().includes(catValue.toLowerCase())
    );




    return (
        <>
            <div className="uiModiul animate__animated animate__backInUp">
                <UiModiulNav />
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
            </div>
        </>
    );

}