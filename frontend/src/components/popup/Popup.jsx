import React from "react";
import { LuArrowLeft } from "react-icons/lu";

export default function Popup({ idData: Component, title, onClose }) {
    return (
        <div className="popupContainer">
            <div className="popupNav flex medel">
                <div onClick={onClose}>  
                    <LuArrowLeft className="backIcon" />
                </div>
                <div>
                    <h2>{title}</h2>
                </div>
            </div>

            <Component />
        </div>
    );
}
