import React, { useState, useEffect, use } from "react";
import Box from "../components/porpos/Box";
import loginphoto from "../assets/pageImg/loginImg.png";
import userData from "../components/security/data.json";
import { toast } from "react-toastify";
import { sessionData } from "../../scripts/sessionData";
import { useRestApi } from "../../hooks/getjson/useRestApi";
import formatDate from "../../scripts/formatDate";
import userImg from "../../assets/vector/user.png";
import sex from "../../data/present/sex.json";




export default function Login() {
    useEffect(() => {
        document.title = "Rds - login and join";
    }, [])
    const [usernumber, setusernumber] = useState("");
    const [createAdmin, setCreateAdmin] = useState(false);
    const bdUsers = "users";
    const dbPacent = "patient_records";
    const { jsonData: users } = useRestApi(bdUsers);
    const { jsonData: pacentRecords } = useRestApi(dbPacent);
    const [btnText, setBtnText] = useState("Join and Book the Appointment");

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
                setBtnText("checking...");
                sessionData({ setDB: "ppp", set: true });
                sessionData({ setDB: "userData", set: corectUser });
                window.location.reload();
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
    const myUserData = sessionData({ get: "userData" });
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
                                    <div className="flex center medel clomanC ">
                                        <div className="flex medel beet">
                                            <div className="flex center medel clomanC web-fastDiv">
                                                <img className="userImg" src={userImg} alt="user Data" />
                                                <div className="web-sapCard">
                                                    <br />
                                                    <h2 className="textCenter">
                                                        {myUserData.name}
                                                    </h2>
                                                    <br />
                                                    <table className="table_component">
                                                        <tr>
                                                            <td> Age:</td>
                                                            <td>{myUserData.age}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Last update:</td>
                                                            <td>{formatDate(myUserData.updated_at)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Join Date:</td>
                                                            <td>{formatDate(myUserData.created_at)}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="flex center medel clomanC">
                                                <div className="web-sapCard flex center medel">
                                                    <table className="table_component">
                                                        <tr>
                                                            <td>ID:</td>
                                                            <td>{myUserData.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone Number:</td>
                                                            <td>{myUserData.number}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gender:</td>
                                                            <td>{sex.find(sexitm => JSON.stringify(sexitm.id) === myUserData.sex)?.name || "Not specified"}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div>
                                                    <br />
                                                    <br />
                                                </div>
                                                <div className="web-sapCard flex center medel">
                                                    <table className="table_component">
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Detels</th>
                                                            <th>Action</th>
                                                        </tr>

                                                        {
                                                            pacentRecords.filter(record => record.userNumber === myUserData.number).map((record, index) => (
                                                                <tr key={index}>
                                                                    <td>{index + 1}</td>
                                                                    <td>
                                                                        {record.rpid}
                                                                        {formatDate(record.created_at)}
                                                                    </td>
                                                                    <td>
                                                                        <button onClick={() => window.location.href = `/record/${record.rpid}`} className="roundBtn">
                                                                            View
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
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
                                                    {
                                                        btnText
                                                    }
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