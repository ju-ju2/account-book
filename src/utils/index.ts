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

  const year = dates.getFullYear().toString(); // 뒤에서 두 자리만 가져오기
  const month = (dates.getMonth() + 1).toString().padStart(2, '0');
  const date = dates.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}${month}${date}`;

  const timeSlots = ['02', '05', '08', '11', '14', '17', '20', '23'];
  let nearTime = '';

  for (const time of timeSlots) {
    if (hours < Number(time) || (hours === Number(time) && minutes < 0)) {
      // 현재 시간 이후에 다음으로 올 시간 찾기
      nearTime = `${time}00`;
      break;
    }
  }

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
