import { styled } from 'styled-components';
import { TAG_TYPE } from '../../utils/constants';

const tagColors: { [key: string]: string } = {
  [TAG_TYPE.FOOD]: '#1677ff',
  [TAG_TYPE.SHOP]: '#52c41a',
  [TAG_TYPE.HOBBY]: '#ff4d4f',
  [TAG_TYPE.ETC]: '#ff4d4f',
};

const tagBackground: { [key: string]: string } = {
  [TAG_TYPE.FOOD]: '#e6f4ff',
  [TAG_TYPE.SHOP]: '#f6ffed',
  [TAG_TYPE.HOBBY]: '#fff2f0',
  [TAG_TYPE.ETC]: '#fffbe6',
};

export const TagWrapper = styled.div<{ type: string }>`
  color: ${({ type }) => tagColors[type]};
  background-color: ${({ type }) => tagBackground[type]};
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 5px;
`;
