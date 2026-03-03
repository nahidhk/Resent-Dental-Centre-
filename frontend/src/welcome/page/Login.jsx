import React, { useState, useEffect } from "react";
import Box from "../components/porpos/Box";
import loginphoto from "../assets/pageImg/loginImg.png";
import userData from "../components/security/data.json";
import { toast } from "react-toastify";
import { sessionData } from "../../scripts/sessionData";





export default function Login() {
    useEffect(() => {
        document.title = "Rds - login and join";
    }, [])
    const [usernumber, setusernumber] = useState("");
    const [createAdmin, setCreateAdmin] = useState(false);
    const loginif = () => {

        if (usernumber === userData.u) {
            setCreateAdmin(true);
        }
    }
    const [inputPassword, setInputPassword] = useState("");
    const password = userData.p;
    const chechLogin = () => {
        if (inputPassword) {
            if (inputPassword === password) {
                toast.success("Login Success.");
                window.location.href = "/";
                sessionData({ setDB: "login", set: true });
            } else {
                setInputPassword("")
                toast.error("Please input a Valid Password!")
            }
        } else {
            toast.error("Please input a password!");
        }
    }

    return (
        <>
            <Box>
                <div className="flex beet medel mbColumn mobileStup loginPage">
                    <div className="flex center medel imgBox">
                        <img src={loginphoto} alt="" className="web-homeImg" />
                    </div>
                    <div className="idol">
                        <div className="flex center medel clomanC">
                            <div className="textCenter">
                                <h1>
                                    Book an Appointment
                                </h1>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number: &nbsp;&nbsp;</label>
                                <br />
                                <input type="text" onChange={(e) => setusernumber(e.target.value)} className="input w100" placeholder="018xxxxxxxx" />
                                <br />
                                {
                                    createAdmin ? (
                                        <>
                                            <label htmlFor="phone">Admin password: &nbsp;&nbsp;</label>
                                            <br />
                                            <input onChange={(e) => setInputPassword(e.target.value)} type="password" className="input w100" placeholder="input admin password" />
                                        </>
                                    ) : ""
                                }
                            </div>
                            <div className="padding">
                                {
                                    createAdmin ? (
                                        <button onClick={chechLogin} className="roundBtn">
                                            Login
                                        </button>
                                    ) : (
                                        <button onClick={loginif} className="roundBtn">
                                            Join and Book the Appointment
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Box >
        </>
    )
}