import React, { useState } from "react";
import UiModiul from "../ui/UiModiul";
import Table from "../system/Table/Table";
import { useRestApi } from "../../hooks/getjson/useRestApi";
import { postApi } from "../../hooks/post/postApi";
import { toast } from "react-toastify";

export default function Typem() {
    const { jsonData: typemData, refetch } = useRestApi("typem");
    const [ttioName, setTtilo] = useState("");
    const postcallin = () => {
        toast.info("Lodding....")
        postApi({
            db_name: "typem",
            data: {
                name: ttioName
            }
        })
        refetch();
    }
    return (
        <UiModiul>
            <div className="flex center">
                <div className="flex center w50 uiBox">
                    <div>
                        <div className="grph padding border">
                            <div className="fx">
                                <input
                                    type="text"
                                    className="fxInput"
                                    placeholder="Filter Typem"
                                    onChange={(e) => setTtilo(e.target.value)}
                                    value={ttioName}
                                />
                                <button onClick={postcallin} className="fxBtn">Add</button>
                            </div>
                        </div>
                        <div className="border padding">
                            <Table tableData={typemData} action={{ delete: "typem" }} />
                        </div>
                    </div>
                </div>
            </div>
        </UiModiul>
    )
}