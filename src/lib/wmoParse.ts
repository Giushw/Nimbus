/**
 * Code    Description
 * from https://open-meteo.com/en/docs#current=temperature_2m,precipitation,weather_code
 * 0       Clear sky
 * 1, 2, 3 Mainly clear, partly cloudy, and overcast
 * 45, 48  Fog and depositing rime fog
 * 51, 53, 55 Drizzle: Light, moderate, and dense intensity
 * 56, 57  Freezing Drizzle: Light and dense intensity
 * 61, 63, 65 Rain: Slight, moderate and heavy intensity
 * 66, 67  Freezing Rain: Light and heavy intensity
 * 71, 73, 75 Snow fall: Slight, moderate, and heavy intensity
 * 77      Snow grains
 * 80, 81, 82 Rain showers: Slight, moderate, and violent
 * 85, 86  Snow showers slight and heavy
 * 95 *    Thunderstorm: Slight or moderate
 * 96, 99 * Thunderstorm with slight and heavy hail
 */


const weatherDescriptions: { [key: string]: string } = {
  '0': 'Clear sky',
  '1': 'Mainly clear',
  '2': 'Partly cloudy',
  '3': 'Overcast',
  '45': 'Fog',
  '48': 'Depositing rime fog',
  '51': 'Light drizzle',
  '53': 'Moderate drizzle',
  '55': 'Dense drizzle',
  '56': 'Light freezing drizzle',
  '57': 'Dense freezing drizzle',
  '61': 'Slight rain',
  '63': 'Moderate rain',
  '65': 'Heavy rain',
  '66': 'Light freezing rain',
  '67': 'Heavy freezing rain',
  '71': 'Slight snow fall',
  '73': 'Moderate snow fall',
  '75': 'Heavy snow fall',
  '77': 'Snow grains',
  '80': 'Slight rain showers',
  '81': 'Moderate rain showers',
  '82': 'Violent rain showers',
  '85': 'Slight snow showers',
  '86': 'Heavy snow showers',
  '95': 'Thunderstorm: Slight or moderate',
  '96': 'Thunderstorm with slight hail',
  '99': 'Thunderstorm with heavy hail'
};

/**
 * WMO Code To Label
 * Get an intelligible string from a specific WMO code.
 * @param {string} code - Weather code to translate.
 * @returns {string} A readable string that explains the weather.
 * @example 
 * const data = wmoCodeToLabel('12');
 */
export const wmoCodeToLabel = (code: string): string => {
  return weatherDescriptions[code] || 'Invalid code';
};
