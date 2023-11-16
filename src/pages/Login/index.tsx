import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../libs/firebase';

export default function Login() {
  const [userData, setUserData] = useState<User>();

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data.user); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(userData?.displayName);

  return (
    <div>
      {/* <Test></Test> */}
      <button onClick={handleGoogleLogin}>Login</button>
      {userData ? userData.displayName : null}
    </div>
  );
}
