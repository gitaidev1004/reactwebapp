function Greeting({ isLoggedIn }) {
  return (
    <p>{isLoggedIn ? '어서 오세요!' : '로그인이 필요합니다.'}</p>
  );
}