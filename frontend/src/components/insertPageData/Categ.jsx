import React, { useState } from "react";
import Table from "../system/Table/Table";
import { RiPlayListAddFill } from "react-icons/ri";
import { useRestApi } from "../../hooks/getjson/useRestApi";
import { postApi } from "../../hooks/post/postApi";
import { toast } from "react-toastify";
import UiModiul from "../ui/UiModiul";

export default function Categ() {
    const db = "category";

    const [catValue, setCat] = useState("");
    const { jsonData: categories, refetch } = useRestApi(db);
    const handelDataSet = () => {
        if (!catValue) {
            toast.error("Fild The Category")
        } else {
            const jsonData = {
                db_name: db,
                data:{
                    name:catValue
                }
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
            <UiModiul>
                <blockquote>
                    <div className=" flex center medel">
                        <div className="uiBox w50">
                            <div className="border flex center padding">
                                <div className="border padding">
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
                            <div className="flex center medel padding border">
                                <Table  tableData={fitersUsers} action={{ edit: db }} />
                            </div>
                        </div>
                    </div>
                </blockquote>
                <br /><br /><br />
            </UiModiul>
        </>
    );
}