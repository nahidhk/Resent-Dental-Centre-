import React ,{useEffect , useState} from "react";
import Table from "../system/Table/Table";
import useMedicine from "../../hooks/getjson/useMedicine";
import useCategore from "../../hooks/getjson/useCategore";

export default function Medicine() {
    const medicine = useMedicine();
    const categ = useCategore();
    const [mapData, setMapData] = useState([]);

    useEffect(() => {

        if (!medicine.length || !categ.length) return;

        const mergedData = medicine.map(item => {
            const categData = categ.find(cate => cate.id === item.catg_id);

            return {
                id: item.id,
                catg: categData ? categData.name : "N/A",
                name: item.name
            };
        });

        setMapData(mergedData);

    }, [medicine, categ]);



    return (
        <>
            <div className="flex center medel">
                <div className="uiBox w50">
                    <div className="grap flex center medel">
                        <div className="grap">
                            <div className="fx">
                                <select name="" id="" className="fxInput">
                                    <option value="" >Select The Categore</option>
                                    {
                                        categ.map(item => 
                                            (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            )
                                        )
                                    }
                                </select>
                                <input type="text" className="fxInput" placeholder="Input Medecine Name"/>
                                <button className="fxBtn">
                                   Add +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <Table tableData={mapData} action={{
                            delete: "url",
                            edit: "url"
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}