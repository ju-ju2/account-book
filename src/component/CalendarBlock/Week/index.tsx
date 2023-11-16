import { DayBlock, Wrapper } from './styled';

export default function Week() {
  const date = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <Wrapper>
      {date.map((day, index) => (
        <DayBlock key={index}>{day}</DayBlock>
      ))}
    </Wrapper>
  );
}
