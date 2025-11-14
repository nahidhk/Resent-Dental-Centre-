// src/scripts/barcode.js
import JsBarcode from "jsbarcode";

export function createBarcode(element, code) {
  JsBarcode(element, code, {
  format: "CODE128",
  displayValue: true,
  lineColor: "#000",
  width: 1,
  height: 20,
  fontSize: 12, 
  });
}
