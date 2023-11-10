import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: 150px;
  background-color: ${({ theme }) => theme.componentBgColor};
  border: ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  justify-content: center;
`;

export const Time = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const IsNoon = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
