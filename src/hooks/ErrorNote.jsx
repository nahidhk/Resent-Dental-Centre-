import react from "react";
import { BiSolidError } from "react-icons/bi";
export default function ErrorNote({ errorText }) {
    return (
        <>
            <div className="err w100 flex center index bottom padding medel">
                <p className="flex medel center">
                    <BiSolidError className="bigText" />
                   {errorText}
                </p>
            </div>
        </>
    )
}