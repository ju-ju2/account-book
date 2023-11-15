import { useState } from 'react';
import { Wrapper } from './styled';
import { addMonths, subMonths } from 'date-fns';
import Header from './Header';

export default function CalendarBlock() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  //   const onDateClick = (day) => {
  //     setSelectedDate(day);
  //   };
  return (
    <Wrapper>
      <Header
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
    </Wrapper>
  );
}
