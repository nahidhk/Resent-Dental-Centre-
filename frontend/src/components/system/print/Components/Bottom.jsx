import react from "react";
import DoctorData from "../../../../data/config/prescription.json";
import siteinfo from "../../../../data/setting/siteDetels.json";


export default function Bottom() {
    return (
        <>
            <div className="modiul3 mt-auto" >
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
                            <p className="mark">চেম্বার :</p>
                        </div>
                        <p>
                            {siteinfo.fullName} <br />
                            <span className="t16">
                                {DoctorData.doctor_address.bangla_address}
                            </span>
                        </p>
                        <div className="flex">
                            <p className="mark">রোগী দেখার সময়:</p>
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