import { useQuery } from 'react-query';
import { getTime } from '../utils';
import { dfs_xy_conv } from '../utils/forecastXY';
import { useMyLocation } from '../hooks/useLocation';

export const useWeatherInfo = () => {
  const { formattedDate, nearTime } = getTime();

  const serviceKey = process.env.REACT_APP_API_WEATHER_KEY;

  const { lat, lng } = useMyLocation();
  // 위치를 알 수 없을 때 0

  const rs = dfs_xy_conv('toXY', lat, lng);

  return useQuery({
    queryKey: ['weatherInfo'],
    queryFn: async () => {
      return fetch(
        `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${formattedDate}&base_time=${nearTime}&nx=${
          rs.lat === 0 ? 60 : rs.x
        }&ny=${rs.lng === 0 ? 127 : rs.y}`
      ).then((res) => res.json());
    },
  });
};
