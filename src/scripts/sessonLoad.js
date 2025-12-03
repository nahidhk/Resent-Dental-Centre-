
export function sessionLoad() {
    const raw = sessionStorage.getItem('data');
    return raw ? JSON.parse(raw) : null;
}
