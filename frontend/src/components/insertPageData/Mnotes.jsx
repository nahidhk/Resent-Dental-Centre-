import React, { useState, useMemo } from "react";
import UiModiul from "../ui/UiModiul";
import Table from "../system/Table/Table";
import { useRestApi } from "../../hooks/getjson/useRestApi";
import { postApi } from "../../hooks/post/postApi";
import { toast } from "react-toastify";

export default function Mnotes() {
    const db = "mnote";
    const { jsonData: mnotes, refetch } = useRestApi(db);
    const [notes, setNotes] = useState("")
    const filterNotes = useMemo(
        () =>
            mnotes.filter(item =>
                notes
                    ? item.note.toLowerCase().includes(notes.toLowerCase())
                    : true
            ),
        [mnotes, notes]
    );
    const handeAddDataStore = () => {
        toast.warning("Lodding....");
        postApi({
            db_name: db,
            data: {
                note: notes
            }
        })
        refetch();
    }
    return (
        <>
            <UiModiul>
                <blockquote>
                    <div className="flex center">
                        <div className="w50 uiBox">
                            <div className="flex center medel padding border">
                                <div className="fx">
                                    <input onChange={(e) => setNotes(e.target.value)} placeholder="Filter and Enter" type="text" className="fxInput" />
                                    <button onClick={handeAddDataStore} className="fxBtn">Add</button>
                                </div>
                            </div>
                            <div className="flex center medel padding border">
                                <Table tableData={filterNotes} action={{ delete: db }} />
                            </div>
                        </div>
                    </div>
                </blockquote>
            </UiModiul>
        </>
    )
}