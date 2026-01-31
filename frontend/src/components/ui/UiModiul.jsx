import React from "react";
import UiModiulNav from "./components/UiModiulNav";

export default function UiModiul(props) {
  return (
    <div className="uiModiul">
      <UiModiulNav />
      <div>{props.children}</div>
    </div>
  );
}
