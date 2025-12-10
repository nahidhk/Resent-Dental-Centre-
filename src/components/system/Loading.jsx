import React, { useEffect, useState } from "react";

export default function Loading({loading}) {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(loading);
  }, [])

  if (loader === true) {
    return (
      <>
        <div className="">
          <div className="loader"></div>
        </div>
      </>
    )
  }
}