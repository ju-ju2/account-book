import { TAG_TYPE } from '../../utils/constants';
import { Circle } from './styled';
interface CircleTagType {
  type: string;
}
export default function CircleTag({ type }: CircleTagType) {
  return <Circle type={type} />;
}
