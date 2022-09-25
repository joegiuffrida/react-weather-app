import styles from './current-weather.module.css';

const CurrentWeather = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>belgrade</p>
          <p className={styles.weatherDescription}>sunny</p>
        </div>
        <img alt="weather" className={styles.weatherIcon} src="icons/01d.png" />
      </div>

      <div className={styles.bottom}>
        <p className={styles.temperature}>18°C</p>
        <div className={styles.details}>
          <div className={styles.parameterRow}>
            <span className={`${styles.parameterLabel} ${styles.top}`}>
              Details
            </span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Feels like</span>
            <span className={styles.parameterValue}>22°C</span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Wind</span>
            <span className={styles.parameterValue}>2 mph</span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Humidity</span>
            <span className={styles.parameterValue}>15%</span>
          </div>
          <div className={styles.parameterRow}>
            <span className={styles.parameterLabel}>Pressure</span>
            <span className={styles.parameterValue}>15</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
