import { useWeatherInfo } from '../../query/weather';
import { rainStatusConverter, skyStatusConverter } from '../../utils';
import { Sky, Temp, Container, Wrapper } from './styled';

export default function WeatherBlock() {
  const { data, isError, isLoading } = useWeatherInfo();

  const rainData = data?.response?.body?.items?.item[6].fcstValue;
  const skyData = data?.response?.body?.items?.item[18].fcstValue;
  const tempData = data?.response?.body?.items?.item[24].fcstValue;

  const rain = rainStatusConverter(rainData);
  const sky = skyStatusConverter(skyData);

  if (isError) {
    return (
      <Container>
        날씨 정보를
        <br />
        불러 올 수 없습니다.
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <>
            <Temp>{tempData}°C</Temp>
            <Sky>
              {sky} / {rain}
            </Sky>
          </>
        )}
      </Wrapper>
    </Container>
  );
}
