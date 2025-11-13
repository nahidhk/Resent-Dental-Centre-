import React, { useRef, useEffect } from "react";
import { createBarcode } from "../scripts/barcode";

export default function BarCodeSvg({ code }) {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current && code) {
      createBarcode(barcodeRef.current, code);
    }
  }, [code]);

  return <svg ref={barcodeRef}></svg>;
}
