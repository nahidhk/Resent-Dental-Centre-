import React, { useState } from "react";

export default function CcOeADVX_ray() {
  const [ccnotes, setCcNotes] = useState(false);
  const [ccgraps, setccgraps] = useState(false);

  const handleCcNotesChange = (e) => {
    setCcNotes(e.target.checked);
  };
  const handleCcGraps = (e) => {
    setccgraps(e.target.checked);
  }

  return (
    <>
      <div className="ccOg">
        {/* C/C */}
        <fieldset>
          <legend>
            <span className="bigText">C/C</span>
          </legend>
          <div>
            <div>
              <p className="flex medel">
                Enable Notes Option
                <input
                  type="checkbox"
                  checked={ccnotes}
                  onChange={handleCcNotesChange}
                />
              </p>
              {
                ccnotes === true ? (
                <input className="input animation" type="text" />
                ):("")
              }
            </div>
            <div>
              
              <p className="flex medel">
             Eneble Graps Opction
             <input
             onChange={handleCcGraps}
             checked={ccgraps}
             type="checkbox" />
             
              </p>
              {
                ccgraps === true ? 
                (
               <div className="flex cloman animation">
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
             
                )
                :
                ("false")
              }
              <hr />
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}
