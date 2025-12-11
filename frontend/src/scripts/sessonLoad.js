
export function sessionLoad() {
    const raw = sessionStorage.getItem('0_x00c1d');
    return raw ? JSON.parse(raw) : null;
}
