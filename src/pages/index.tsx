import ThemeTogglebutton from '../component/ThemeTogglebutton';
import TimeBlock from '../component/TimeBlock';
import WeatherBlock from '../component/WeatherBlock';
import { WeatherWrapper } from './styled';

export default function MainPage() {
  const ServiceKey = process.env.REACT_APP_API_WEATHER_KEY;
  console.log(ServiceKey);
  return (
    <>
      <ThemeTogglebutton />
      <WeatherWrapper>
        <TimeBlock />
        <WeatherBlock />
      </WeatherWrapper>
    </>
  );
}
