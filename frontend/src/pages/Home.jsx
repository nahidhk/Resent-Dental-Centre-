import React from "react";
import PieDonutChart from "../components/D3JS/PieDonutChart";
import MainDesk from "../components/ui/desk/MainDesk"

import Weather from "../components/wathear/Weather"

export default function Home() {




  return (
    <div className="tixo">

      <div className="flex center medel cloman animation">
        {<MainDesk />}

        <div className="flex margin medel">
          <div className="box margin">
            {<Weather />}
            <p className="textCenter">Software Developed by NDSQL — www.ndsql.top</p>
          </div>
          <div className="box margin">
            {<PieDonutChart />}
          </div>
        </div>
      </div>
    </div>
  );
}
