import react from "react";
import { IoMdClose } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function UiModiulNav() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex beet cente medel uiBorder w100 uiTopNav">
                <div></div>
                <div className="rghtNav flex center medel">
                    <button onClick={() => window.history.back()} className="uiNavBtn">
                        <IoChevronBackOutline className="navIcon" />
                    </button>
                    <button title="Reload" onClick={() => window.location.reload()} className="uiNavBtn" >
                        <IoReloadOutline className="navIcon" />
                    </button>
                    <button title="Exit" onClick={() => navigate("/")} className="uiNavBtn">
                        <IoMdClose className="navIcon" />
                    </button>
                </div>
            </div>
        </>
    )
}