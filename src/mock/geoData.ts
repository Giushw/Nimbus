import type {GeoEntity} from "../types/geoData";

// In case that API reach the limit

export const MOCK_FIRST: GeoEntity = {
  place_id: 387107677,
  lat: '45.4641943',
  lon: '9.1896346',
  name: 'Milano',
  display_name: 'Milano, Lombardia, Italia'
};
export const MOCK_SECOND: GeoEntity = {
  place_id: 225058060,
  lat: '35.6821936',
  lon: '139.762221',
  name: 'Tokyo',
  display_name: 'Tokyo, Giappone'
};

export const MOCK_THIRD: GeoEntity = {
  place_id: 330744634,
  lat: '61.2163129',
  lon: '-149.894852',
  name: 'Anchorage',
  display_name: 'Anchorage, Alaska, Stati Uniti d\'America'
};