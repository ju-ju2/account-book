import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import {
  CircleTagWrapper,
  DailyPrice,
  DayRow,
  Disabled,
  NotValid,
  TextNotValid,
  TextValid,
  Valid,
  WeekCol,
} from './styled';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  deleteField,
} from 'firebase/firestore';
import { firebaseApp } from '../../../libs/firebase';
import CircleTag from '../../CircleTag';
import { tagPriceConveter } from '../../../utils';

interface DaysType {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
}

export default function Days({
  currentMonth,
  selectedDate,
  onDateClick,
}: DaysType) {
  const monthStart = startOfMonth(currentMonth); // 월 시작 일자
  const monthEnd = endOfMonth(monthStart); // 월 마지막 일자
  const startDate = startOfWeek(monthStart); // 달력에서 보여지는 시작 일자
  const endDate = endOfWeek(monthEnd); // 달력에서 보여지는 마지막 일자

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  // const onClickSubmit = () => {
  //   // 등록하기 // 자동으로 id 생성할 때
  //   const account = collection(getFirestore(firebaseApp), 'account');
  //   void addDoc(account, {
  //     writer: 'user',
  //     spend: 34000,
  //     tag: 'meeting',
  //   });
  // };

  const db = getFirestore(firebaseApp);

  // 덮어쓰기 식으로 수정하는 기능 + 기존 문서가 없다면 추가
  const onClickModify = () => {
    console.log('전체 재 수정');
    void setDoc(doc(db, 'account', '20231116'), {
      // doc(db, 대분류(문서 이름), 소분류(id)
      writer: 'user',
      spend: 10000,
      tag: 'study',
    });
  };

  // 일부만 수정하는 기능
  const onClickModifySome = async () => {
    await updateDoc(doc(db, 'account', '20231116'), {
      tag: 'trip',
    });
  };

  const onClickFetch = async () => {
    const account = collection(getFirestore(firebaseApp), 'account');
    const result = await getDocs(account);
    const data = result.docs.map((doc) => doc.data());

    console.log(data);
  };

  // 문서삭제
  const onClickDeleteDoc = async () => {
    console.log('deleteDoc');
    await deleteDoc(doc(db, 'account', '20231116'));
  };

  // 필드삭제
  const onClickDeleteField = async () => {
    console.log('deleteField');
    await updateDoc(doc(db, 'account', '20231116'), {
      tag: deleteField(),
    });
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const IsValidDiv = // 클릭 이벤트 및 배경 제어
        !isSameMonth(day, monthStart) ||
        format(currentMonth, 'M') !== format(day, 'M') // 이번달에 속한 일이 아닐 경우
          ? Disabled
          : isAfter(day, new Date()) // 오늘 이후의 날짜
          ? NotValid
          : Valid;

      const IsValidSpan = // 글자 색깔 지정
        format(currentMonth, 'M') !== format(day, 'M')
          ? TextNotValid
          : TextValid;
      formattedDate = format(day, 'd');
      const cloneDay = day;

      days.push(
        <IsValidDiv key={Number(day)} onClick={() => onDateClick(cloneDay)}>
          <IsValidSpan>{formattedDate}</IsValidSpan>
          {/* <button onClick={onClickFetch}>받아오기</button>
          <button onClick={onClickModify}>등록 / 수정하기</button>
          <button onClick={onClickModifySome}>일부수정하기</button>
          <button onClick={onClickDeleteDoc}>삭제하기</button>
          <button onClick={onClickDeleteField}>일부 삭제하기</button> */}
          <CircleTagWrapper>
            {tempTagData.map((item) => (
              <CircleTag type={item} />
            ))}
          </CircleTagWrapper>
          <DailyPrice>{tagPriceConveter(-16000)}</DailyPrice>
        </IsValidDiv>
      );
      day = addDays(day, 1);
    }
    rows.push(<DayRow key={Number(day)}>{days}</DayRow>);
    days = [];
  }
  return <WeekCol>{rows}</WeekCol>;
}

// const tempTagData = ['food', 'shop', 'etc'];
const tempTagData = ['food', 'shop', 'hobby', 'etc'];
