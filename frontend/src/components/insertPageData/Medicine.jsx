import React, { useMemo, useState } from "react";
import Table from "../system/Table/Table";
import { useRestApi } from "../../hooks/getjson/useRestApi";
import UiModiul from "../ui/UiModiul";
import { postApi } from "../../hooks/post/postApi";
import { toast } from "react-toastify";

export default function Medicine() {
    const medecineDB = "medicine";

    const { jsonData: medicine = [], refetch } = useRestApi(medecineDB);
    const { jsonData: categ = [] } = useRestApi("category");

    const [cateValue, setCateValu] = useState("");
    const [medecinValue, setMedecinValue] = useState("");

    /* =========================
       FILTER + MERGE DATA
    ========================= */
    const tableData = useMemo(() => {
        if (!medicine.length) return [];

        return medicine
            .filter(item => {
                const cateMatch = cateValue
                    ? String(item.catg_id) === String(cateValue)
                    : true;

                const nameMatch = item.name
                    ?.toLowerCase()
                    .includes(medecinValue?.toLowerCase() || "");

                return cateMatch && nameMatch;
            })
            .map(item => {
                const categData = categ.find(c => String(c.id) === String(item.catg_id));

                return {
                    id: item.id,
                    catg: categData ? `(${categData.id}) ` + categData.name  : "N/A",
                    name: item.name
                };
            });
    }, [medicine, categ, cateValue, medecinValue]);

    /* =========================
       ADD MEDICINE
    ========================= */
    const tanasfarJson = () => {
        if (!cateValue || !medecinValue) {
            toast.error("Not Input Data!")
            return;
        }
        postApi({
            db_name: medecineDB,
            data: {
                catg_id: cateValue,
                name: medecinValue
            }
        });

        setMedecinValue("");
        refetch();
    };

    return (
        <UiModiul >
            

            <div className="flex center medel">
                <div className="uiBox w50">
                    <div className="border flex center medel">
                        <div className="grap">
                            <div className="fx">
                                <select
                                    className="fxInput"
                                    value={cateValue}
                                    onChange={e => setCateValu(e.target.value)}
                                >
                                    <option value="">All Category</option>
                                    {categ.map(item => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    type="text"
                                    className="fxInput"
                                    placeholder="Input Medicine Name"
                                    value={medecinValue}
                                    onChange={e => setMedecinValue(e.target.value)}
                                />

                                <button className="fxBtn" onClick={tanasfarJson}>
                                    Add +
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="flex center medel border padding">
                        <Table
                            tableData={tableData}
                            action={{ delete: medecineDB , edit: medecineDB}}
                        />
                    </div>
                </div>
            </div>
        </UiModiul>
    );
}
