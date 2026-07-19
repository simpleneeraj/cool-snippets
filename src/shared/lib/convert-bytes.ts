/**
 * Converts bytes into a human-readable format (KB, MB, GB, or TB).
 *
 * @param {number} bytes - The size in bytes.
 * @param {number} [decimalPlaces=2] - Number of decimal places for the result.
 * @returns {string} - The size in the appropriate unit with the unit suffix.
 */
function convertBytes(bytes: number, decimalPlaces: number = 2): string {
  if (typeof bytes !== 'number' || isNaN(bytes) || bytes < 0) {
    throw new Error("Invalid input: 'bytes' must be a non-negative number.");
  }

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  let index = 0;

  // Convert bytes to the appropriate unit
  while (bytes >= 1024 && index < units.length - 1) {
    bytes /= 1024;
    index++;
  }

  return `${bytes.toFixed(decimalPlaces)} ${units[index]}`;
}
export default convertBytes;
