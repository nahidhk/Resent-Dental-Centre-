import React, { useState, useEffect, use } from "react";
import Box from "../components/porpos/Box";
import loginphoto from "../assets/pageImg/loginImg.png";
import userData from "../components/security/data.json";
import { toast } from "react-toastify";
import { sessionData } from "../../scripts/sessionData";
import { useRestApi } from "../../hooks/getjson/useRestApi";





export default function Login() {
    useEffect(() => {
        document.title = "Rds - login and join";
    }, [])
    const [usernumber, setusernumber] = useState("");
    const [createAdmin, setCreateAdmin] = useState(false);
    const bdUsers = "users";
    const { jsonData: users } = useRestApi(bdUsers);


    const loginif = () => {
        if (!usernumber) {
            toast.error("Please input your phone number!");
            return;
        }
        if (usernumber === userData.u) {
            setCreateAdmin(true);
        } else {
            const corectUser = users.find(user => user.number === usernumber) || null;
            if (corectUser) {
                sessionData({ setDB: "ppp", set: true });
                sessionData({ setDB: "userData", set: corectUser });
            }
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
                    <div className="idol animate__animated animate__fadeInUp">
                        {
                            sessionData({ get: "ppp" }) ? (
                               <>
                               <div className="flex center medel clomanC">
                                 <h1>Hello, {sessionData({ get: "userData" })?.name || "User"}</h1>
                               </div>
                               </>
                            ) : (
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
                            )
                        }
                    </div >
                </div >
            </Box >
        </>
    )
}