import React, { useEffect, useState } from "react";
import { getNotices } from "../api";
import { Link } from "react-router-dom";
import { getUserInfo } from "../auth";
import "./sub.css";

function NoticeList() {
  const [notices, setNotices] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const user = getUserInfo();

useEffect(() => {
  async function fetchData() {
    const data = await getNotices(page);
    
    if (Array.isArray(data.results)) {
      setNotices(data.results);
      setTotalCount(data.count || 0); // ✅ 총 개수 저장
      setTotalPages(Math.ceil((data.count || 0) / 10)); // ✅ 총 페이지 계산
    } else if (Array.isArray(data.notices)) {
      setNotices(data.notices);
      setTotalCount(data.total_count || 0);
      setTotalPages(Math.ceil((data.total_count || 0) / 10));
    } else if (Array.isArray(data)) {
      setNotices(data);
      setTotalCount(data.length);
      setTotalPages(1);
    }
  }
  fetchData();
}, [page]);

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div style={{ paddingTop: 76 }}>
      {/* 상단 배너 영역 */}
      <div style={{ margin: "0 auto", height: 484, width: "100%" }}>
        <div className="notice-list_img">
          <div style={{ verticalAlign: "middle" }} className="notice_img-text">
            <h1 style={{ fontSize: 80 }}>공지사항</h1>
            <p>새로운 한샘의 시작. 키친바흐 프리미엄의 새로운 기준이 되다.</p>
          </div>
        </div>
      </div>

      {/* 홈 > 공지사항 네비 */}
      <div
        style={{
          width: "100%",
          padding: "15px 0",
          borderBottom: "1px solid #e5e5e5",
          margin: "0 auto",
        }}
      >
        <nav className="notice_nav" style={{ maxWidth: 1448, margin: "0 auto" }}>
          <ul style={{ marginBottom: 0, paddingLeft:12 }}>
            <li>
              <Link to="/" style={{ color: "#757575", textDecoration: "none" }}>
                홈
              </Link>
            </li>
            <li style={{ marginLeft: 30, color: "#000" }}>공지사항</li>
          </ul>
        </nav>
      </div>

      {/* 공지 테이블 영역 */}

      <div className="container mt-5" style={{ maxWidth: 1448 }}>
        <div className="mb-2" style={{ width: "100%", display: "flex" }}>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: "normal",
              width: "80%",
              paddingTop: 15,
            }}
          >
            총 <strong style={{fontSize:20}}>{totalCount}</strong>개의 공지사항이 있습니다.
          </h4>
        </div>

        <table className="notice-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>판매채널</th>
              <th className="text-start">제목</th>
              <th>공지일</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((n) => (
              <tr key={n.id}>
                <td style={{ width: "10%" }}>{n.id}</td>
                <td style={{ width: "20%" }}>{n.channel || "한샘몰"}</td>
                <td className="text-start">
                  <Link to={`/notice/detail/${n.id}`} className="text-link">
                    {n.title}
                  </Link>
                </td>
                <td style={{ width: "20%" }}>
                  {new Date(n.resdate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ 커스텀 페이지네이션 */}
        <div
          style={{
            marginTop: 30,
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            style={{
              padding: '6px 12px',
              color: 'black',
              border: 'none',
              background:'none',
              borderRadius: '4px',
              cursor: page === 1 ? 'not-allowed' : 'pointer',
              opacity: page === 1 ? 0.5 : 1
            }}
          >
            이전
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                style={{
                  padding: '6px 13px',
                  margin: '0 2px',
                  border: 0,
                  borderRadius: '50%',
                  backgroundColor: pageNum === page ? '#000' : 'white',
                  color: pageNum === page ? 'white' : '#333',
                  cursor: 'pointer',
                  fontWeight: pageNum === page ? 'bold' : 'normal'
                }}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            style={{
              padding: '6px 12px',
              color: 'black',
              border: 'none',
              background:'none',
              borderRadius: '4px',
              cursor: page === totalPages ? 'not-allowed' : 'pointer',
              opacity: page === totalPages ? 0.5 : 1
            }}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoticeList;
