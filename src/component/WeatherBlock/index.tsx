import { useWeatherInfo } from '../../query/weather';

export default function WeatherBlock() {
  const { data } = useWeatherInfo();
  console.log(data);
  return <></>;
}
