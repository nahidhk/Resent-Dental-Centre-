import React from "react";




export default function Card(props) {
    return (
        <>
        <div className="boxCard flex center medel clomanC animate__animated animate__bounceIn">
           {props.children}
        </div>
        </>
    )
}