import { createPortal } from "react-dom";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Popup({ show, children, onClose }) {

    if (!show) return null;

    return createPortal(
        <div className="popupBG animation">
            <div className="popup">
                <div className="flex beet">
                    <div></div>
                    <div className="closeButton" onClick={onClose}>
                        <RiCloseLargeLine className="iconx" />
                    </div>
                </div>

                <div className="scroll1">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}
