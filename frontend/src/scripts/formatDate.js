export default function formatDate(dateStr) {
  if (!dateStr) return "";

  const date = new Date(dateStr.replace(" ", "T"));

  return date
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    })
    .replace(",", "");
}
