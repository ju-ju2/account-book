import { useEffect } from 'react';

interface useOutsideClickProps {
  modalRef: React.RefObject<HTMLDivElement>;
  closeModal: () => void;
}

export const useOutsideClick = ({
  modalRef,
  closeModal,
}: useOutsideClickProps) => {
  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (e: MouseEvent) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);

    // 이벤트 핸들러 해제
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [modalRef]);
};
