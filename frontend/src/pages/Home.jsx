import React from "react";
import PieDonutChart from "../components/D3JS/PieDonutChart";
import Edit from "../components/system/edit/Edit";

export default function Home() {




  return (
    <>
      <div className="flex around">
        <div className="box animation">
          <PieDonutChart />
        </div>
      </div>
      <Edit />
    </>
  );
}
