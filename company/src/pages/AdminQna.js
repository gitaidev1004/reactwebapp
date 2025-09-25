import React, { useEffect, useState } from 'react';
import { getQuestions } from '../api';
import { useNavigate, Link } from 'react-router-dom';
import { getUserInfo } from "../auth";

function AdminQna() {
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const currentUser = getUserInfo();

    useEffect(() => {
        getQuestions(1).then(data => {
            setQuestions(data.results);  // 여기서 results만 꺼내서 저장
        });
    }, []);

    useEffect(() => {
        fetchPage(page);
    }, [page]);

    const fetchPage = async (pageNumber) => {
        try {
            const res = await getQuestions(pageNumber); // API에 page 넘기기
            setQuestions(res.results || []);
            setCount(Math.ceil(res.count / 10));
        } catch (err) {
            console.error("❌ 질문 목록 불러오기 실패:", err);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= count) {
            setPage(newPage);
        }
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0');  // 월은 0부터 시작
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }





    return (
        <div style={{ width: '100%', maxWidth: 1448, margin: '0 auto', padding: '20px', paddingTop: 100 }}>
            <h2 style={{ fontWeight: 'bold', marginTop: 30 }}>관리자</h2>
            <p style={{ color: 'rgba(33, 37, 41, 0.75)', marginTop: 30, marginBottom: 0 }}>{currentUser?.username}</p>
            <p style={{ color: 'rgba(33, 37, 41, 0.75)' }}>{currentUser?.email}</p>
            <div style={{ marginTop: 30, display: 'flex' }}>
                <nav style={{ padding: '10px 0', width: '20%' }}>
                    <Link style={{ display: 'block', color: 'rgba(33, 37, 41, 0.75)', marginBottom: 5 }} to="/adminusers">회원관리</Link>
                    <Link style={{ display: 'block', color: '#000', fontWeight: 'bold', marginBottom: 5 }} to="/adminqna">문의관리</Link>
                    <Link style={{ display: 'block', color: 'rgba(33, 37, 41, 0.75)', marginBottom: 5 }} to="/adminproducts">상품관리</Link>
                    <Link style={{ display: 'block', color: 'rgba(33, 37, 41, 0.75)', marginBottom: 5 }} to="/admindataroom">자료실</Link>
                    <Link style={{ display: 'block', color: 'rgba(33, 37, 41, 0.75)' }} to="/adminnotice">공지사항</Link>
                </nav>

                <div style={{ width: '100%', padding: '10px 0', borderLeft: '1px solid #e5e5e5' }}>
                    <p style={{ paddingLeft: 20, paddingBottom: 10, marginBottom: 0, width: '100%', borderBottom: '1px solid #e5e5e5', fontWeight: 'bold' }}>문의관리</p>
                    <div style={{ marginTop: 60, padding: 20 }}>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>아이디</th>
                                    <th>제목</th>
                                    <th>날짜</th>
                                    <th>상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map(q => (
                                    <tr key={q.id}>
                                        <td style={{ width: '10%' }}>{q.id}</td>
                                        <td style={{ width: '15%' }}>{q.author_username}</td>
                                        <td style={{ width: '40%' }}><a style={{ color: '#000', fontWeight: 'bold' }} href={`/questions/${q.id}`}>{q.title}</a></td>
                                        <td style={{ width: '20%' }}>{formatDate(q.created_at)}</td>
                                        <td style={{ width: '25%' }}>
                                            {q.is_answered ? '✅ 답변 완료' : '⏳ 미답변'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* 페이지네이션 */}
                        <div style={{ textAlign: 'center', marginTop: 20, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
                            {/* 이전 버튼 */}
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
                                style={{
                                    padding: '6px 12px',
                                    background: 'none',
                                    color: 'black',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: page === 1 ? 'not-allowed' : 'pointer',
                                    opacity: page === 1 ? 0.5 : 1,
                                }}
                            >
                                이전
                            </button>

                            {/* 페이지 번호 버튼들 */}
                            {[...Array(count)].map((_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        style={{
                                            padding: '6px 13px',
                                            border: '0',
                                            borderRadius: '50%',
                                            backgroundColor: page === pageNum ? '#000' : 'white',
                                            color: page === pageNum ? 'white' : '#333',
                                            fontWeight: page === pageNum ? 'bold' : 'normal',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}

                            {/* 다음 버튼 */}
                            <button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === count}
                                style={{
                                    padding: '6px 12px',
                                    color: 'black',
                                    background: 'none',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: page === count ? 'not-allowed' : 'pointer',
                                    opacity: page === count ? 0.5 : 1,
                                }}
                            >
                                다음
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminQna;