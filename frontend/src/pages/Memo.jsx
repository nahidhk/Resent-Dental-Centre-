import React from "react";
import UiModiul from "../components/ui/UiModiul";
import A4page from "../components/system/print/A4page";

export default function Memo() {
  return (
    <UiModiul>
      <div className="center flex medel w100">
        <div>
          <A4page />
        </div>
      </div>
    </UiModiul>
  );
}
