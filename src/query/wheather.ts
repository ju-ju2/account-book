import { useQuery } from 'react-query';
import { getTime } from '../utils';

export const useWheatherInfo = () => {
  const { formattedDate, nearTime } = getTime();
  // 임시 데이터
  const nx = 55;
  const ny = 127;

  const ServiceKey = process.env.REACT_APP_API_WHEATHER_KEY;

  return useQuery({
    queryKey: ['wheatherInfo'],
    queryFn: async () => {
      return fetch(
        `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0?ServiceKey=${ServiceKey}&pageNo=1&numOfRows=100&dataType=XML&base_date=${formattedDate}&base_time=${nearTime}&nx=${nx}&ny=${ny}`
      ).then((res) => res.json());
    },
  });
};
