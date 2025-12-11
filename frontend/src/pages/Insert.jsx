import React, { useState } from "react";

import Categ from "../components/insertPageData/Categ";
import Users from "../components/insertPageData/Users";

import UserIcon from "../assets/vector/team.png";
import CategoryIcon from "../assets/vector/menu.png";
import UiModiulNav from "../components/ui/components/UiModiulNav";
import Popup from "../components/popup/Popup";

export default function Insert() {

  const [popupData, setPopupData] = useState({
    open: false,
    component: null,
    title: ""
  });

  const openPopup = (component, title) => {
    setPopupData({
      open: true,
      component: component,
      title: title
    });
  }

  const closePopup = () => {
    setPopupData({
      open: false,
      component: null,
      title: ""
    });
  }

  return (
    <div className="uiModiul animate__animated animate__backInUp">
      <UiModiulNav />
      {/* Popup show only when open */}
      {popupData.open && popupData.component && (
        <Popup
          idData={popupData.component}
          title={popupData.title}
          onClose={closePopup}
        />
      )}

      <div className="flex">

        {/* Patients Box */}
        <div
          className="inBox"
          onClick={() => openPopup(Users, "Patients List and Data")}
        >
          <span>
            <img src={UserIcon} className="boxIcon" />
          </span>
          <span>Patients</span>
        </div>

        {/* Category Box */}
        <div
          className="inBox"
          onClick={() => openPopup(Categ, "Categorys List and Data")}
        >
          <span>
            <img src={CategoryIcon} className="boxIcon" />
          </span>
          <span>Categorys</span>
        </div>

      </div>
    </div>
  );
}
