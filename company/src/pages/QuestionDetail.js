import React, { useEffect, useState } from 'react';
import { getQuestion, createAnswer, getProfile, deleteAnswer, updateAnswer } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [content, setContent] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [editedContent, setEditedContent] = useState('');

useEffect(() => {
  getProfile()
    .then(profile => {
      console.log("현재 로그인한 사용자 정보:", profile); // ✅ 콘솔 출력
      setIsAdmin(profile.is_staff); // 관리자 여부 저장
    })
    .catch(() => {
      console.log("프로필 정보를 불러오지 못했습니다.");
      setIsAdmin(false);
    });

  getQuestion(id)
    .then(res => setQuestion(res.data))
    .catch(() => alert("질문 정보를 불러오지 못했습니다."));
}, [id]);

  const handleAnswer = async () => {
    try {
      await createAnswer({ content, question: Number(id) }, token);
      setContent('');
      const updated = await getQuestion(id);
      setQuestion(updated.data);
      navigate("/adminqna");
    } catch {
      alert("답변 등록에 실패했습니다.");
    }
  };

  const handleDelete = async (answerId) => {
  if (window.confirm("정말 삭제하시겠습니까?")) {
    try {
      await deleteAnswer(answerId, token);
      const updated = await getQuestion(id);
      setQuestion(updated.data);
    } catch (err) {
      alert("삭제 실패");
    }
  }
};

const handleUpdate = async (answerId) => {
  try {
    await updateAnswer(answerId, editedContent, token);
    const updated = await getQuestion(id);
    setQuestion(updated.data);
    setEditingAnswerId(null);
  } catch (err) {
    alert("수정 실패");
  }
};

  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

  if (!question) return <div style={{ textAlign: 'center', padding: '50px' }}>로딩 중...</div>;

  return (
  <>
    <h2 style={{ textAlign: 'center', marginTop: 170, fontSize: 56, fontWeight: 'bold', marginBottom: 50 }}>1:1문의</h2>
    <div style={{ backgroundColor: '#eee', maxWidth: 800, margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#333', marginBottom: 100 }}>

      {/* 질문 영역 */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '18px', marginBottom: 10 }}>
          <span style={{ fontSize: '26px', marginRight: 10 }}>😯</span>
          <strong>{question.is_answered ? '답변 완료' : '미답변'}</strong>
        </div>
        <h2 style={{ margin: '10px 0' }}>{question.title}</h2>
        <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', lineHeight: 1.6 }}>{question.content}</p>
        <p style={{ color: '#999', fontSize: '14px', marginTop: '10px' }}>{formatDate(question.created_at)}</p>
      </div>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ccc' }} />

      {/* 답변 영역 */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '18px', marginBottom: 10 }}>
          <span style={{ fontSize: '26px', marginRight: 10 }}>💬</span>
          <strong>답변</strong>
        </div>

        {question.answers && question.answers.length > 0 ? (
          question.answers.map(ans => (
            <div key={ans.id} style={{ marginBottom: '30px' }}>
              {editingAnswerId === ans.id ? (
                <>
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    rows={4}
                    style={{ width: '100%', padding: '10px', fontSize: '15px' }}
                  />
                  <div style={{ marginTop: '8px' }}>
                    <button
                      onClick={() => handleUpdate(ans.id)}
                      style={{ marginRight: 8, padding: '6px 12px' }}
                    >
                      저장
                    </button>
                    <button
                      onClick={() => setEditingAnswerId(null)}
                      style={{ padding: '6px 12px' }}
                    >
                      취소
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p style={{ whiteSpace: 'pre-wrap', fontSize: '16px', lineHeight: 1.6 }}>{ans.content}</p>
                  <p style={{ color: '#999', fontSize: '14px', marginTop: '5px' }}>{formatDate(ans.created_at)}</p>

                  {isAdmin && (
                    <div style={{ marginTop: '6px' }}>
                      <button
                        onClick={() => {
                          setEditingAnswerId(ans.id);
                          setEditedContent(ans.content);
                        }}
                        style={{ marginRight: 8, padding: '4px 10px', border: '1px solid #000', borderRadius:4 }}
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDelete(ans.id)}
                        style={{ padding: '4px 10px', backgroundColor: '#f44336', border: '1px solid #f44336', color: '#fff', borderRadius:4}}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          ))
        ) : (
          <p style={{ color: '#777', fontSize: '15px' }}>아직 등록된 답변이 없습니다.</p>
        )}
      </div>

      {isAdmin && (
        <>
          <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ccc' }} />
          <div>
            <h3 style={{ marginBottom: '10px', fontSize: '18px' }}>✍️ 답변 작성</h3>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              placeholder="내용을 입력하세요..."
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '15px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
            <button
              onClick={handleAnswer}
              style={{
                marginTop: '12px',
                backgroundColor: '#000',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              답변 등록
            </button>
          </div>
        </>
      )}
    </div>
  </>
);

}

export default QuestionDetail;
