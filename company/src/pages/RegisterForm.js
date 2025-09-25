// src/pages/Register.js
import { useState, navigate } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register, checkUsername } from "../api";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    username: "", password: "", email: "",
    first_name: "", last_name: "",
  });
  const [valid, setValid] = useState(null);

  const handleUsername = async username => {
    setForm({ ...form, username });
    if (username.length >= 3) {
      const { exists } = await checkUsername(username);
      setValid(!exists);
    } else setValid(null);
  };

  const submit = async e => {
    e.preventDefault();
    if (valid === false) return alert("이미 사용 중인 아이디입니다.");
    await register(form);
    alert("회원가입 완료! 로그인 해주세요.");
    nav("/login");
  };

  return (
    <div style={{paddingTop:50}}>
      <div style={{ borderTop: '7px solid #012d5e' }}>
        <div className="register-logo">
          <div className="register-logo-inner">
            <div style={{ width: 128, padding: '20px 0' }}>
              <Link to="/">
                <img style={{ width: '100%' }} src="/img/register-logo.png" alt=""></img>
              </Link>
            </div>
          </div>
        </div>
        <div className="register-title">
          <h3 style={{ fontSize: 18, marginBottom: 0, fontWeight: 'bold' }}>가입 정보 입력</h3>
        </div>

        <form style={{ margin: '0 auto', marginTop: 50, border: 0 }} onSubmit={submit} className="card card-body">
          <div style={{maxWidth:640, margin:'0 auto'}}>
            <div className="mb-3">
              <label className="form-label">아이디</label>
              <input
                required
                className={`form-control ${valid === false ? "is-invalid" : ""}`}
                value={form.username}
                onChange={e => handleUsername(e.target.value)}
              />
              {valid === false && <div className="invalid-feedback">이미 사용 중입니다.</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">비밀번호</label>
              <input
                type="password"
                required
                className="form-control"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <div className="row g-2 mb-3">
              <div className="col">
                <label className="form-label">이름</label>
                <input
                  className="form-control"
                  value={form.first_name}
                  onChange={e => setForm({ ...form, first_name: e.target.value })}
                />
              </div>
              <div className="col">
                <label className="form-label">성</label>
                <input
                  className="form-control"
                  value={form.last_name}
                  onChange={e => setForm({ ...form, last_name: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">이메일</label>
              <input
                type="email"
                className="form-control"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div style={{ width: '100%', borderTop: '1px solid #ddd', textAlign: 'center', marginTop:50 }}>
            <div style={{ margin: '0 auto', width: 400, padding: '25px 20px 0 20px' }}>
              <button style={{ backgroundColor: 'rgb(0, 108, 164)', border: 0, padding: '10px 0' }} className="btn btn-success w-100">가입하기</button>
              <p style={{ textDecoration: 'underline', color: '#006ca4', fontSize: 14, fontWeight: 600, cursor: 'pointer', marginTop: 50 }} className="login-link" onClick={() => navigate('/login')}>로그인 페이지로 이동</p>
            </div>
            <p style={{ marginBottom: 0, fontSize: 11, color: '#666' }}>COPYRIGHT © HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.</p>
          </div>
        </form>

      </div>
    </div>
  );
}
