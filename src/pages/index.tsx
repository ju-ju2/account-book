import CalendarBlock from '../component/CalendarBlock';
import ThemeTogglebutton from '../component/ThemeTogglebutton';
import TimeBlock from '../component/TimeBlock';
import WeatherBlock from '../component/WeatherBlock';
import { Col, Row, WeatherWrapper } from './styled';

export default function MainPage() {
  return (
    <>
      <ThemeTogglebutton />
      <Row>
        <Col>
          <WeatherWrapper>
            <TimeBlock />
            <WeatherBlock />
          </WeatherWrapper>
          {/* 합산한 가격 자리 */}
        </Col>
        <CalendarBlock></CalendarBlock>
      </Row>
    </>
  );
}
