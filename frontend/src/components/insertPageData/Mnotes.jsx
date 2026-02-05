import React from "react";
import UiModiul from "../ui/UiModiul";
import Table from "../system/Table/Table";
import { useRestApi } from "../../hooks/getjson/useRestApi";

export default function Mnotes() {
    const db = "mnote";
     const { jsonData: mnotes, refetch } = useRestApi(db);
    return (
        <>
            <UiModiul>
                <blockquote>
                    <div className="flex center">
                        <div className="w50 uiBox">
                            <div className="flex center medel padding border">
                                <Table tableData={mnotes} action={{ delete: db }} />
                            </div>
                        </div>
                    </div>
                </blockquote>
            </UiModiul>
        </>
    )
}