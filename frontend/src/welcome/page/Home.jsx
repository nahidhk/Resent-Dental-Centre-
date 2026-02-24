import React, { useState, useEffect } from "react";
import Box from "../components/porpos/Box";
import HomeImg from "../assets/588302125_3973849302913489_5961459030279599930_n.jpg";
import { GoArrowUpRight } from "react-icons/go";






export default function Home() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);

    const two = (n) => String(n).padStart(2, "0");

    const hours24 = now.getHours();
    const ampm = hours24 >= 12 ? "PM" : "AM";
    const hours12 = hours24 % 12 || 12;
    const minutes = two(now.getMinutes());
    const seconds = two(now.getSeconds());
    const timeString = `${two(hours12)}:${minutes}:${seconds} ${ampm}`;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year2 = String(now.getFullYear()).slice(-2);
    const dateString = `${dayName} ${date} ${monthName} ${year2}`;


    return (
        <>
            <Box>
                <div className="flex beet medel mbColumn mobileStup">
                    <div className="idol">
                        <div className="web-name">
                            <span className="vw5">
                                Your Perfect Smile Starts with <span style={{color: "#4680ff"}}>Resent Dental</span>
                            </span>
                            <p className="smailTitle">
                                Advanced dental care with a gentle touch. <br />
                                Book your appointment today.
                            </p>
                            <br /><br />
                            <div className="flex center beet mbColumn">
                                <div className="web-card">
                                    <div className="workTimeBox flex center medel ">
                                        <div>
                                            <h2>
                                                Working Time
                                            </h2>
                                            <br />
                                            <div>
                                                <div className="flex around">
                                                    <div className="padding">Saturday - Thursday </div>
                                                    <div className="padding"> 9AM - 8PM</div>
                                                </div>
                                                <div className="flex beet medel">
                                                    <div>
                                                        <div class="loader3"></div>
                                                    </div>
                                                    <div>
                                                        Master Plaza (2nd Floor),
                                                        <br /> next to Square Market,
                                                        <br />  Ataikula Bazar, Pabna.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="tofay flex medel center">
                                            {
                                                dateString
                                            } &nbsp;&nbsp;
                                            <div className="loader2"></div> &nbsp;&nbsp;
                                            {
                                                timeString
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="web-card flex center medel clomanC pinBtn pointer">
                                    <div className="clickRound flex center medel">
                                        <GoArrowUpRight />
                                    </div>
                                    <p className="similr">
                                        Book an Appointment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex center medel imgBox">
                        <img src={HomeImg} alt="" className="web-homeImg" />
                    </div>
                </div>
            </Box>
        </>
    )
}