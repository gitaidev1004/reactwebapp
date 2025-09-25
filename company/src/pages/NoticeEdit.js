import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNotice, updateNotice } from "../api";

export default function NoticeEdit() {
  const { id } = useParams(); // URL에서 공지사항 ID 추출
  const nav = useNavigate();

  const [form, setForm] = useState({ title: "", content: "" });

useEffect(() => {
  if (id) {
    getNotice(id).then(data => {
      console.log("🔍 getNotice 응답", data);
      if (data.notice) {
        setForm({
          title: data.notice.title ?? "",
          content: data.notice.content ?? ""
        });
      }
    });
  }
}, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await updateNotice(id, form);
    alert("공지사항이 수정되었습니다.");
    nav("/notice");
  };

  return (
    <div style={{paddingTop:150}} className="container mt-4 col-md-6">
      <h3 style={{fontWeight:'bold',textAlign:'center', fontSize:56, marginBottom:50}}>공지사항 수정</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">제목</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">내용</label>
          <textarea
            name="content"
            className="form-control"
            rows="8"
            value={form.content}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-dark">수정 완료</button>
      </form>
    </div>
  );
}
