import { styled } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;

  background-color: rgba(0, 0, 0, 0.25); // 외부영역 어둡게
`;

export const Wrapper = styled.div`
  width: 400px;
  height: auto;
  min-height: 300px;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  /* 위아래 너비를 준 상태에서 가로 50%, 세로 50%를 이동시킬 수 있다 (= 한가운데 배치) */
  transform: translate(-50%, -50%);

  background-color: white;
  box-shadow: 3px 3px 10px;

  border-radius: 8px;
  padding: 15px;

  display: flex;
  flex-direction: column;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ModifyBtn = styled.div`
  cursor: pointer;
`;
export const CloseBtn = styled.div`
  /* position: absolute;
  top: 15px;
  right: 15px; */
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 30px;
`;

// export const ButtonWrapper = styled.div`
//   position: absolute;
//   bottom: 15px;
//   right: 15px;
//   margin-top: 15px;

//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

export const OkBtn = styled.button`
  background-color: #1677ff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  border: 1px solid #1677ff;
  color: #1677ff;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Contents = styled.div`
  width: 230px;
  font-size: 14px;
`;

export const Price = styled.div`
  width: 70px;
  margin-left: auto;
  text-align: end;
  font-size: 14px;
`;

export const Border = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  margin-top: auto;
`;

export const DailyTotalPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: end;
  margin-top: 10px;
`;
