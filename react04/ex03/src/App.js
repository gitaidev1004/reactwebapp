import React from "react";

// 전역 스타일(Global + 폰트) 불러오기
import "./styles/global.css";
import "./styles/fonts.css";

// 개별 컴포넌트
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      {/* 뉴스 헤더 */}
      <Header title="오늘의 뉴스" />

      {/* 기사 리스트 */}
      <main className="news-container">
        <ArticleList />
      </main>
    </div>
  );
}
export default App;