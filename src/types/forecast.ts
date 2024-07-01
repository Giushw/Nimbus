interface CurrentUnits {
  time: string,
  interval: string,
  temperature_2m: string,
  relative_humidity_2m: string,
  apparent_temperature: string,
  is_day: string,
  precipitation: string,
  rain: string,
  showers: string,
  snowfall: string,
  weather_code: string,
  cloud_cover: string,
  pressure_msl: string,
  surface_pressure: string,
  wind_speed_10m: string,
  wind_direction_10m: string,
  wind_gusts_10m: string
}

interface CurrentData {
  time: string, //"2024-07-01T15:30",
  interval: number,
  temperature_2m: number
  relative_humidity_2m: number,
  apparent_temperature: number,
  is_day: number, // 0 or 1 -> 1 = day
  precipitation: number,
  rain: number,
  showers: number,
  snowfall: number,
  weather_code: number,
  cloud_cover: number,
  pressure_msl: number,
  surface_pressure: number,
  wind_speed_10m: number,
  wind_direction_10m: number,
  wind_gusts_10m: number
}

export interface Forecast {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  current_units: CurrentUnits,
  current: CurrentData
}

/** Example
  {
    "latitude": 45.46,
    "longitude": 9.18,
    "generationtime_ms": 0.102996826171875,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 145,
    "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature_2m": "°C",
        "relative_humidity_2m": "%",
        "apparent_temperature": "°C",
        "is_day": "",
        "precipitation": "mm",
        "rain": "mm",
        "showers": "mm",
        "snowfall": "cm",
        "weather_code": "wmo code",
        "cloud_cover": "%",
        "pressure_msl": "hPa",
        "surface_pressure": "hPa",
        "wind_speed_10m": "km/h",
        "wind_direction_10m": "°",
        "wind_gusts_10m": "km/h"
    },
    "current": {
        "time": "2024-07-01T15:30",
        "interval": 900,
        "temperature_2m": 24.8,
        "relative_humidity_2m": 75,
        "apparent_temperature": 27.4,
        "is_day": 1,
        "precipitation": 0,
        "rain": 0,
        "showers": 0,
        "snowfall": 0,
        "weather_code": 95,
        "cloud_cover": 100,
        "pressure_msl": 1008.7,
        "surface_pressure": 992.1,
        "wind_speed_10m": 8.6,
        "wind_direction_10m": 180,
        "wind_gusts_10m": 24.1
    }
  }

 */