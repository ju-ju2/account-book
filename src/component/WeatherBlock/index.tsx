import { useWeatherInfo } from '../../query/weather';
import { Sky, Temp, Container, Wrapper } from './styled';

export default function WeatherBlock() {
  const { data } = useWeatherInfo();
  const rainData = data?.response.body.items.item[6].fcstValue;

  let rain = '';

  switch (rainData) {
    case '0':
      rain = '강수 없음';
      break;
    case '1':
      rain = '비';
      break;
    case '2':
      rain = '비/눈';
      break;
    case '3':
      rain = '눈';
      break;
    case '5':
      rain = '빗방울';
      break;
    case '6':
      rain = '빗방울/눈날림';
      break;
    case '7':
      rain = '눈날림';
      break;
    default:
      rain = '알 수 없음';
  }

  const skyData = data?.response.body.items.item[18].fcstValue;

  let sky = '';

  switch (skyData) {
    case '1':
      sky = '맑음 ☀️';
      break;
    case '3':
      sky = '구름많음 ⛅️';
      break;
    case '4':
      sky = '흐림 ☁️';
      break;
    default:
      sky = '알 수 없음';
  }

  const tempData = data?.response.body.items.item[24].fcstValue;

  console.log('rain : ', rain, 'sky : ', sky, 'temp : ', tempData);

  return (
    <Container>
      <Wrapper>
        <Temp>{tempData}°C</Temp>
        <Sky>
          {sky} / {rain}
        </Sky>
      </Wrapper>
    </Container>
  );
}
