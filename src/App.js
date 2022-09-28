import { useState } from 'react';
import { WEATHER_API_URL } from './api';
import styles from './App.module.css';
import CurrentWeather from './components/current-weather/current-weather.component';
import Search from './components/search/search.component';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // the value we get is latitude and longitude in one string. we are splitting it
    // then storing it in two variables lat and long
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.error('error at handleOnSearchChange', err));
  };

  console.log({ currentWeather });
  console.log({ forecast });

  return (
    <div className={styles.container}>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
