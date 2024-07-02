/**
Code	Description
0	Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail
 */

/**
 * WMO Parser
 * Get a intelegible string from a specific WMO code.
 * @param {string} code - Wheather code to translate.
 * @returns {string} A readable string that explain what weather.
 * @example 
 * const data = await wmoParser('12');
 */
const wmoParser = (code: string): string => {
  switch (code) {
    case '0':
      return 'Clear sky';

    case '1':
    case '2':
    case '3':
      return 'Mainly clear, partly cloudy, and overcast';

    case '45':
    case '48':
      return 'Fog and depositing rime fog';

    case '51':
    case '53':
    case '55':
      return 'Drizzle: Light, moderate, and dense intensity';

    case '56':
    case '57':
      return 'Freezing Drizzle: Light and dense intensity';

    case '61':
    case '63':
    case '65':
      return 'Rain: Slight, moderate and heavy intensity';

    case '66':
    case '67':
      return 'Freezing Rain: Light and heavy intensity';

    case '71':
    case '73':
    case '75':
      return 'Snow fall: Slight, moderate, and heavy intensity';

    case '77':
      return 'Snow grains';

    case '80':
    case '81':
    case '82':
      return 'Rain showers: Slight, moderate, and violent';
    
    case '85':
    case '86':
      return 'Snow showers slight and heavy';

    case '95':
      return 'Thunderstorm: Slight or moderate';

    case '96':
    case '99':
      return 'Thunderstorm with slight and heavy hail';

    default:
      return 'Invalid code';
  }
};

export default wmoParser;