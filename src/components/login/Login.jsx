import React from "react";
import logo from "../../assets/img/logo.jpg"


export default function Login() {

    return (
        <>
        <div className="flex center medel index top fill  darkSide">
            <div className="card animation padding flex center medel cloman">
                <img className="userImg" src={logo} alt="Logo App" />
               <div className="fx">
                 <input type="password" placeholder="User Password" className="fxInput" />
                 <button className="fxBtn">
                    Login
                 </button>
               </div>
            </div>
        </div>
        </>
    );
}
