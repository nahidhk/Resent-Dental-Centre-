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
                    <Table />
                </div>
            </div>
        </>
    )
}