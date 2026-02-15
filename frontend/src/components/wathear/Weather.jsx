import React, { useEffect, useState } from "react";

export default function Weather() {
  const [temperature, setTemperature] = useState("--");
  const [windspeed, setWindspeed] = useState("--");
  const [humidity, setHumidity] = useState("--");
  const [desc, setDesc] = useState("Loading...");

  const lat = 24.134;
  const lon = 89.264;

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m&timezone=auto`)
      .then(res => res.json())
      .then(data => {
        const current = data.current_weather;
        setTemperature(current.temperature);
        setWindspeed(current.windspeed);

        // description
        let description = "পরিষ্কার আকাশ";
        if (current.weathercode > 2) description = "মেঘলা";
        if (current.weathercode > 50) description = "বৃষ্টি";
        setDesc(description);

        // humidity - আজকের average
        const today = new Date().toISOString().split("T")[0];
        const hourlyHumidity = data.hourly.time
          .map((t, i) => data.hourly.relativehumidity_2m[i])
          .filter((_, i) => data.hourly.time[i].startsWith(today));

        if (hourlyHumidity.length > 0) {
          const avg = Math.round(hourlyHumidity.reduce((a, b) => a + b, 0) / hourlyHumidity.length);
          setHumidity(avg);
        }
      })
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div style={{
      fontFamily: "Segoe UI, sans-serif",
      background: "#ffffffcf",
      width: "320px",
      padding: "20px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      textAlign: "center",
      margin: "20px auto",
      backdropFilter: "blur('5px')"
    }}>
      <h2>আতাইকুলা, পাবনা</h2>
      <div style={{ fontSize: "48px", fontWeight: "700" }}>{temperature}°C</div>
      <div style={{ color: "#555", marginBottom: "10px" }}>{desc}</div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px"
      }}>
        <div style={{
          background: "rgba(0,0,0,0.05)",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "13px"
        }}>
          💨 বাতাস: {windspeed} km/h
        </div>
        <div style={{
          background: "rgba(0,0,0,0.05)",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "13px"
        }}>
          💧 আর্দ্রতা: {humidity} %
        </div>
      </div>
    </div>
  );
}
