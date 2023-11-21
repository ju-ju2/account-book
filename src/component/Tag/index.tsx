import { getTagTitle } from '../../utils';
import { TAG_TYPE } from '../../utils/constants';
import { TagWrapper } from './styled';

interface TagProps {
  type?: string;
}

export default function Tag({ type = TAG_TYPE.ETC }: TagProps) {
  const title = getTagTitle(type);

  return <TagWrapper type={type}>{title}</TagWrapper>;
}
