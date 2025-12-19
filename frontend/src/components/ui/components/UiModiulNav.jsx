import react from "react";
import { IoMdClose } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

export default function UiModiulNav() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="flex beet cente medel uiBorder w100 uiTopNav">
                <div className="ccOg medel flex center">
                   <span className="bigText colorFFF">
                   {location.pathname}
                   </span>
                </div>
                <div className="rghtNav flex center medel">
                    <button onClick={() => window.history.back()} className="back uiNavBtn">
                        <IoChevronBackOutline className="navIcon" />
                    </button>
                    <button title="Reload" onClick={() => window.location.reload()} className="reload uiNavBtn" >
                        <IoReloadOutline className="navIcon" />
                    </button>
                    <button title="Exit" onClick={() => navigate("/")} className="exit uiNavBtn">
                        <IoMdClose className="navIcon" />
                    </button>
                </div>
            </div>
        </>
    )
}