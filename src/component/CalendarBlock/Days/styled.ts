import { styled } from 'styled-components';

export const Disabled = styled.div`
  width: calc(100% / 7);
  height: 90px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-right: 1px solid;
  border-bottom: 1px solid;
  pointer-events: none;
`;

export const NotValid = styled.div`
  width: calc(100% / 7);
  height: 90px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-right: 1px solid;
  border-bottom: 1px solid;
`;

export const Valid = styled.div`
  width: calc(100% / 7);
  height: 90px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-right: 1px solid;
  border-bottom: 1px solid;

  &:hover {
    background-color: rgba(253, 141, 20, 0.2);
  }
`;

export const TextValid = styled.p`
  margin-bottom: 7px;
`;

export const TextNotValid = styled.p`
  color: #d9d9d9;
  margin-bottom: 7px;
`;

export const WeekCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid;
  border-top: 1px solid;
`;

export const DayRow = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-around;
`;

export const CircleTagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DailyPrice = styled.p`
  font-weight: bold;
  color: #d9d9d9;
  margin-top: auto;
  text-align: end;
`;
