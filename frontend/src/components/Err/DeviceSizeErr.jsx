import React from "react";
import errorImg from "../../assets/vector/error.png";
import siteDetels from "../../data/setting/siteDetels.json"

export default function DeviceSizeErr({ widthx }) {
  return (
    <div className="flex center medel fullPage" style={{ textAlign: "center" }}>
      <div>
        <img
          src={errorImg}
          alt="Error"
          style={{
            height: "120px",
            marginBottom: "15px",
            userSelect: "none",
          }}
        />
        <h2 style={{ color: "#ff4d4d", marginBottom: "10px" }}>
          {siteDetels.errNote[0].deviceErr.title}
        </h2>
        <p style={{ color: "#444", fontSize: "16px", lineHeight: "1.5" }}>
          Maximum supported width: <b>1000px</b> <br />
          Your current width: <b>{widthx}px</b> <br />
          Please resize your window to continue.
        </p>
      </div>
    </div>
  );
}
