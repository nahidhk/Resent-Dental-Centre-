import React, { useState } from "react";
import nUiImg from "../../ui/components/NUi/NUi.png"
import { toast } from "react-toastify";
import { sessionData } from "../../../scripts/sessionData"
import pass from "../password/password.json"

export default function Login() {
    const [inputPassword, setInputPassword] = useState("");
    const password = pass.pass;
    const chechLogin = () => {
        if (inputPassword) {
            if (inputPassword === password) {
                toast.success("Login Success.");
                window.location.reload();
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
            <div className="fullPage fixed top flex medel around clomanC uiModiul fff">
                <div></div>
                <div className="flex cneter medel clomanC">
                    <img className="userimg" src="https://scontent.frjh5-1.fna.fbcdn.net/v/t39.30808-6/350491769_6149338488513646_8853313769520216946_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=h5fGQYNL83kQ7kNvwF9YtP7&_nc_oc=AdlqUsdLxgc0BkPlniYRPRc3_Kb2vxHy1NYADyjfmETDK88m73ZBVvgPBoajnZuEKS8&_nc_zt=23&_nc_ht=scontent.frjh5-1.fna&_nc_gid=MpLLv2elWRhnH872mAMlrA&oh=00_AfvfloqYDrb6GMhY6a9DxTQ63GL4gSOo7f7qbKkS_q8SpQ&oe=69895872" alt="Dr. Ariful Islam" />
                    <div className="fx">
                        <input autoFocus onChange={(e) => setInputPassword(e.target.value)} className="fxInput" type="password" placeholder="Enter the PIN Number" />
                        <button onClick={chechLogin} className="fxBtn">Go</button>
                    </div>
                </div>
                <div>
                    <div className="filok  orange">
                        <div>
                            <div>Powered By</div>
                            <img src={nUiImg} className="nuiimg_img" alt="NdSQL"/>
                            <div>Database management network server!</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}