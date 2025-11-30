import react, { useState } from "react";
import useCategory from "../../hooks/getjson/useCategore";
import Table from "../system/Table/Table";
import { toast } from "react-toastify";
import api from "../../api/api.json";
import Loading from "../system/Loading";

// icons 
import { RiPlayListAddFill } from "react-icons/ri";





export default function Categ() {
    const categories = useCategory();
    const [catValue, setCat] = useState("");

    const [load, setLoad] = useState(false);
    const catgPost = () => {

        const jsonConvart = { name: catValue };

        if (!catValue) {
            toast.error("Please enter a category name!");
            return;
        }
        setLoad(true)
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
                    setLoad(false)
                } else {
                    alert("Error: " + data.error);
                }
            })
            .catch(err => console.error(err));
    };


    return (
        <>
            {load && <Loading />}
            <blockquote>
                <div className="flex center medel w50%">
                    <div className="w50">
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
                        <div className="flex">
                            <Table tableData={categories} title={"Category"} action={{ deleteBtn: "hellourl" }} />
                        </div>
                    </div>
                </div>


            </blockquote>
        </>
    );
}
