import { useEffect } from "react";

function KakaoLoginButton() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(""); // JavaScript 키로 초기화
    }
  }, []);

  const loginWithKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/oauth/kakao/callback", // 이 주소로 리디렉션됨
      
    });
  };

  return <button style={{width:480, margin:'0 auto', border:0, backgroundColor:'yellow', height:56, borderRadius:9}} onClick={loginWithKakao}>카카오로 간편 로그인</button>;
}

export default KakaoLoginButton;
