import React, { useState } from "react";

import UserIcon from "../assets/vector/team.png";
import CategoryIcon from "../assets/vector/menu.png";
import DrgusIcon from "../assets/vector/drugs.png";
import NoteIcon from "../assets/vector/note.png";

import UiModiul from "../components/ui/UiModiul";
import { useNavigate } from "react-router-dom";

export default function Insert() {
  const navigate = useNavigate();
  return (
    <UiModiul>

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
          onClick={() => navigate("category")}
        >
          <span>
            <img src={CategoryIcon} className="boxIcon" />
          </span>
          <span>Categorys</span>
        </div>

        {/* Medicine */}

        <div
          className="inBox"
          onClick={() => navigate("medicine")}
        >
          <span>
            <img src={DrgusIcon} className="boxIcon" />
          </span>
          <span>
            Medicine
          </span>
        </div>

        {/* Mnotes */}

        <div
          className="inBox flex center medel"
          onClick={() => navigate("mNotes")}
        >
          <span>
            <img src={NoteIcon} className="boxIcon" />
          </span>
          <p className="textCenter">
            Medicine Notes
          </p>
        </div>


      </div>
    </UiModiul>
  );
}
