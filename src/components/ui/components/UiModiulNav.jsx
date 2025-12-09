import react from "react";
import { IoMdClose } from "react-icons/io";
import { IoReloadOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

export default function uiModiulNav() {
    return (
        <>
            <div className="flex beet cente medel uiBorder w100">
                <div></div>
                <div className="rghtNav flex center medel">
                     <button className="uiNavBtn">
                        <IoChevronBackOutline  className="navIcon"/>
                    </button>
                     <button className="uiNavBtn" >
                        <IoReloadOutline className="navIcon"/>
                    </button>
                    <button className="uiNavBtn">
                        <IoMdClose className="navIcon"/>
                    </button>
                </div>
            </div>
        </>
    )
}