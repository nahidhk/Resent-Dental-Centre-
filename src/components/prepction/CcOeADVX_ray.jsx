import React, { useState } from "react";

export default function CcOeADVX_ray() {

  // ============================================
  //#info- The C/C setup System
  const [ccnotes, setCcNotes] = useState(false);
  const [ccgraps, setccgraps] = useState(false);
  const handleCcNotesChange = (e) => {
    setCcNotes(e.target.checked);
  };
  const handleCcGraps = (e) => {
    setccgraps(e.target.checked);
  }
  //=============================================
  // cc text input
  const [ccNotesData, setCcNotesData] = useState("");
  //cc graps 
  const [ccRT, setCcRT] = useState(false);
  const [ccLT, setCcLT] = useState(false);
  const [ccRB, setCcRB] = useState(false);
  const [ccLB, setCcLB] = useState(false);
  const cCGrapa = {
    cc_RT: ccRT,
    cc_LT: ccLT,
    cc_RB: ccRB,
    cc_LB: ccLB
  }
  // create C/C json
  const cC_Data = {
    cc_notes: ccNotesData,
    cc_graph: cCGrapa
  }
  // C/C data export vareable (cC_Data)
  //==========================================


  //===========================================
  //#info- The O/E setup System
  const [oeNotesSetup, setOENotesSetup] = useState(false);
  const [oeGrapsSetup, setOEGrapsSetup] = useState(false);
  //  O/E Inputs
  const [oeNotesData, setOeData] = useState("");
  // O/E Graps 
  const [oeLT, setOeLT] = useState("");
  const [oeRT, setOeRT] = useState("");
  const [oeLB, setOeLB] = useState("");
  const [oeRB, setOeRB] = useState("");
  const oeGraph = {
    oe_LT: oeLT,
    oe_RT: oeRT,
    oe_LB: oeLB,
    oe_LR: oeRB
  }
  // create O/E json
  const oE_Data = {
    oe_notes:oeNotesData,
    oe_graph:oeNotesData
  }
// O/E data export vareable (oE_Data)
  // =========================================
  return (
    <>
      <div className="ccOg">
        {/* ================================== */}
        {/* =================C/C============== */}
        <fieldset>
          <legend>
            <span className="bigText">C/C</span>
          </legend>
          <div>
            <div className="border padding">
              <p className="flex medel opction">
                Enable Notes
                <input
                  type="checkbox"
                  checked={ccnotes}
                  onChange={handleCcNotesChange}
                />
              </p>
              {
                ccnotes === true ? (
                  <input className="input animation" type="text" placeholder="C/C Input Value" />
                ) : ("")
              }
            </div>

            <div className="border padding">
              <p className="flex medel opction">
                Enable graphs
                <input
                  onChange={handleCcGraps}
                  checked={ccgraps}
                  type="checkbox" />

              </p>
              <br />
              {
                ccgraps === true ?
                  (
                    <div className="flex medel center cloman animation w100">
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
                          <input type="checkbox" className="checkSystem" onChange={(e) => setCcLB(e.target.checked)} />
                        </div>
                        <div className="rayBox borderLT">
                          <input type="checkbox" className="checkSystem"
                            onChange={(e) => setCcRB(e.target.checked)} />
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
        {/* ======================================= */}
        {/* ===================O/E================= */}
        <fieldset>
          <legend>
            <span className="bigText">
              O/E
            </span>
          </legend>
          <div className="border padding opction">
            <p className="flex medel">
              Enable Notes
              <input type="checkbox" onChange={(e) => setOENotesSetup(e.target.checked)} />
            </p>
            {
              oeNotesSetup === true ?
                (
                  <input type="text" placeholder="O/E Inputs Value" className="input animation" onInput={(e) => setOeData(e.target.value)}/>
                )
                : ("")
            }
          </div>

          <div className="border padding opction">
            <p className="flex medel">
              Enable graphs
              <input type="checkbox" onChange={(e) => setOEGrapsSetup(e.target.checked)} />
            </p>
            <br />
            {
              oeGrapsSetup === true ? (
                <div className="flex medel center cloman animation w100">
                  <div className="flex">
                    <div className="rayBox borderRB">
                      <input type="number" className="false" onInput={(e) => setOeLT(e.target.value)} />
                    </div>
                    <div className="rayBox borderLB">
                      <input type="number" className="false" onInput={(e) => setOeRT(e.target.value)} />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rayBox borderRT">
                      <input type="number" className="false" onInput={(e) => setOeLB(e.target.value)} />
                    </div>
                    <div className="rayBox borderLT">
                      <input type="number" className="false" onInput={(e) => setOeRB(e.target.value)} />
                    </div>
                  </div>
                </div>
              ) : ("")
            }
          </div>
        </fieldset>
        {/* ========================================== */}



      </div>
    </>
  );
}
