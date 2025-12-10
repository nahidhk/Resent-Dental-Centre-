import react from "react"
import DoctorData from "../../../../data/config/prescription.json";
import logo from "../../../../assets/img/logo.jpg";
import siteinfo from "../../../../data/setting/siteDetels.json";

export default function Head() {
  return (
    <>
      <div className="flex w100 center">
        <div className="flex around w95">
          <div className="w100">
            <h2>{DoctorData.doctor_name.bangla_name}</h2>
            <h3>{DoctorData.doctor_subname.bangla_subname}</h3>
            <p>
              {DoctorData.doctor_degree.bangla_degree}
              <br />
              বিএমডিসি রেজিঃ নং-{DoctorData.mbdc_no}
              <br />
              মোবাইল: {DoctorData.doctor_phone}
            </p>
          </div>

          <div className="w100 textCenter flex center end cloman">
            <div className="w100">
              <img className="pLogo" src={logo} alt="" />
            </div>
            <div className="banar flex center medel">
              {siteinfo.fullName}
            </div>
          </div>

          <div className="w100 textRight">
            <h2>{DoctorData.doctor_name.english_name}</h2>
            <h3>{DoctorData.doctor_subname.english_subname}</h3>
            <p>
              {DoctorData.doctor_degree.english_degree}
              <br />
              BMDC Reg. No.-{DoctorData.mbdc_no}
              <br />
              Mobile: {DoctorData.doctor_phone}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}