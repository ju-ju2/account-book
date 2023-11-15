export const getTime = () => {
  const dates = new Date();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const seconds = dates.getSeconds();

  const oneDayAgo = new Date(dates); // 새로운 Date 객체를 생성하여 현재 날짜와 시간을 복사
  oneDayAgo.setDate(dates.getDate() - 1); // 어제의 날짜로 설정

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

export const getLocation = () => {
  let lat = 0;
  let lng = 0;
  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      },
      function (error) {
        console.log('error : ', error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    console.log('GPS를 지원하지 않습니다');
  }
  return { lat, lng };
};

export const rainStatusConverter = (rainData: string) => {
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

  return rain;
};

export const skyStatusConverter = (skyData: string) => {
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

  return sky;
};
