import "./App.css";
import Search from "./components/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_KEY } from "./api";
import { WEATHER_API_URL } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&long=${long}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&long=${long}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
