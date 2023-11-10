export const getTime = () => {
  const dates = new Date();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const seconds = dates.getSeconds();

  const month = (dates.getMonth() + 1).toString().padStart(2, '0');
  const date = dates.getDate().toString().padStart(2, '0');
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

  return { time, calendar };
};
