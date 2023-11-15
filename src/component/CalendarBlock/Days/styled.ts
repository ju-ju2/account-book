import { styled } from 'styled-components';

export const Disabled = styled.div`
  background-color: red;
  width: calc(100% / 7);
  height: 70px;
  padding: 5px;
`;
export const Selected = styled.div`
  background-color: blue;
  width: calc(100% / 7);
  height: 70px;
  padding: 5px;
`;
export const NotValid = styled.div`
  background-color: green;
  width: calc(100% / 7);
  height: 70px;
  padding: 5px;
`;
export const Valid = styled.div`
  background-color: pink;
  width: calc(100% / 7);
  height: 70px;
  padding: 5px;
`;
export const TextValid = styled.span`
  color: yellow;
`;
export const TextNotValid = styled.span`
  color: purple;
`;

export const WeekCol = styled.div`
  display: flex;
  /* width: calc(100% / 7); */
  flex-direction: column;
  width: 100%;
  height: 150px;
  background-color: ivory;
`;

export const DayCell = styled.div`
  /* width: calc(100% / 7); */
  height: 100%;
  /* padding: 5px; */
  font-size: 12px;
  display: flex;
  justify-content: space-around;
`;
