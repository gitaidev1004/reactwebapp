import React from "react";
import "./../styles/AppLayout.css";
const MediaQueryPatterns = () => {
  return (
    <div className="responsive-card">
      <h2>반응형 카드</h2>
      <p>폰트와 패딩은 clamp()와 rem 단위를 이용해 화면 크기에 맞게 조절됩니다.</p>
    </div>
  );
};
export default MediaQueryPatterns;