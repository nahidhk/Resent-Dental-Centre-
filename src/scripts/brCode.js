function brCode() {
    const date = new Date();
    const d = (date instanceof Date) ? date : new Date(date);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0'); // month 0-based
    const yy = String(d.getFullYear() % 100).padStart(2, '0'); // last two digits
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    return dd + mm + yy + hh + min + ss;
}
