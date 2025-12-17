import react, { useState } from "react";
import Table from "../system/Table/Table";
import { toast } from "react-toastify";
import api from "../../api/api.json";

// icons 
import { RiPlayListAddFill } from "react-icons/ri";

// RestApi
import { useRestApi } from "../../hooks/getjson/useRestApi";
import { usePostApi } from "../../hooks/post/usePostApi";



export default function Categ() {
    const setUserPostApiData = usePostApi();
    const db = "category"
    const {jsonData: categories} = useRestApi(db);
    const [catValue, setCat] = useState("");


    const fitersUsers = categories.filter(item =>
        item.name.toLowerCase().includes(catValue.toLowerCase())
    );
    
    const catgPost = () => {
        const categoryJson = {
            name:catValue,
            db_name:db
        }
        setUserPostApiData(categoryJson);
    }





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
                                        id="catValue"
                                        type="text"
                                        value={catValue}
                                        className="fxInput"
                                        placeholder="e.g."
                                        onChange={(e) => setCat(e.target.value)}
                                    />
                                    <button onClick={catgPost} className="fxBtn">
                                        <RiPlayListAddFill /> Add
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <Table tableData={fitersUsers} action={{ deleteBtn: "category" }} />
                        </div>
                        <br /><br />
                    </div>
                </div>


            </blockquote>
        </>
    );
}
