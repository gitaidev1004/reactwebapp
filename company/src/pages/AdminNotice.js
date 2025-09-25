import React, { useEffect, useState } from "react";
import { getNotices, deleteNotice } from "../api";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getUserInfo } from "../auth"; // ✅ 추가

function AdminNotice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const currentUser = getUserInfo(); // ✅ 사용자 정보 가져오기

  useEffect(() => {
    async function fetchData() {
      const data = await getNotices(page);
      console.log("공지사항:", data);

      if (Array.isArray(data.results)) {
        setNotices(data.results);
        setTotalPages(Math.ceil(data.count / 10));  // 🔥 총 페이지 수 계산
      } else {
        setNotices([]);
      }
    }
    fetchData();
  }, [page]);

  const handleDelete = async (noticeId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await deleteNotice(noticeId);
      // 목록 갱신
      const data = await getNotices(page);
      setNotices(data.results || []);
      alert("삭제되었습니다.");
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  return (
    <>
      <div style={{ width: '100%', maxWidth: 1448, margin: '0 auto', padding: '20px', paddingTop: 100 }}>
        {/* ✅ 관리자일 때만 글쓰기 버튼 표시 
            {currentUser?.is_staff && (
              <Link to="/create" className="btn btn-dark mb-3">글쓰기</Link>
            )} */}
        <h2 style={{ fontWeight: 'bold', marginTop: 30 }}>관리자</h2>
        <p style={{ color: 'rgba(33, 37, 41, 0.75)', marginTop: 30, marginBottom: 0 }}>{currentUser?.username}</p>
        <p style={{ color: 'rgba(33, 37, 41, 0.75)' }}>{currentUser?.email}</p>

        <div style={{ marginTop: 30, display: 'flex' }}>
          <nav style={{ padding: '10px 0', width: '20%' }}>
            <Link style={{ display: 'block', color: 'rgba(33, 37, 41, 0.75)', marginBottom: 5 }} to="/adminusers">회원관리</Link>
            <Link style={{ display: 'block', color: 'rgba(33, 37, 41, 0.75)', marginBottom: 5 }} to="/adminqna">문의관리</Link>
            <Link style={{ display: 'block', color: 'rgba(33, 37, 41, 0.75)', marginBottom: 5 }} to="/adminproducts">상품관리</Link>
            <Link style={{ display: 'block', color: 'rgba(33, 37, 41, 0.75)', marginBottom: 5 }} to="/admindataroom">자료실</Link>
            <Link style={{ display: 'block', color: '#000', fontWeight: 'bold' }} to="/adminnotice">공지사항</Link>
          </nav>


          <div style={{ width: '100%', padding: '10px 0', borderLeft: '1px solid #e5e5e5' }}>
            <p style={{ paddingLeft: 20, paddingBottom: 10, marginBottom: 0, width: '100%', borderBottom: '1px solid #e5e5e5', fontWeight: 'bold' }}>공지사항</p>
            <Link to="/notice/create" style={{ textAlign: 'center', fontSize: 13, margin: 20, maxWidth: 60, display: "block", backgroundColor: '#000', padding: 5, color: '#fff' }}>글 등록</Link>
            <div style={{ padding: 20 }}>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {notices.map(notice => (
                    <tr key={notice.id}>
                      <td style={{ width: '10%', verticalAlign: 'middle' }}>{notice.id}</td>
                      <td style={{ width: '60%', verticalAlign: 'middle' }}><Link style={{ color: '#000', fontWeight: 'bold' }} to={`/notice/detail/${notice.id}`}>{notice.title}</Link></td>
                      <td style={{ width: '20%', verticalAlign: 'middle' }}>{formatDate(notice.resdate)}</td>
                      <td style={{ width: '10%', padding: 10, verticalAlign: 'middle' }}>
                        <Link
                          to={`/notice/edit/${notice.id}`}
                          style={{
                            display: 'block',
                            padding: '5px 10px',
                            backgroundColor: '#000000',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginBottom: 10,
                            width: 49.45
                          }}
                        >수정</Link>
                        <button
                          onClick={() => handleDelete(notice.id)}
                          style={{
                            padding: '5px 10px',
                            backgroundColor: 'red',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ textAlign: 'center', marginTop: 20, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <button
                  onClick={() => setPage(prev => Math.max(prev - 1, 1))}
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

                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      style={{
                        padding: '6px 13px',
                        border: 'none',
                        borderRadius: '50%',
                        backgroundColor: page === pageNum ? '#000' : 'white',
                        color: page === pageNum ? 'white' : '#000',
                        fontWeight: page === pageNum ? 'bold' : 'normal',
                        cursor: 'pointer'
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages}
                  style={{
                    padding: '6px 12px',
                    background: 'none',
                    color: 'black',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: page === totalPages ? 'not-allowed' : 'pointer',
                    opacity: page === totalPages ? 0.5 : 1,
                  }}
                >
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNotice;
