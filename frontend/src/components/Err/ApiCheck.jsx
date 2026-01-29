import React, { useEffect, useState } from "react";
import ErrorNote from "../../hooks/ErrorNote";
import api from "../../api/api.json"

export default function OnlineCheck() {
  const [status, setStatus] = useState(null); 

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000); 
        const getApi = `${api.request}://${api.server}/online.php`
        const res = await fetch(getApi, {
          signal: controller.signal,
        });
        clearTimeout(timeout);

        if (!res.ok) throw new Error("Server Error");

        const data = await res.json();

        if (data && data[0]?.status === "true") {
          setStatus(null);
        } else {
          setStatus("dataError"); 
        }
      } catch (err) {
        if (err.name === "AbortError") {
        console.log("Network Error!")
        } else {
          setStatus("dataError");
        }
      }
    };

    checkAPI();
    const interval = setInterval(checkAPI, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      
      {status === "dataError" && (
        <ErrorNote errorText="দুঃখিত পিএইচপি সার্ভের থেকে কোনো পাওয়া যাচ্ছেনা । অনুগ্রহ করে রিলোড করুন আবার চেষ্টা করুন !" />
      )}
    </>
  );
}
