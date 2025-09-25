// src/pages/Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, checkUsername } from "../api";
import "./sub.css";   // CSS만 가져오면 됩니다

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirm: "",
    email: "",
    first_name: "",
    last_name: "",
    nickname: ""
  });
  const [valid, setValid] = useState(null);
  const [agreeAll, setAgreeAll] = useState(false);
  const [agreeUse, setAgreeUse] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleUsername = async (username) => {
    setForm({ ...form, username });
    if (username.length >= 3) {
      const { exists } = await checkUsername(username);
      setValid(!exists);
    } else {
      setValid(null);
    }
  };

  const handleAgreeAll = (checked) => {
    setAgreeAll(checked);
    setAgreeUse(checked);
    setAgreePolicy(checked);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (valid === false) {
      return alert("이미 사용 중인 아이디입니다.");
    }
    if (form.password !== form.confirm) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    if (!agreeUse || !agreePolicy) {
      return alert("약관에 모두 동의해야 가입이 가능합니다.");
    }
    await register(form);
    alert("회원가입 완료! 로그인 해주세요.");
    nav("/login");
  };

  return (
    <div className="register-container container py-4 col-md-6" style={{marginTop:100}}>
      <h2
        className="text-center mb-4"
        style={{ fontWeight: "bold", fontSize: "40px", letterSpacing: "5px" }}
      >
        회원가입
      </h2>
      <form onSubmit={submit} className="register-form card card-body">
        {/* 사이트 이용 정보 */}
        <fieldset className="register-section mb-4">
          <legend>사이트 이용정보 입력</legend>

          <label className="form-label">아이디 (필수)</label>
          <input
            className={`form-control ${valid === false ? "is-invalid" : ""}`}
            required
            value={form.username}
            onChange={(e) => handleUsername(e.target.value)}
          />
          {valid === false && (
            <div className="invalid-feedback">이미 사용 중입니다.</div>
          )}

          <label className="form-label mt-3">비밀번호 (필수)</label>
          <input
            type="password"
            className="form-control"
            required
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <label className="form-label mt-3">비밀번호 확인 (필수)</label>
          <input
            type="password"
            className="form-control"
            required
            value={form.confirm}
            onChange={(e) =>
              setForm({ ...form, confirm: e.target.value })
            }
          />
        </fieldset>

        {/* 개인정보 입력 */}
        <fieldset className="register-section mb-4">
          <legend>개인정보 입력</legend>

          <label className="form-label">이름 (필수)</label>
          <input
            className="form-control"
            value={form.first_name}
            onChange={(e) =>
              setForm({ ...form, first_name: e.target.value })
            }
          />

          <label className="form-label mt-3">닉네임 (필수)</label>
          <input
            className="form-control"
            value={form.nickname}
            onChange={(e) =>
              setForm({ ...form, nickname: e.target.value })
            }
          />

          <label className="form-label mt-3">E-mail (필수)</label>
          <input
            type="email"
            className="form-control"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </fieldset>

        {/* 약관 동의 */}
        <fieldset className="register-agree mb-4">
          <legend>약관 동의</legend>

          {/* 이용약관 */}
          <div className="register-terms mb-3">
            <label className="form-label fw-bold">이용약관</label>
            <textarea
              className="form-control"
              rows={6}
              readOnly
              value={`제1조 (목적)\n\n이 약관은 (주)피앤엘 회사(전자거래 사업자)가 운영하는 니즈 사이트 몰(이하 '몰')에서 제공하는 인터넷 관련 서비스(이하 '서비스'라 한다)를 이용함에 있어 사이버몰 이용자와 회사의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.\n\n* PC통신 등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.`}
            />
            <div className="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreeUse"
                checked={agreeUse}
                onChange={(e) => setAgreeUse(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="agreeUse">
                이용약관 내용에 동의합니다.
              </label>
            </div>
          </div>

          {/* 개인정보처리방침 */}
          <div className="register-terms mb-3">
            <label className="form-label fw-bold">회원 관리 정책</label>
            <textarea
              className="form-control"
              rows={6}
              readOnly
              value={`(주)피앤엘 니즈는 이용자의 개인정보를 매우 중요하게 생각하며, 관련 법령에 의거한 개인정보 처리방침을 제정하고 있습니다.\n\n제1조 개인정보의 수집항목 및 이용목적\n① 니즈 홈페이지의 모든 콘텐츠는 별도의 회원가입 절차 없이 자유롭게 접근할 수 있습니다. 그러나 맞춤형 서비스 제공을 위한 일부 페이지에서는 다음의 정보를 제공받아야 하며, 동의 없이는 수집하지 않습니다.`}
            />
            <div className="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreePolicy"
                checked={agreePolicy}
                onChange={(e) => setAgreePolicy(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="agreePolicy">
                회원 관리 정책 내용에 동의합니다.
              </label>
            </div>
          </div>

          {/* 전체 동의 */}
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeAll"
              checked={agreeAll}
              onChange={(e) => handleAgreeAll(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="agreeAll">
              전체 동의
            </label>
          </div>
        </fieldset>

        {/* 버튼 */}
        <div className="d-flex justify-content-center gap-3">
          <button type="submit" className="btn btn-dark px-4">
            회원가입
          </button>
          <button
            type="button"
            className="btn btn-secondary px-4"
            onClick={() => nav("/")}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
