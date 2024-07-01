import axios from "axios";
import type {GeoData} from "../types/geoData";

const apiClient = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org',
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * Get Geolocalization Data
 * Get geo data on a specific city.
 * @param {string} city - Name of the city.
 * @returns {Promise<GeoData>} A promise that resolves to an array of GeoData.
 * @example 
 * const data = await getGeoData('Milan');
 */
export const getGeoData = async (
  city: string,
): Promise<GeoData> => {
  try {
    const response = await apiClient.get('/search', {
      params: {
        city: city,
        format: 'json'
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
