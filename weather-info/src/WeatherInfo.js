import React, { useState, useEffect } from "react";

const WeatherInfo = () => {
  const [cityId, setCityId] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [cities, setCities] = useState([]);

  const fetchWeatherData = async (city) => {
    // REACT_APP_API_KEY=e7a25006b6cf3c49ab9fe895d6339c48;
    const apiId = "e7a25006b6cf3c49ab9fe895d6339c48";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      console.log(weatherData);
    } catch (error) {
      console.error("Failed to receive data from API service", error);
    }
  };

  useEffect(() => {
    fetch("./city.list.json")
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);

  useEffect(() => {
    if (cityId) {
      console.log(`Fetching weather data for ${cityId}`);
      fetchWeatherData(cityId);
    }
  }, [cityId]);

  return (
    <>
      <h1>Weather forecast</h1>
      <select onChange={(e) => setCityId(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}, {city.country}
          </option>
        ))}
      </select>
      {weatherData ? (
        <div>
          <h1>{weatherData.name}</h1>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default WeatherInfo;
