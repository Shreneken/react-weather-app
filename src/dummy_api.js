//Change name to api.js to work

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "insert_key_here",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";

export const WEATHER_API_KEY = "insert_key_here";
