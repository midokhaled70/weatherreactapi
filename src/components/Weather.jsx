import React, { useEffect, useState, useCallback } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

export default function Weather() {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = useCallback(async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=49f0161906c5914ec93fad2b394472a4`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      console.log(data);

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: allIcons[data.weather[0].icon] || clear_icon,
      });
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  }, [allIcons]);

  useEffect(() => {
    search(city);
  }, [city, search]);

  const handleSearch = () => {
    if (city.trim()) {
      search(city);
    }
  };

  return (
    <>
      <div className="weather">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <img src={search_icon} alt="Search" onClick={handleSearch} />
        </div>

        {error ? (
          <p className="error">{error}</p>
        ) : weatherData ? (
          <>
            <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="Humidity" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="Wind" />
                <div>
                  <p>{weatherData.windSpeed} Km/h</p>
                  <span>Wind</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
