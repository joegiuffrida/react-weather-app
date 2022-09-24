import styles from './App.module.css';
import CurrentWeather from './components/current-weather/current-weather.component';
import Search from './components/search/search.component';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className={styles.container}>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
