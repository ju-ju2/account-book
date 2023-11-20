import { useState } from 'react';
import CalendarBlock from '../component/CalendarBlock';
import Modal from '../component/Modal';
import ThemeTogglebutton from '../component/ThemeTogglebutton';
import TimeBlock from '../component/TimeBlock';
import WeatherBlock from '../component/WeatherBlock';
import { Col, Row, WeatherWrapper } from './styled';

export default function MainPage() {
  const [open, setOpen] = useState(false);
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
      <button onClick={() => setOpen(true)}>모달 오픈</button>
      {open && <Modal open={open} setModalOpen={setOpen} />}
    </>
  );
}
