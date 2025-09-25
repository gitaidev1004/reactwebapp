import React from "react";
import "./../styles/AppLayout.css";
const FlexboxPatterns = () => {
  return (
    <div className="flexbox-container">
      {/* 중앙 정렬 */}
      <div className="center-box">중앙정렬</div>
      {/* 네비게이션 */}
      <nav className="nav">
        <h3>로고</h3>
        <div className="menu">
          <span>홈</span>
          <span>서비스</span>
          <span>연락처</span>
        </div>
      </nav>
      {/* 카드 그리드 */}
      <div className="cards">
        {[1, 2, 3, 4].map((card) => (
          <div className="card" key={card}>
            카드 {card}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FlexboxPatterns;