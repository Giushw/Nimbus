/**
 * Geo Data Shortner
 * Get a shorter number for Latitude or Longitude.
 * @param {number} value - Latitude or Longitude number value.
 * @returns {number} A readable string that explain what weather.
 * @example 
 * const data = geoDataShortner('45.12434346');
 */
export const geoDataShortner = (value: number): number => parseFloat(value.toFixed(2));

/**
 * Trim Location
 * Get a shorter Location.
 * @param {string} address - Location address to trim.
 * @returns {string} A Trimmed address without redundancy.
 * @example 
 * const data = trimLocation('Milano, Lombardia, Italia');
 */
export const trimLocation = (address: string): string => {
  const parts = address.split(',');

  if (parts.length < 2) {
      return address;
  }

  return  parts.slice(1).join(',').trim();
};

/**
 * Normalize Dete
 * Get a readable date.
 * @param {string} dateStr - the date to transform.
 * @returns {string} A readable date in format DD/MM/YYYY HH:MM.
 * @example 
 * const data = anormalizeDate('2024-07-03T15:15');
 */
export const normalizeDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
