import React, { useState } from "react";
import logo from "../../assets/img/logo.jpg"
import { toast } from "react-toastify";
import { brCodeID } from "../barcode/brCodeID";

export default function Login() {
    const [password, setPassword] = useState("");
    const xid = brCodeID();
    const handleLogin = () => {
        if (!password) {
            toast.error("Input The Password.");
            return;
        }
        if (password === "admin") {
            toast.success("Login Success.");
            sessionStorage.setItem('0_x00c1d', xid);
        } else {
            toast.error("Login Error!");
            
        }
        setPassword("")
    }
    return (
        <>
            <div className="flex center medel index top fill  darkSide">
                <div className="card animation padding flex center medel cloman">
                    <img className="userImg" src={logo} alt="Logo App" />
                    <div className="fx">
                        <input value={password} onInput={(e) => setPassword(e.target.value)} type="password" placeholder="The Password" className="fxInput" />
                        <button onClick={handleLogin} className="fxBtn">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
