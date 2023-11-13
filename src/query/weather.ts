import { useQuery } from 'react-query';
import { getTime } from '../utils';

export const useWeatherInfo = () => {
  const { formattedDate, nearTime } = getTime();
  // 임시 데이터
  const nx = 55;
  const ny = 127;

  const serviceKey = process.env.REACT_APP_API_WEATHER_KEY;

  return useQuery({
    queryKey: ['weatherInfo'],
    queryFn: async () => {
      return fetch(
        `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${formattedDate}&base_time=${nearTime}&nx=${nx}&ny=${ny}`
      ).then((res) => res.json());
    },
  });
};
