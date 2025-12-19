
export function sessionData({ set, get , setDB}) {

  // SET
  if (set !== undefined) {
    sessionStorage.setItem(setDB, JSON.stringify(set));
  }

  // GET
  if (get) {
    const raw = sessionStorage.getItem(get);
    return raw ? JSON.parse(raw) : null;
  }
}
