import React, { useState } from "react";

import UserIcon from "../assets/vector/team.png";
import CategoryIcon from "../assets/vector/menu.png";
import DrgusIcon from "../assets/vector/drugs.png"

import UiModiulNav from "../components/ui/components/UiModiulNav";
import { useNavigate } from "react-router-dom";

export default function Insert() {
  const navigate = useNavigate();
  return (
    <div className="uiModiul animate__animated animate__backInUp">
      <UiModiulNav />
      {/* Popup show only when open */}

      <div className="flex">

        {/* Patients Box */}
        <div
          className="inBox"
          onClick={() => navigate("users")}
        >
          <span>
            <img src={UserIcon} className="boxIcon" />
          </span>
          <span>Patients</span>
        </div>

        {/* Category Box */}
        <div
          className="inBox"
          onClick={() => ""}
        >
          <span>
            <img src={CategoryIcon} className="boxIcon" />
          </span>
          <span>Categorys</span>
        </div>

        {/* Medicine */}

        <div
          className="inBox"
        // onClick={() => openPopup(Medicine, "Medicin List Axnd Data")}
        >
          <span>
            <img src={DrgusIcon} className="boxIcon" />
          </span>
          <span>
            Medicine
          </span>
        </div>

      </div>
    </div>
  );
}
