import React from "react";
import SiteName from "../hooks/SiteName";
import RightMenu from "../hooks/RightMenu";

function Nav() {
    return (
        <>
            <div className="nav flex around medel">
                <div>
                    <div>
                        <span className="navText">
                            <SiteName />
                        </span>
                    </div>
                </div>
                <div>
                    <RightMenu />
                </div>
            </div>
        </>
    )
}


export default Nav;