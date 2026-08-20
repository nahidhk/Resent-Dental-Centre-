import React, { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const two = (n) => String(n).padStart(2, "0");

  const hours24 = now.getHours();
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;
  const minutes = two(now.getMinutes());
  const seconds = two(now.getSeconds());
  const timeString = `${two(hours12)}:${minutes}:${seconds} ${ampm}`;

const days = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"];

const months = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
];

  const dayName = days[now.getDay()];
  const date = now.getDate();
  const monthName = months[now.getMonth()];
  const year2 = String(now.getFullYear()).slice(-2);
  const dateString = `${dayName} ${date} ${monthName} ${year2}`;

  return (
    <div className="wach">
     <span className="clock ">
        {timeString}
     </span><br />
     <h2 className="colorFFF">
        {dateString}
     </h2>
     <br />
    </div>
  );
}
