import React, { useState } from "react";
import PresentAbbPrepction from "../components/PresentAbbPrepction";

export default function Home() {

    const [newPatient, setNewPatient] = useState(null);

    return (
        <>
            <PresentAbbPrepction onAddPatient={setNewPatient} />

            <p>
                { JSON.stringify(newPatient)  }
            </p>
            <p>
                {newPatient.name}
            </p>
        </>
    );
}
