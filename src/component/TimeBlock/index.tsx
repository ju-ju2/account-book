import { useEffect, useState } from 'react';
import { getTime } from '../../utils';
import { IsNoon, Time, TimeWrapper, Wrapper } from './styled';

interface TimeProps {
  hour: string;
  minute: string;
  seconds: string;
  isNoon: string;
}
export default function TimeBlock() {
  const { time } = getTime();

  const [newTime, setNewTime] = useState<TimeProps>(time);

  useEffect(() => {
    const Timer = setInterval(() => {
      setNewTime({ ...time });
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, [time]);

  return (
    <>
      <Wrapper>
        <TimeWrapper>
          <Time>
            {newTime.hour} : {newTime.minute}
          </Time>
          <IsNoon>{newTime.isNoon}</IsNoon>
        </TimeWrapper>
      </Wrapper>
    </>
  );
}
