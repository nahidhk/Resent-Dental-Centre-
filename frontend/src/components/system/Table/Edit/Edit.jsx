import React, { useState } from "react";
import UiModiulNav from "../../../ui/components/UiModiulNav";

export default function Edit({ inputJsonData }) {

    const [formData, setFormData] = useState(inputJsonData);

    const handleChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    return (



        <div className="uiBox flex center medel cloman editDiv">

            {
                Object.keys(formData).map((key, index) => (
                    <div className="grap flex cloman padding" key={index}>
                        <label>{key}</label>

                        <input
                            type="text"
                            value={formData[key]}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className="input"
                        />
                    </div>
                ))
            }

            <pre>{JSON.stringify(formData)}</pre>


        </div>

    );
}
