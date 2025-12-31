import React, { useEffect, useRef, useState } from "react";
import "./NUi.css";
import nUiImg from "./NUi.png";
import TypeIt from "typeit";
export default function DevUi() {
    const asyncRef = useRef(null);
    const titleRef = useRef(null);
    const [fadeAsync, setFadeAsync] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showPowered, setShowPowered] = useState(false);
    useEffect(() => {
        // First typing
        const asyncInstance = new TypeIt(asyncRef.current, {
            waitUntilVisible: true,
        })
            .type("NdSQL ")
            .pause(1000)
            .type("nui")
            .go();
        // 6s পরে fade out
        const fadeTimer = setTimeout(() => {
            setFadeAsync(true);
        }, 6000);
        // 7s পরে title show + type
        const titleTimer = setTimeout(() => {
            setShowTitle(true);
            new TypeIt(titleRef.current, {
                strings: "রিসেন্ট ডেন্টাল সার্জারি এন্ড ডেন্টাল এক্সরে",
                speed: 50,
                waitUntilVisible: true,
            }).go();
        }, 7000);
        // 3s পরে powered by
        const poweredTimer = setTimeout(() => {
            setShowPowered(true);
        }, 3000);
        return () => {
            asyncInstance.destroy();
            clearTimeout(fadeTimer);
            clearTimeout(titleTimer);
            clearTimeout(poweredTimer);
        };
    }, []);
    return (
        <>
            <div className="devUi_index_page">
                <div className="filok">
                </div>
                <div className="filok">
                    <div className={`breathe-animation  fade ${fadeAsync ? "fade-out" : ""}`}>
                        <span ref={asyncRef}></span>
                    </div>
                    <div className={`content ${showTitle ? "fade-in" : "hidden"}`}>
                        <h1 className="titleui">
                            <span ref={titleRef}></span>
                            <div className="aurora">
                                <div className="aurora__item"></div>
                                <div className="aurora__item"></div>
                                <div className="aurora__item"></div>
                                <div className="aurora__item"></div>
                            </div>
                        </h1>
                    </div>
                </div>
                <div className="filok">
                    <div className={`${showPowered ? "fade-in" : "hidden"}`}>
                        <div>Powered By</div>
                        <img src={nUiImg} className="nuiimg_img" />
                        <div>Database management network server!</div>
                    </div>
                </div>
            </div>
        </>
    );
}
