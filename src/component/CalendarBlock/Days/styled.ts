import { styled } from 'styled-components';

export const Disabled = styled.div`
  /* background-color: red; */
  width: calc(100% / 7);
  height: 90px;
  padding: 5px;
  border-right: 1px solid;
  border-bottom: 1px solid;
  pointer-events: none;
`;
export const Selected = styled.div`
  background-color: rgba(253, 141, 20, 0.2);
  width: calc(100% / 7);
  height: 90px;
  padding: 5px;
  border-right: 1px solid;
  border-bottom: 1px solid;
`;
export const NotValid = styled.div`
  /* background-color: green; */
  width: calc(100% / 7);
  height: 90px;
  padding: 5px;
  border-right: 1px solid;
  border-bottom: 1px solid;
`;
export const Valid = styled.div`
  /* background-color: pink; */
  width: calc(100% / 7);
  height: 90px;
  padding: 5px;
  border-right: 1px solid;
  border-bottom: 1px solid;
`;
export const TextValid = styled.span`
  /* color: yellow; */
`;
export const TextNotValid = styled.span`
  color: #d9d9d9;
`;

export const WeekCol = styled.div`
  display: flex;
  /* width: calc(100% / 7); */
  flex-direction: column;
  width: 100%;
  border-left: 1px solid;
  border-top: 1px solid;
`;

export const DayRow = styled.div`
  /* width: calc(100% / 7); */
  /* height: 100px; */
  /* padding: 5px; */
  font-size: 12px;
  display: flex;
  justify-content: space-around;
`;
