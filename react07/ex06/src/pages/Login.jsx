import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    alert('데모: 로그인 성공 가정');
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>🔑 로그인 페이지</h2>
      <p>로그인이 필요한 페이지 접근 시 리다이렉트됩니다.</p>
      <button onClick={handleLogin}>로그인 (데모)</button>
    </div>
  );
}
