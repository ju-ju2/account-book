import { useRef } from 'react';
import {
  // ButtonWrapper,
  Wrapper,
  Title,
  Container,
  CloseBtn,
  OkBtn,
  CancelBtn,
  ListWrapper,
  TagItem,
  Contents,
  Price,
  Border,
  ModifyBtn,
  BtnWrapper,
  DailyTotalPrice,
} from './styled';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Tag from '../Tag';
import { TAG_TYPE } from '../../utils/constants';
import { tagContentConveter, tagPriceConveter } from '../../utils';

interface ModalProps {
  title?: string;
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  onOkText?: string;
  onCancelText?: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({
  title = 'Daily 지출',
  onOkText = '확인',
  onCancelText = '취소',
  setModalOpen,
  onOk = () => setModalOpen(false),
  onCancel = () => setModalOpen(false),
}: ModalProps) {
  const closeModal = () => setModalOpen(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick({ modalRef, closeModal });

  return (
    <Container>
      <Wrapper ref={modalRef}>
        <BtnWrapper>
          <ModifyBtn>수정</ModifyBtn>
          <CloseBtn onClick={() => setModalOpen(false)}>X</CloseBtn>
        </BtnWrapper>
        <Title>{title}</Title>
        {/* 소비 내역 */}

        <ListWrapper>
          {tempData.data.map((item) => (
            <TagItem>
              <Tag type={item.type} />
              <Contents>{tagContentConveter(item.content)}</Contents>
              <Price>{tagPriceConveter(item.price)}</Price>
            </TagItem>
          ))}
        </ListWrapper>
        <Border />
        <DailyTotalPrice>총 {tagPriceConveter(300000)}</DailyTotalPrice>
        {/* <ButtonWrapper> */}
        {/* <OkBtn onClick={onOk}>{onOkText}</OkBtn> */}
        {/* <CancelBtn onClick={onCancel}>{onCancelText}</CancelBtn> */}
        {/* </ButtonWrapper> */}
      </Wrapper>
    </Container>
  );
}

interface DataDetailProps {
  type: string;
  content: string;
  price: number;
}
interface DataProps {
  data: DataDetailProps[];
}
const tempData: DataProps = {
  data: [
    { type: 'food', content: '마라머거 마라탕', price: 9000 },
    { type: 'shop', content: '어깨 대칭을 위한 백팩', price: 32000 },
    { type: 'hobby', content: '헬린이 헬스시작', price: 300000 },
  ],
};
