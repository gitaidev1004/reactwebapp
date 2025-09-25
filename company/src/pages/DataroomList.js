import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDatarooms } from "../api";
import { getUserInfo } from "../auth";
import "./sub.css";

export default function DataroomList() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const user = getUserInfo();

  useEffect(() => {
    getDatarooms().then((data) => {
      let list = Array.isArray(data) ? data : data.results || [];
      setItems(list);
      setFiltered(list); // 처음엔 전체 표시
    });
  }, []);

  const makeDownloadUrl = (filePath) => {
    if (!filePath) return null;
    return filePath.startsWith("http")
      ? filePath
      : `http://localhost:8003${filePath}`;
  };

  const handleSearch = () => {
    const keyword = searchTerm.trim().toLowerCase();
    if (!keyword) {
      setFiltered(items); // 비워두면 전체 표시
    } else {
      const result = items.filter(item =>
        item.title.toLowerCase().includes(keyword)
      );
      setFiltered(result);
    }
  };

  return (
    <div style={{ paddingTop: 76 }}>
      {/* 상단 배너 */}
      <div className="dataroom-list_img" style={{ height: 484 }}>
        <div className="notice_img-text">
          <h1 style={{ fontSize: 80 }}>자료실</h1>
          <p>새로운 한샘의 시작. 키친바흐 프리미엄의 새로운 기준이 되다.</p>
        </div>
      </div>

      {/* 네비 */}
      <div style={{ width: "100%", padding: "15px 0", borderBottom: "1px solid #e5e5e5", marginBottom: 50 }}>
        <nav className="notice_nav" style={{ maxWidth: 1448, margin: "0 auto" }}>
          <ul style={{ marginBottom: 0, paddingLeft: 12 }}>
            <li><Link to="/" style={{ color: "#757575", textDecoration: "none" }}>홈</Link></li>
            <li style={{ marginLeft: 30, color: "#000" }}>자료실</li>
          </ul>
        </nav>
      </div>

      {/* 🔍 검색창 */}
      <div style={{ maxWidth: 500, marginLeft: 'auto', padding: '0 20px', marginRight:50, marginBottom:10 }}>
        <input
          type="text"
          placeholder="자료명 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '8px 12px',
            width: '250px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '8px 16px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          검색
        </button>
      </div>

      {/* 목록 */}
      <div style={{ maxWidth: 1448, margin: '0 auto' }}>
        <div style={{ width: "90%", margin: "0 auto", paddingBottom: "100px" }}>
          <div className="row">
            {filtered.length === 0 ? (
              <div className="col-12">자료가 없습니다.</div>
            ) : (
              filtered.map((item) => {
                const downloadUrl = makeDownloadUrl(item.file);
                const thumbnailUrl = item.thumbnail
                  ? makeDownloadUrl(item.thumbnail)
                  : "/default-thumbnail.png";

                return (
                  <div key={item.id} className="col-md-4 mb-4">
                    <div className="card h-100" style={{ overflow: "hidden" }}>
                      <img
                        src={thumbnailUrl}
                        className="card-img-top thumbnail-img"
                        alt="썸네일"
                        style={{ height: "280px", objectFit: "cover" }}
                      />
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <span className="card-title mb-0" style={{ fontSize: "1rem" }}>
                          {item.title}
                        </span>
                        <div className="d-flex gap-2">
                          {user?.is_staff && (
                            <a
                              href={`/dataroom/edit/${item.id}`}
                              className="btn btn-outline-secondary btn-sm"
                              style={{ padding: "0.25rem .5rem" }}
                            >
                              수정
                            </a>
                          )}
                          {downloadUrl && (
                            <a
                              href={downloadUrl}
                              download
                              title="다운로드"
                              className="btn p-0 border-0 bg-transparent"
                              style={{ lineHeight: 1 }}
                            >
                              <img
                                src="/img/down.png"
                                alt="다운로드"
                                style={{ width: "18px", height: "18px", marginTop: "5px" }}
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
