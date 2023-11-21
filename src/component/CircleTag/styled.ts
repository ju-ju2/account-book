import { styled } from 'styled-components';
import { TAG_TYPE } from '../../utils/constants';

const tagColors: { [key: string]: string } = {
  [TAG_TYPE.FOOD]: '#91caff',
  [TAG_TYPE.SHOP]: '#b7eb8f',
  [TAG_TYPE.HOBBY]: '#ffccc7',
  [TAG_TYPE.ETC]: '#ffe58f',
};

export const Circle = styled.div<{ type: string }>`
  background-color: ${({ type }) => tagColors[type]};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;
