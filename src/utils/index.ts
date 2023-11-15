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
    //   // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert('GPS를 지원하지 않습니다');
  }
  return { lat, lng };
};
