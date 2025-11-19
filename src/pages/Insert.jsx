import useCategory from "../hooks/useCategore";
import Table from "../components/Table";

export default function Insert() {
    const categories = useCategory();

    console.log(categories);

    return (
        <>
            <div className="flex center medel">
                <div className="grap">
                    <h2>Category</h2>

                    <div className="grap">
                        <label>Category Type Insert</label>
                        <br />
                        <input type="text" className="input" placeholder="e.g." />
                    </div>

                    <Table tableData={categories} />
                </div>
            </div>
        </>
    );
}
