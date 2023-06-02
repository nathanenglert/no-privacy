export function getInitials(fullName: string) {
  return fullName
    .trim()
    .split(/\s+/) // Split the string into an array of words, handling multiple spaces
    .map((name) => name.charAt(0)) // Take the first letter of each word
    .join(""); // Join them into a new string
}
