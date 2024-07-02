/**
 * Geo Data Shortner
 * Get a shorter number for Latitude or Longitude.
 * @param {number} value - Latitude or Longitude number value.
 * @returns {number} A readable string that explain what weather.
 * @example 
 * const data = await wmoParser('12');
 */
export const geoDataShortner = (value: number): number => parseFloat(value.toFixed(2));