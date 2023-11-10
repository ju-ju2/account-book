import { useWheatherInfo } from '../../query/wheather';

export default function WeatherBlock() {
  const { data } = useWheatherInfo();
  console.log(data);
  return <></>;
}
