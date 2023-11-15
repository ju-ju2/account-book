import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import {
  DayCell,
  Disabled,
  NotValid,
  Selected,
  TextNotValid,
  TextValid,
  Valid,
  WeekCol,
} from './styled';

interface DaysType {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

export default function Days({
  currentMonth,
  selectedDate,
  onDateClick,
}: DaysType) {
  const monthStart = startOfMonth(currentMonth); // 월 시작 일자
  const monthEnd = endOfMonth(monthStart); // 월 마지막 일자
  const startDate = startOfWeek(monthStart); // 달력에서 보여지는 시작 일자
  const endDate = endOfWeek(monthEnd); // 달력에서 보여지는 마지막 일자

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const IsValidDiv = // 클릭 이벤트 및 배경 제어
        !isSameMonth(day, monthStart) ||
        format(currentMonth, 'M') !== format(day, 'M') // 이번달에 속한 일이 아닐 경우
          ? Disabled
          : isSameDay(day, selectedDate) // 선택된 날짜
          ? Selected
          : isAfter(day, new Date()) // 오늘 이후의 날짜
          ? NotValid
          : Valid;

      const IsValidSpan = // 글자 색깔 지정
        format(currentMonth, 'M') !== format(day, 'M')
          ? TextNotValid
          : TextValid;
      formattedDate = format(day, 'd');
      const cloneDay = day;

      days.push(
        <IsValidDiv key={Number(day)} onClick={() => onDateClick(cloneDay)}>
          <IsValidSpan>{formattedDate}</IsValidSpan>
        </IsValidDiv>
      );
      day = addDays(day, 1);
    }
    rows.push(<DayCell key={Number(day)}>{days}</DayCell>);
    days = [];
  }
  return <WeekCol>{rows}</WeekCol>;
}
