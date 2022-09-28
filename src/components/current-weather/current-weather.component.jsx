import styles from './current-weather.module.css';

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>{data.city}</p>
          <p className={styles.weatherDescription}>
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className={styles.weatherIcon}
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>

      <div className={styles.bottom}>
        <p className={styles.temperature}>{Math.round(data.main.temp)}°F</p>
        <div className={styles.details}>
          <div className={styles.parameterRow}>
            <span className={`${styles.parameterLabel} ${styles.top}`}>
              Details
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Feels like</span>
            <span className={styles.parameterValue}>
              {Math.round(data.main.feels_like)}°F
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Wind</span>
            <span className={styles.parameterValue}>
              {Math.round(data.wind.speed)} mph
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Humidity</span>
            <span className={styles.parameterValue}>
              {Math.round(data.main.humidity)}%
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Pressure</span>
            <span className={styles.parameterValue}>
              {Math.round(data.main.pressure)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
