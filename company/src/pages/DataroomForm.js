import React, { useState, useEffect } from "react";
import {
  createDataroom,
  getDataroom,
  updateDataroom,
  deleteDataroom,
} from "../api";
import { useNavigate, useParams } from "react-router-dom";

export default function DataroomForm() {
  const [form, setForm] = useState({ title: "", file: null, thumbnail: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDataroom(id).then((data) =>
        setForm({ title: data.title, file: null, thumbnail: null })
      );
    }
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", form.title);
    if (form.file) formData.append("file", form.file);
    if (form.thumbnail) formData.append("thumbnail", form.thumbnail);

    try {
      if (id) {
        await updateDataroom(id, formData);
      } else {
        await createDataroom(formData);
      }
      navigate("/dataroom");
    } catch (err) {
      setError("저장 중 문제가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
  if (window.confirm("정말 삭제하시겠습니까?")) {
    try {
      await deleteDataroom(Number(id));  // ⬅ 이 줄만 바꿔주면 됩니다!
      navigate("/dataroom");
    } catch (err) {
      setError("삭제 중 문제가 발생했습니다.");
    }
  }
};

  return (
    <div style={{paddingTop:150}} className="container mt-4">
      <h3 style={{fontWeight:'bold', fontSize:56, marginBottom:50, textAlign:"center"}}>{id ? "자료 수정" : "자료 등록"}</h3>
      <form onSubmit={submit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">제목</label>
          <input
            type="text"
            className="form-control"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">파일</label>
          <input
            type="file"
            className="form-control"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
          />
          {form.file && (
            <div className="form-text mt-1">선택된 파일: {form.file.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">썸네일 이미지</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setForm({ ...form, thumbnail: e.target.files[0] })}
          />
          {form.thumbnail && (
            <div className="form-text mt-1">
              선택된 썸네일: {form.thumbnail.name}
              <br />
              <img
                src={URL.createObjectURL(form.thumbnail)}
                alt="썸네일 미리보기"
                style={{
                  width: "150px",
                  marginTop: "10px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
          )}
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="d-flex">
          <button className="btn btn-dark" disabled={loading}>
            {loading ? "저장 중..." : "저장"}
          </button>
        </div>
      </form>
    </div>
  );
}
