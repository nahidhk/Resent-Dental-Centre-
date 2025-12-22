import React, { useState, useEffect } from "react";

let setGlobalLoader;

export function loading(show = false) {
  if (setGlobalLoader) setGlobalLoader(show);
}

export default function Loading() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setGlobalLoader = setLoader; 
    return () => { setGlobalLoader = null }; 
  }, []);

  if (loader === true) return null;

  return(
    <div className="index fixed">
      <div className="loader animate__animated animate__jackInTheBox"></div>
    </div>
  );
}



