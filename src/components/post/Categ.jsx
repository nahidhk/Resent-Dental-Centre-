import react, { useState } from "react";
import useCategory from "../../hooks/useCategore";
import Table from "../Table"


// icons 
import { RiPlayListAddFill } from "react-icons/ri";





export default function Categ() {
    const categories = useCategory();
    const [catValue, setCat] = useState("");


    const catgPost = () => {

        const jsonConvart = { name: catValue };

        if (!catValue) {
            alert("Please enter category name");
            return;
        }

        fetch("http://localhost:8000/www/api/post/?key=65c607c0ae914e4e87203c11be3784a9eff3f72b&post=category", {
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
                } else {
                    alert("Error: " + data.error);
                }
            })
            .catch(err => console.error(err));
    };


    return (
        <>
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
                        <details>
                            <summary>View Category List</summary>
                            <Table tableData={categories} title={"Category"} />
                        </details>
                    </div>
                </div>
            </div>
        </>
    );
}
