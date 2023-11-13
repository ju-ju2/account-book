// interface GetTimeProps {
//   time: {
//     hour: string;
//     minute: string;
//     seconds: string;
//     isNoon: string;
//   };
//   calendar: {
//     month: string;
//     date: string;
//     week: string;
//   };
//   formattedDate: string;
//   nearTime: string;
// }

export const getTime = () => {
  const dates = new Date();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const seconds = dates.getSeconds();

  const oneDayAgo = new Date(dates.setDate(dates.getDate() - 1)); // 어제
  console.log(
    '어제 : ',
    oneDayAgo.getFullYear().toString(),
    (oneDayAgo.getMonth() + 1).toString().padStart(2, '0'),
    oneDayAgo.getDate().toString().padStart(2, '0')
  );

  const weatherApiDay = hours === 0 ? oneDayAgo : dates; // 00시 경우 이전 날 데이터 필요

  const year = weatherApiDay.getFullYear().toString(); // 뒤에서 두 자리만 가져오기
  const month = (weatherApiDay.getMonth() + 1).toString().padStart(2, '0');
  const date = weatherApiDay.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}${month}${date}`;

  const nearTime =
    hours === 0 && minutes < 45
      ? '2330'
      : minutes > 45
      ? `${hours}30`
      : `${hours - 1}30`;

  const weekArray = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const today = dates.getDay();
  const week = weekArray[today];

  const time = {
    hour:
      hours === 0
        ? '12'
        : hours > 12
        ? `${hours - 12}`
        : hours.toString().padStart(2, '0'),
    minute: minutes < 10 ? `0${minutes}` : minutes.toString(),
    seconds: seconds.toString(),
    isNoon: hours >= 12 ? 'PM' : 'AM',
  };

  const calendar = {
    month,
    date,
    week,
  };

  return { time, calendar, formattedDate, nearTime };
};
