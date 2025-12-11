// src/script/convert.js

export function convertToBangla(num) {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  const english = num.toString();
  let bangla = "";
  for (let i = 0; i < english.length; i++) {
    const ch = english[i];
    if (ch >= '0' && ch <= '9') {
      bangla += banglaDigits[ch];
    } else {
      bangla += ch;
    }
  }
  return bangla;
}
