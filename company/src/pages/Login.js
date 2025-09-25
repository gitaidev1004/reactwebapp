// src/pages/Login.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api";
import { setTokens } from "../auth";
import "./sub.css"; 

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [autoLogin, setAutoLogin] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const data = await login(form);
    if (data.access) {
      setTokens(data);
      localStorage.setItem("user", JSON.stringify(data.user));
      nav("/");
    } else {
      alert("로그인 실패: 아이디/비밀번호 확인");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>로그인</h2>
        <form onSubmit={submit}>
          {/* 아이디 입력 */}
          <div className="mb-3 position-relative">
            <input
              type="text"
              name="username"
              required
              className="form-control pe-4"
              placeholder="아이디(필수)"
              value={form.username}
              onChange={handleChange}
            />
            <span className="required-star">*</span>
          </div>

          {/* 비밀번호 입력 */}
          <div className="mb-3 position-relative">
            <input
              type="password"
              name="password"
              required
              className="form-control pe-4"
              placeholder="비밀번호(필수)"
              value={form.password}
              onChange={handleChange}
            />
            <span className="required-star">*</span>
          </div>

          {/* 자동 로그인 체크박스 */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="autoLogin"
              checked={autoLogin}
              onChange={(e) => setAutoLogin(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="autoLogin">
              자동로그인
            </label>
          </div>

          {/* 로그인 버튼 */}
          <button type="submit" className="btn-login" style={{ width: "100%" }}>
            로그인
          </button>

          {/* 회원 가입 링크 */}
          <Link to="/register" className="btn-register">
            회원 가입
          </Link>
        </form>
      </div>
    </div>
  );
}
