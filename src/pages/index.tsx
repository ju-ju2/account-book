import ThemeTogglebutton from '../component/ThemeTogglebutton';
import TimeBlock from '../component/TimeBlock';
import WeatherBlock from '../component/WeatherBlock';
import { WeatherWrapper } from './styled';

export default function MainPage() {
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
