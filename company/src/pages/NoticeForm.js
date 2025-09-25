import React, { useState, useEffect } from "react";
import { createNotice, getNotice, updateNotice } from "../api";
import { useNavigate, useParams } from "react-router-dom";

function NoticeForm() {
  const [form, setForm] = useState({ title: "", content: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getNotice(id).then(data => {
        setForm({
          title: data.title ?? "",
          content: data.content ?? ""
        });
      });
    }
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (id) {
      await updateNotice(id, form);
      alert("공지사항이 수정되었습니다.");
    } else {
      await createNotice(form);
      alert("공지사항이 등록되었습니다.");
    }
    navigate("/adminnotice");
  };

  return (
    <div style={{ paddingTop: 150 }} className="container mt-4 col-md-6">
      <h3 style={{fontWeight:'bold', textAlign: 'center', fontSize: 56, marginBottom: 50 }}>
        {id ? "공지사항 수정" : "공지사항 등록"}
      </h3>
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

        <button type="submit" className="btn btn-dark">
          {id ? "수정 완료" : "등록 완료"}
        </button>
      </form>
    </div>
  );
}

export default NoticeForm;
