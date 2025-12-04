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
  //#info- C/C  value
   // cc text input
  const [ccNotesData, setCcNotesData] = useState("");
   //cc graps 
   const [ccRT, setCcRT] = useState(false);
   const [ccLT, setCcLT] = useState(false);
   const [ccRB, setCcRB] = useState(false);
   const [ccLB, setCcLB] = useState(false);
   
   const cCGraps = {
     ccRT:ccRT,
     ccLT:ccLT,
     ccRB:ccRB,
     ccLB:ccLB
   }
   console.log(cCGraps);
   

  return (
    <>
      <div className="ccOg">
        {/* C/C */}
        <fieldset>
          <legend>
            <span className="bigText">C/C</span>
          </legend>
          <div>
            <div className="border padding">
              <p className="flex medel opction">
                Enable Notes Option
                <input
                  type="checkbox"
                  checked={ccnotes}
                  onChange={handleCcNotesChange}
                />
              </p>
              {
                ccnotes === true ? (
                  <input  className="input animation" type="text" />
                ) : ("")
              }
            </div>

            <div className="border padding">
              <p className="flex medel opction">
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
                          <input type="checkbox" className="checkSystem" 
                        onChange={(e) => setCcLT(e.target.checked)}  
                          />
                        </div>
                        <div className="rayBox borderLB">
                          <input type="checkbox" className="checkSystem" 
                   onChange={(e) => setCcRT(e.target.checked)}       
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="rayBox borderRT">
                          <input type="checkbox" className="checkSystem" onChange={(e) => setCcLB(e.target.checked)}/>
                        </div>
                        <div className="rayBox borderLT">
                          <input type="checkbox" className="checkSystem"  
                          onChange={(e) => setCcRB(e.target.checked)}/>
                        </div>
                      </div>
                    </div>
                  )
                  :
                  ("")
              }
            </div>
          </div>
        </fieldset>
        
        {/*OE*/}
        <fieldset>
          <legend>
            <span className="bigText">
            O/E  
            </span>
          </legend>
          <div className="border padding opction">
            <p className="flex medel">Eneble Notes Opction
              <input type="checkbox" />
            </p>
          </div>
          
          <div className="border padding opction">
            <p className="flex medel">
                Enable Graps opction
           <input type="checkbox" />
         
            </p>
          </div>
        </fieldset>
        
      </div>
    </>
  );
}
