import ThemeTogglebutton from '../component/ThemeTogglebutton';
import TimeBlock from '../component/TimeBlock';
import WeatherBlock from '../component/WeatherBlock';

export default function MainPage() {
  const ServiceKey = process.env.REACT_APP_API_WEATHER_KEY;
  console.log(ServiceKey);
  return (
    <>
      <ThemeTogglebutton />
      <TimeBlock />
      <WeatherBlock />
      dd
    </>
  );
}
