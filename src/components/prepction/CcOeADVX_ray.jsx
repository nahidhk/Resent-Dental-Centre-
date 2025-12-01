import React, { useState } from "react";


export default function CcOeADVX_ray() {
    // #info - C/C setting and script
    const [ccnotes, setCcNotes] = useState(false);
    console.log(ccnotes);
    return (
        <div className="ccOg">
            {/* C/C */}
            <div>
                <hr />
                <span className="bigText">C/C</span>
                
                    <p className="sampuleSetting">
                        <span>
                            Notes Setting
                        </span>
                        <br />
                        <lable htmlFor="ccnotesCheck" className="btn">
                            enebal
                        </lable>
                        <input
                            id="ccnotesCheck"
                            type="checkbox"
                            checked={ccnotes}
                            onChange={(e) => setCcNotes(e.target.checked)}
                        />
                    </p>
                    <label htmlFor="">Notes</label>
                    <input type="text" className="input" />
                    <div className="flex cloman">
                        <div className="flex">
                            <div className="rayBox borderRB">
                                <input type="checkbox" className="checkSystem" />
                            </div>
                            <div className="rayBox borderLB">
                                <input type="checkbox" className="checkSystem" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="rayBox borderRT">
                                <input type="checkbox" className="checkSystem" />
                            </div>
                            <div className="rayBox borderLT">
                                <input type="checkbox" className="checkSystem" />
                            </div>
                        </div>
                    </div>
                
                <hr />
            </div>
        </div>

    )
}


