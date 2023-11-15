import { styled } from 'styled-components';

export const Container = styled.div`
  width: 200px;
  min-width: 200px;
  height: 150px;
  background-color: ${({ theme }) => theme.componentBgColor};
  border: ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 150%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
`;

export const Temp = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const Sky = styled.div`
  font-size: 16px;
`;
