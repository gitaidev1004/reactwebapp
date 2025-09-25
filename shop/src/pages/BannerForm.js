import React, { useState } from 'react';
import axios from 'axios';

export default function BannerForm() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleGenerateFromPopular = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8003/api/banner/popular/generate', {}, {
        withCredentials: true
      });
      setImageUrl(res.data); // 🔥 이미지 URL만 반환
      setSaved(false);
    } catch (err) {
      console.error("❌ 배너 생성 실패:", err);
      alert("배너 생성 실패");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post('http://localhost:8003/api/banner/save', {
        text: "인기상품 조합 배너", // 📌 고정 문구
        imagePath: imageUrl
      }, { withCredentials: true });
      alert("✅ 배너가 저장되었습니다.");
      setSaved(true);
    } catch (err) {
      alert("❌ 저장 실패");
    }
  };

  return (
    <div className="container none" style={{ paddingBottom: 100 }}>
      <h2 className="mb-4" style={{ fontWeight: 'bold' }}>인기상품 조합 배너 생성</h2>

      <button className="btn btn-primary mb-4" onClick={handleGenerateFromPopular} disabled={loading}>
        {loading ? '생성 중...' : '배너 생성'}
      </button>

      {imageUrl && (
        <>
          <h5 className="mt-4">생성된 배너</h5>
          <img
            src={imageUrl}
            alt="배너 미리보기"
            style={{ width: '100%', maxWidth: '960px', borderRadius: 10 }}
          />
          <p className="mt-3 text-muted">Compagno 인기상품 기반 배너</p>
          {!saved && (
            <button className="btn btn-success" onClick={handleSave}>
              배너 저장
            </button>
          )}
        </>
      )}
    </div>
  );
}
