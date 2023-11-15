import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DayBlock = styled.div`
  width: calc(100% / 7 - 5px);
  height: auto;
  padding: 5px;
  background-color: orange;
  border-radius: 5px;
  font-size: 12px;
`;
