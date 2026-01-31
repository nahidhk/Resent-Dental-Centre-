import react from "react";
import DoctorData from "../../../../data/config/prescription.json";
import siteinfo from "../../../../data/setting/siteDetels.json";


export default function Bottom() {
    return (
        <>
            <div className="" >
                <div className="segestBox flex beet w100">
                    <div className="t16">
                        <ul>
                            {(DoctorData?.detels?.idaya || []).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="flex">
                           চেম্বার :
                        </div>
                        <p>
                            {siteinfo.fullName} <br />
                            <span className="t16">
                                {DoctorData.doctor_address.bangla_address}
                            </span>
                        </p>
                        <div className="flex">
                          রোগী দেখার সময়:
                        </div>
                        <p className="t16">{DoctorData.chamber_time}</p>
                    </div>
                </div>

                <div className="bottomSystem t16 w100">
                    {DoctorData.bottomtext}
                </div>
            </div>
        </>
    )
}