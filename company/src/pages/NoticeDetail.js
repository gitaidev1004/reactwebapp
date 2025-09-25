import React, { useEffect, useState } from "react";
import { getNotice, deleteNotice } from "../api";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getUserInfo } from "../auth";
import "./sub.css";
function NoticeDetail() {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const navigate = useNavigate();
  const user = getUserInfo();

  useEffect(() => {
    async function fetchData() {
      const data = await getNotice(id); // ✅ 백엔드에서 { notice, prev, next } 구조로 응답
      setNotice(data.notice);
      setPrev(data.prev);
      setNext(data.next);
    }
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await deleteNotice(id);
      navigate("/notice");
    }
  };

  if (!notice) return <div className="container py-5">로딩 중...</div>;

  return (
    <div style={{paddingTop:76}}>
      <div className="notice-list_img" style={{ height: 484 }}>
        <div style={{ verticalAlign: "middle" }} className="notice_img-text">
          <h1 style={{ fontSize: 80 }}>공지사항</h1>
          <p>새로운 한샘의 시작. 키친바흐 프리미엄의 새로운 기준이 되다.</p>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          padding: "15px 0",
          borderBottom: "1px solid #e5e5e5",
          margin: "0 auto",
          marginBottom:50
        }}
      >
        <nav className="notice_nav" style={{ maxWidth: 1448, margin: "0 auto" }}>
          <ul style={{ marginBottom: 0, paddingLeft: 12 }}>
            <li>
              <Link to="/" style={{ color: "#757575", textDecoration: "none" }}>
                홈
              </Link>
            </li>
            <li style={{marginLeft:30}}>
              <Link to="/notice" style={{ color: "#757575", textDecoration: "none" }}>
                공지사항
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container py-0">
        {/* 제목 영역 */}

        <h4 className=" pb-2 mt-4" style={{ borderTop: "1px solid #000", height: 20 }}></h4>

        {/* 상단 요약 정보 */}
        <div className="d-flex justify-content-between  pb-2 mb-3"  >
          <div>

            <span className="text-muted">[{notice.channel || "공지"}] {notice.title}</span>
          </div>

          <div className="text-muted">{new Date(notice.resdate).toLocaleString()}</div>
        </div>

        {/* 본문 내용 */}
        <div className="mb-4" style={{ whiteSpace: 'pre-wrap' }}>
          {notice.content}
        </div>
        <hr style={{ color: "black", margin: "0rem 0", borderTop: "1px solid #000" }} />
        {/* 이전글/다음글 */}
        <table
          className="table"  // ✅ border-top 제거!
          style={{ borderCollapse: "separate", borderSpacing: 0, border: 0 }}
        >
          <tbody>
            <tr style={{ borderBottom: "1px solid #dee2e6" }}>
              <th className="text-muted w-25">이전글</th>
              <td>
                {prev ? (
                  <Link to={`/notice/detail/${prev.id}`} className="text-dark" style={{ textDecoration: "none" }}>{prev.title}</Link>
                ) : (
                  <span className="text-muted">이전글이 없습니다.</span>
                )}
              </td>
            </tr>
            <tr>
              <th className="text-muted" >다음글</th>
              <td>
                {next ? (
                  <Link to={`/notice/detail/${next.id}`} className="text-dark" style={{ textDecoration: "none" }}>{next.title}</Link>
                ) : (
                  <span className="text-muted">다음글이 없습니다.</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        {/* 버튼 영역 */}
        <div className="d-flex justify-content-between" style={{ margin: '100px 0' }}>
          {user?.is_staff && (
            <div>
              <Link to={`/notice/edit/${notice.id}`} className="btn btn-outline-warning me-2">수정</Link>
              <button onClick={handleDelete} className="btn btn-outline-danger">삭제</button>
            </div>
          )}
          <div className="text-center">
            <Link to="/notice" className="btn btn-outline-dark rounded-pill px-4">목록</Link>
          </div>
        </div>
      </div>
      </div>
  );
}

export default NoticeDetail;
