import React, { useEffect, useState } from "react";
import { getNotices } from "../api";
import { useNavigate } from "react-router-dom";

export default function NoticeList() {
  const [notices, setNotices] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotices(page);
  }, [page]);

  const fetchNotices = (currentPage) => {
    getNotices(currentPage, 10).then((res) => {
      const content = Array.isArray(res.data?.content) ? res.data.content : [];
      const total = res.data?.page?.totalPages ?? 0;
      setNotices(content);
      setTotalPages(total);
    });
  };

  return (
    <div className="container" style={{ paddingTop: 150, paddingBottom: 100 }}>
      <h2
        style={{
          fontWeight: "bold",
          padding: "15px 0",
          borderBottom: "1px solid #000",
          margin: 0,
          paddingBottom: 30,
          width: "100%",
          textAlign: "center",
        }}
      >
        NOTICE
      </h2>

      <ul className="list-group" style={{ width: "100%" }}>
        {notices.map((notice) => (
          <li
            key={notice.id}
            style={{
              width: "100%",
              borderBottom: "1px solid #DEDEDE",
              cursor: "pointer",
              padding: "20px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => navigate(`/notices/${notice.id}`)}
          >
            <span
              style={{ fontSize: 14, width: "10%", textAlign: "center" }}
            >
              {notice.id}
            </span>
            <span
              className="notice-title"
              style={{ fontSize: 14, width: "80%", color: "#000" }}
            >
              {notice.title}
            </span>
            <span className="text-muted small" style={{ textAlign: "right" }}>
              {notice.createdAt?.slice(0, 10)}
            </span>
          </li>
        ))}
      </ul>

      {/* 페이지네이션 */}
      <nav className="d-flex justify-content-center mt-3">
        <ul className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <li
              key={i}
              className={`page-item ${page === i ? "active" : ""}`}
            >
              <button className="page-link" onClick={() => setPage(i)}>
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
