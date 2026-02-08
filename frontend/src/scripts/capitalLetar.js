export function capitalLetar(text) {
  if (!text) return "";

  return text
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}
