import React from "react";


export default function Box(props) {
    return (
       <>
        <div className="flex center medel animation">
            <div className="web-box">
                {props.children}
            </div>
        </div>
       </>
    )
}