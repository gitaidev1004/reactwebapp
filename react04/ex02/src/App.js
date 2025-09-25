import React from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import DynamicButton from "./components/DynamicButton";
import ThemeToggle from "./components/ThemeToggle";
import ThemedBox from "./components/ThemedBox";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <h1>🎨 React 컬러 스타일링 예제</h1>
        <p>다양한 컬러 스타일링 기법과 다크/라이트 모드를 학습합니다.</p>
        <section>
          <h2>(1) 기본 CSS & 인라인 스타일</h2>
          <Button />
        </section>
        <section>
          <h2>(2) CSS 변수 활용</h2>
          <Card />
        </section>
        <section>
          <h2>(3) styled-components 동적 컬러</h2>
          <DynamicButton />
        </section>
        <section>
          <h2>(4) 다크 / 라이트 모드</h2>
          <ThemeToggle />
          <ThemedBox />
        </section>
      </div>
    </ThemeProvider>
  );
}
export default App;