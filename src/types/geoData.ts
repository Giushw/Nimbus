export interface GeoEntity {
  place_id: number,
  lat: string,
  lon: string,
  name: string,
  display_name: string
}

export type GeoData = GeoEntity[];
