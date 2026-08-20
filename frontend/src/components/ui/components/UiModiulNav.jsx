import react from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useLocation, useNavigate } from "react-router-dom";

export default function UiModiulNav() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="uiTopNav flex medel">
               
                    <div onClick={() => window.history.back()} className="uiNavBtn">
                        <FaArrowLeftLong className="navIcon" />
                    </div>
                    <h1 className="unpear">
                       &nbsp;&nbsp; {location.pathname.split("/").filter(Boolean).pop()}
                    </h1>
            </div>
        </>
    )
}