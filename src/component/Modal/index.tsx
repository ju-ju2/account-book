import { useRef } from 'react';
import {
  ButtonWrapper,
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
        <CloseBtn onClick={() => setModalOpen(false)}>X</CloseBtn>
        <Title>{title}</Title>
        {/* 소비 내역 */}

        <ListWrapper>
          <TagItem>
            <Tag />
            <Contents>
              {tagContentConveter(
                '마라탕 주문을 해보겠습니다 하하하 오늘은 월요일 이니까요'
              )}
            </Contents>
            <Price>{tagPriceConveter(15000)}</Price>
          </TagItem>
          <TagItem>
            <Tag type={TAG_TYPE.FOOD} />
          </TagItem>
        </ListWrapper>
        <ButtonWrapper>
          <OkBtn onClick={onOk}>{onOkText}</OkBtn>
          <CancelBtn onClick={onCancel}>{onCancelText}</CancelBtn>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}
