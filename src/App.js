import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay'

const App = () => {
   const [city, setCity] = useState('');
   const [weatherData, setWeatherData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const API="7cb99d0b16edeef6388eb1053596047e";

   const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
         const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
         );
         setWeatherData(response.data);
      } catch (error) {
         setError("City not found or API error");
      } finally {
         setLoading(false);
      }
   };

   const handleSearch = (e) => {
      e.preventDefault();
      fetchWeatherData();
   };

   return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
         <h1>Weather App</h1>
         <form onSubmit={handleSearch}>
            <input
               type="text"
               placeholder="Enter city name"
               value={city}
               onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Search</button>
            {/* <h3>{weatherData}</h3> */}
         </form>
         {loading && <p>Loading...</p>}
         {error && <p style={{ color: 'red' }}>{error}</p>}
         {weatherData && <WeatherDisplay data={weatherData} />}
      </div>
   );
};

export default App;
