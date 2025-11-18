import react from "react";
import Table from "../components/Table";

export default function Insert() {
    return (
        <>
            <div className="flex center medel">
                <div className="grap">
                    <h2>
                        Category
                    </h2>
                    <div className="grap">
                        <label htmlFor="">Category Type Insert</label>
                        <br />
                        <input type="text" className="input" placeholder="e.g." />
                    </div>
                    <Table  
    tableData={[
        { name: "nahid", age: "21",address:"ataikula" },
        { name: "rifat", age: "18" },
        { name: "keya", age: "18" }
    ]}
/>
                </div>
            </div>
        </>
    )
}