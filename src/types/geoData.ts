export interface GeoEntity {
  place_id: number,
  lat: string,
  lon: string,
  name: string,
  display_name: string,
  addresstype: string
}

export type GeoData = GeoEntity[];

/**
{
    "place_id": 387649048,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "relation",
    "osm_id": 44915,
    "lat": "45.4641943",
    "lon": "9.1896346",
    "class": "boundary",
    "type": "administrative",
    "place_rank": 16,
    "importance": 0.7390652078701349,
    "addresstype": "city",
    "name": "Milano",
    "display_name": "Milano, Lombardia, Italia",
    "boundingbox": [
        "45.3867381",
        "45.5358482",
        "9.0408867",
        "9.2781103"
    ]
}
 */