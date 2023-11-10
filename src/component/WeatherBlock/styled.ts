import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: 150px;
  background-color: ${({ theme }) => theme.componentBgColor};
  border: ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`;
