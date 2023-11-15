import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 800px;
  min-width: 800px;
  height: 700px;
  background-color: ${({ theme }) => theme.componentBgColor};
  border: ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;
