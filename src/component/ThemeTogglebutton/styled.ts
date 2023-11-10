import { css, styled } from 'styled-components';

export const Wrapper = styled.button`
  //   position: absolute;
  //   top: 0;
  //   right: 0;

  width: 80px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  // background-color: ${({ theme }) => theme.bgColor};
  // border: ${({ theme }) => theme.borderColor};

  ${({ theme }) => {
    return css`
      color: ${(props) => props.theme.textColor};
      background-color: ${(props) => props.theme.bgColor};
      border: ${({ theme }) => theme.borderColor};
    `;
  }}
`;
