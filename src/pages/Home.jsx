import React, { useState } from "react";
import CcOeADVX_ray from "../components/prepction/CcOeADVX_ray";


export default function Home() {
    const [on_CC_OE_ADV_XRY_Data, set_ON_CC_OE_ADV_XRY] = useState("");
    return (
        <>
            <CcOeADVX_ray on_CC_OE_ADV_XRY={set_ON_CC_OE_ADV_XRY} />
            {
                JSON.stringify(on_CC_OE_ADV_XRY_Data)
            }
        </>
    );
}
