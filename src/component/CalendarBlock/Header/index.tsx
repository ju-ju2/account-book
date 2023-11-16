import { format } from 'date-fns';
import { Col, Container, Month, Row, Year } from './styled';

interface HeaderProps {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

export default function Header({
  currentMonth,
  prevMonth,
  nextMonth,
}: HeaderProps) {
  return (
    <Container>
      <Col>
        <Year>{format(currentMonth, 'yyyy')}</Year>
        <Row>
          <div onClick={prevMonth}>&lt;</div>
          <Month>{format(currentMonth, 'MM')}월</Month>
          <div onClick={nextMonth}>&gt;</div>
        </Row>
      </Col>
    </Container>
  );
}
