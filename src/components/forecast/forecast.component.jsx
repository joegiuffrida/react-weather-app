import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from './forecast.module.css';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className={styles.title}>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.dailyItem}>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className={styles.iconSmall}
                  />
                  <label className={styles.day}>{forecastDays[idx]}</label>
                  <label className={styles.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={styles.minMax}>
                    {Math.round(item.main.temp_min)}°F /{' '}
                    {Math.round(item.main.temp_max)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.dailyDetailsGrid}>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Pressure</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} mph</label>
                </div>
                <div className={styles.dailyDetailsGridItem}>
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
