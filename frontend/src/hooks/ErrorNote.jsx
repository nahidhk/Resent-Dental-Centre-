import react from "react";
import { BiSolidError } from "react-icons/bi";
export default function ErrorNote({ errorText }) {
    return (
        <>
            <div className="err index">
                <p className="flex medel center cloman padding">
                    <BiSolidError className="errIcon" />
                   <p className="textCenter">
                    {errorText}
                   </p>
                </p>
            </div>
        </>
    )
}