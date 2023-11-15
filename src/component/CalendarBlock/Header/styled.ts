import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 15px;
  padding: 20px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Month = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

export const Year = styled.div`
  font-size: 15px;
`;
