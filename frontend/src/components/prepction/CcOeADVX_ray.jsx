import React, { useState } from "react";

export default function CcOeADVX_ray({ on_CC_OE_ADV_XRY }) {

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
  // cc text input
  const [ccNotesData, setCcNotesData] = useState("");
  //cc graps 
  const [ccRT, setCcRT] = useState(false);
  const [ccLT, setCcLT] = useState(false);
  const [ccRB, setCcRB] = useState(false);
  const [ccLB, setCcLB] = useState(false);
  const cCGrapa = {
    RT: ccRT,
    LT: ccLT,
    RB: ccRB,
    LB: ccLB
  }
  // create C/C json
  const cC_Data = {
    notes: ccNotesData,
    graphOn: ccgraps,
    graph: cCGrapa
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
    LT: oeLT,
    RT: oeRT,
    LB: oeLB,
    LR: oeRB
  }
  // create O/E json
  const oE_Data = {
    notes: oeNotesData,
    graphOn: oeGrapsSetup,
    graph: oeGraph
  }
  // O/E data export vareable (oE_Data)
  // =========================================

  // =========================================
  // #info- The AVD setup system
  const [avdInputSetup, setAvdInputSetup] = useState(false);
  const [avdGraphSetup, setAvdGraphSetup] = useState(false);
  // AVD inputs Setup
  const [avdNotes, setAvdNotes] = useState(false);
  // AVD Graph Setup
  const [avdLT, setAvdLT] = useState("");
  const [avdRT, setAvdRT] = useState("");
  const [avdLB, setAvdLB] = useState("");
  const [avdRB, setAvdRB] = useState("");
  const avdGraph = {
    LT: avdLT,
    RT: avdRT,
    LB: avdLB,
    LR: avdRB
  }
  const avd_Data = {
    notes: avdNotes,
    graphOn: avdGraphSetup,
    graph: avdGraph
  }
  // avd data export vareable (avd_Data)
  // =========================================

  // =========================================
  // #info- X-Ray setting
  const [opgSetup, setOPG] = useState(false);
  const [iopaSetuo, setIopa] = useState(false);
  // create opg 
  const opg = opgSetup === true ? ("* OPG X-ray") : ("");
  const iopa = iopaSetuo === true ? ("* IOPA View") : ("");
  // IOPA Graph setting
  const [iopaLT, setIopaLT] = useState("");
  const [iopaRT, setIopaRT] = useState("");
  const [iopaLB, setIopaLB] = useState("");
  const [iopaRB, setIopaRB] = useState("");
  const iopaGraphData = {
    LT: iopaLT,
    RT: iopaRT,
    LB: iopaLB,
    LR: iopaRB
  }
  // create iopaData 
  const iopaData = {
    title: iopa,
    graphOn: iopaSetuo,
    graph: iopaGraphData
  }
  // Create Xray Data 
  const x_ray = {
    opg: opg,
    iopa: iopaData
  }
  // X-Ray data export vareable (x-ray)
  // ==================================

  // Api Request Json Create
  const api_CC_OE_AVD_Xray = {
    cc: cC_Data,
    oe: oE_Data,
    avd: avd_Data,
    x_ray: x_ray
  }
  // Data call out Function

  const handelRun = () => {
    if (typeof on_CC_OE_ADV_XRY === "function") {
      on_CC_OE_ADV_XRY(api_CC_OE_AVD_Xray);
    }
  }

  setTimeout(handelRun, 1000)


  const handelJsonCC = () => {
    alert(ccNotesData);
  }



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
                  <div className="fx animation">
                    <input className="fxInput" type="text" placeholder="C/C Input Value" onInput={(e) => setCcNotesData(e.target.value)} />
                    <butto  onClick={handelJsonCC}  className="fxBtn flex center medel">
                      Add
                    </butto>
                  </div>
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
                  <input type="text" placeholder="O/E Inputs Value" className="input animation" onInput={(e) => setOeData(e.target.value)} />
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

        {/* ==================ADV===================== */}
        <fieldset>
          <legend>
            <span className="bigText">
              ADV
            </span>
          </legend>
          <div className="border padding opction">
            <p className="flex medel">
              Enable Notes
              <input
                type="checkbox"
                onChange={(e) => setAvdInputSetup(e.target.checked)}
              />
            </p>
            {
              avdInputSetup === true ?
                (
                  <input
                    type="text"
                    placeholder="AVD Input Notes"
                    onInput={(e) => setAvdNotes(e.target.value)}
                    className="input animation"
                  />
                ) : ("")
            }
          </div>

          <div className="border padding opction">
            <p className="flex medel">
              Enable Graph
              <input
                type="checkbox"
                onInput={(e) => setAvdGraphSetup(e.target.checked)}
              />
            </p>
            <br />
            {
              avdGraphSetup === true ?
                (
                  <div className="flex medel center cloman animation w100">
                    <div className="flex">
                      <div className="rayBox borderRB">
                        <input type="number" className="false" onInput={(e) => setAvdLT(e.target.value)} />
                      </div>
                      <div className="rayBox borderLB">
                        <input type="number" className="false" onInput={(e) => setAvdRT(e.target.value)} />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="rayBox borderRT">
                        <input type="number" className="false" onInput={(e) => setAvdLB(e.target.value)} />
                      </div>
                      <div className="rayBox borderLT">
                        <input type="number" className="false" onInput={(e) => setAvdRB(e.target.value)} />
                      </div>
                    </div>
                  </div>
                ) : ("")
            }
          </div>
        </fieldset>
        {/* ===================================== */}
        {/* ===============X-ray================= */}
        <fieldset>
          <legend>
            <span className="bigText">
              X_Ray
            </span>
          </legend>
          <div className="border padding opction">
            <p className="flex medel">
              * OPG X-ray
              <input type="checkbox" onChange={(e) => setOPG(e.target.checked)} />
            </p>
            {opg}
          </div>
          <div className="border padding opction">
            <p className="flex medel">
              * IOPA View
              <input type="checkbox" onChange={(e) => setIopa(e.target.checked)} />
            </p>
            {iopa}
            {
              iopaSetuo === true ?
                (
                  <div className="flex medel center cloman animation w100">
                    <div className="flex">
                      <div className="rayBox borderRB">
                        <input type="number" className="false" onInput={(e) => setIopaLT(e.target.value)} />
                      </div>
                      <div className="rayBox borderLB">
                        <input type="number" className="false" onInput={(e) => setIopaRT(e.target.value)} />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="rayBox borderRT">
                        <input type="number" className="false" onInput={(e) => setIopaLB(e.target.value)} />
                      </div>
                      <div className="rayBox borderLT">
                        <input type="number" className="false" onInput={(e) => setIopaRB(e.target.value)} />
                      </div>
                    </div>
                  </div>
                ) : ("")
            }
          </div>
        </fieldset>
        {/* ===================================== */}

      </div>
    </>
  );
}
