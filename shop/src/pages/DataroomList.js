import { useEffect, useState } from "react";
import { fetchUserDatarooms  } from "../api";
import { Link } from "react-router-dom";

function DataroomList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const loadDatarooms = async () => {
    try {
      const res = await fetchUserDatarooms (page); // ✅ page 전달
      setItems(res.data.content || []);
      setTotalPages(res.data.page?.totalPages || 0);
      console.log("전체 응답", res.data);
      console.log("✅ content:", res.data.content);
      console.log("✅ totalPages:", res.data.totalPages);
    } catch (err) {
      console.error("자료 불러오기 실패", err);
      alert("자료를 불러오는 데 실패했습니다.");
    }
  };

  useEffect(() => {
    loadDatarooms();
  }, [page]);

  return (
    <div className="container" style={{paddingTop:150, paddingBottom:100}}>
      <h2
        style={{
          textAlign:'center',
          fontWeight: "bold",
          padding: "15px 0",
          marginBottom: 30,
        }}
      >
        자료실
      </h2>

      <table
        className="table"
        style={{ width: "100%", fontSize: 14, verticalAlign: "middle" }}
      >
        <thead style={{ backgroundColor: "#000", color: "#fff" }}>
          <tr>
            <th style={{ width: "20%", textAlign: "center", backgroundColor: "#000", color: "#fff" }}>ID</th>
            <th style={{ width: "50%", textAlign: "center", backgroundColor: "#000", color: "#fff" }}>자료명</th>
            <th style={{ width: "30%", textAlign: "center", backgroundColor: "#000", color: "#fff" }}>다운로드</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">자료가 없습니다.</td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #DEDEDE" }}>
                <td style={{ textAlign: "center" }}>{item.id}</td>
                <td style={{ fontWeight: "bold", paddingLeft: 20 }}>{item.title}</td>
                <td style={{ textAlign: "center" }}>
                  {item.filename ? (
                    <a href={`http://localhost:8003/api/datarooms/download/${item.id}`}>
                      <img src="/img/download.PNG" alt="download" />
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* ✅ 페이지네이션 */}

        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item ${page === i ? "active" : ""}`}>
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

export default DataroomList;
