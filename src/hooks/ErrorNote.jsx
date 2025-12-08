import react from "react";
import { BiSolidError } from "react-icons/bi";
export default function ErrorNote() {
    return (
        <>
            <div className="err w100 flex center index bottom padding medel">
                <p className="flex medel center">
                    <BiSolidError className="bigText" />
                    ডাটাবেজ ও পিএইচপি সার্ভার থেকে ডাটা লোড করা সম্ভব হচ্ছে না।
                    দয়া করে রিলোড করুন এবং আবার চেষ্টা করুন।
                    <pre> Server The NdSQL</pre>
                </p>
            </div>
        </>
    )
}