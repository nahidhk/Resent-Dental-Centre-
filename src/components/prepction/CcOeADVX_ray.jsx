import React, { useState } from "react";

export default function CcOeADVX_ray() {
  const [ccnotes, setCcNotes] = useState(false);

  const handleCcNotesChange = (e) => {
    setCcNotes(e.target.checked);
  };

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
            </div>
            <div>
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
        </fieldset>
      </div>
    </>
  );
}
