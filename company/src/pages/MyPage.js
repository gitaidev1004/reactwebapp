// src/pages/MyPage.jsx
import { useEffect, useState } from "react";
import { getProfile, getQuestions } from "../api";
import { Link } from "react-router-dom";

export default function MyPage() {
  const [me, setMe] = useState(null);
  const [myQuestions, setMyQuestions] = useState([]);

  useEffect(() => {
    getProfile().then(setMe);
    getQuestions().then(res => {
      // 내가 작성한 문의만 필터링 (백엔드에서 필터링되어 오면 생략 가능)
      setMyQuestions(res.results || []);
    });
  }, []);

  if (!me) return <p className="text-center mt-5">Loading…</p>;

  return (
    <div className="container" style={{paddingTop:150, paddingBottom:100}}>
      <h3 className="mb-3">마이페이지</h3>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <p><strong>아이디:</strong> {me.username}</p>
          <p><strong>이메일:</strong> {me.email}</p>
          <p><strong>이름:</strong> {me.last_name}{me.first_name}</p>
        </div>
      </div>

      <h4>내 문의 목록</h4>
      {myQuestions.length === 0 ? (
        <p>작성한 문의가 없습니다.</p>
      ) : (
        <ul className="list-group">
          {myQuestions.map(q => (
            <li key={q.id} className="list-group-item d-flex justify-content-between align-items-center">
              <Link to={`/questions/${q.id}`} style={{ textDecoration: 'none', color: '#000' }}>
                {q.title}
              </Link>
              <span>{q.is_answered ? '✅ 답변 완료' : '⏳ 미답변'}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
