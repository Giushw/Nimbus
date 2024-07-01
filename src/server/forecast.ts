import axios from "axios";
import type {Forecast} from "../types/forecast";

const apiClient = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/',
  headers: {
    'Content-Type': 'application/json',
  }
});

  const CURRENT_PARAMS = [
    'temperature_2m',
    'relative_humidity_2m',
    'apparent_temperature',
    'is_day',
    'precipitation',
    'rain',
    'showers',
    'snowfall',
    'weather_code',
    'cloud_cover',
    'pressure_msl',
    'wind_speed_10m',
    'wind_direction_10m',
    'wind_gusts_10m'
  ];

/**
 * Get Forecast
 * Get data on a specific city.
 * @param {number} latitude - Latitude of the city.
 * @param {number} longitude - Longitude of the city.
 * @param {string[] | undefined} current - optional - Array of current parameters to include in the forecast.
 * @returns {Promise<Forecast>} A promise that resolves to a forecast.
 * @example 
 * const data = await getForecast(45.4641943, 9.1896346, ['temperature_2m', 'relative_humidity_2m']);
 */
export const getForecast = async (
  latitude: number,
  longitude: number,
  current?: string[] | undefined
): Promise<Forecast> => {
  try {
    const currentParams = current ? current.join(',') : CURRENT_PARAMS;
    const response = await apiClient.get('/forecast', {
      params: {
        latitude: latitude ?? null,
        longitude: longitude ?? null,
        current: currentParams
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
