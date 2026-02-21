import React from "react";


export default function Box(props) {
    return (
       <>
        <div className="flex center medel">
            <div className="web-box">
                {props.children}
            </div>
        </div>
       </>
    )
}