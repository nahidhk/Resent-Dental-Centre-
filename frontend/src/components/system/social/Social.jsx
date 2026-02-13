import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaFacebookMessenger,
  FaWhatsapp,
  FaLinkedinIn,
  FaChrome
} from "react-icons/fa6";

export default function Social({ feedLink }) {

  const encodedUrl = encodeURIComponent(feedLink);

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex">

      {/* Facebook */}
      <div
        className="socialBtn"
        onClick={() =>
          openLink(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)
        }
      >
        <span className="socialTitle">Facebook</span>
        <FaFacebookF className="socialIcon" />
      </div>

      {/* Twitter X */}
      <div
        className="socialBtn"
        onClick={() =>
          openLink(`https://twitter.com/intent/tweet?url=${encodedUrl}`)
        }
      >
        <span className="socialTitle">Twitter X</span>
        <FaXTwitter className="socialIcon" />
      </div>

      {/* Messenger */}
      <div
        className="socialBtn"
        onClick={() =>
          openLink(`https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=YOUR_APP_ID`)
        }
      >
        <span className="socialTitle">Messenger</span>
        <FaFacebookMessenger className="socialIcon" />
      </div>

      {/* WhatsApp */}
      <div
        className="socialBtn"
        onClick={() =>
          openLink(`https://wa.me/?text=${encodedUrl}`)
        }
      >
        <span className="socialTitle">Whatsapp</span>
        <FaWhatsapp className="socialIcon" />
      </div>

      {/* LinkedIn */}
      <div
        className="socialBtn"
        onClick={() =>
          openLink(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)
        }
      >
        <span className="socialTitle">LinkedIn</span>
        <FaLinkedinIn className="socialIcon" />
      </div>

      {/* Open Directly */}
      <div
        className="socialBtn"
        onClick={() => openLink(feedLink)}
      >
        <span className="socialTitle">Open in Browser</span>
        <FaChrome className="socialIcon" />
      </div>

    </div>
  );
}
