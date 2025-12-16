import react, { useState } from "react";
import Table from "../system/Table/Table";
import { toast } from "react-toastify";
import api from "../../api/api.json";

// icons 
import { RiPlayListAddFill } from "react-icons/ri";

// RestApi
import { useRestApi } from "../../hooks/getjson/useRestApi";




export default function Categ() {
    const {jsonData: categories} = useRestApi('category');
    const [catValue, setCat] = useState("");


    const fitersUsers = categories.filter(item =>
        item.name.toLowerCase().includes(catValue.toLowerCase())
    );
    const catgPost = () => {
        const jsonConvart = { name: catValue };
        if (!catValue) {
            toast.error("Please enter a category name!");
            return;
        }
        fetch(`${api.request}://${api.server}${api.postPath}?key=${api.apikey}&post=category`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonConvart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    setCat("");
                    // window.location.reload();
                    toast.success("Category is add success.")
                } else {
                    alert("Error: " + data.error);
                }
            })
            .catch(err => console.error(err));
    };


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
