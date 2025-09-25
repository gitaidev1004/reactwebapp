import React from "react";
import "./App.css";
import TraditionalCSS from "./components/TraditionalCSS";
import CSSModules from "./components/CSSModules";
import InlineStyle from "./components/InlineStyle";
import StyledComponents from "./components/StyledComponents";
import CSSVariables from "./components/CSSVariables";
import DynamicClass from "./components/DynamicClass";
import SassExample from "./components/SassExample";
import TailwindExample from "./components/TailwindExample";
import ThemeExample from "./components/ThemeExample";
function App() {
  return (
    <div className="app-container">
      <h1>React Styling 통합 예제</h1>
      <p>아래 9가지 스타일링 방식을 한 페이지에서 비교합니다.</p>
      <section>
        <h2>(2) 전통적인 CSS</h2>
        <TraditionalCSS />
      </section>
      <section>
        <h2>(3) CSS Modules</h2>
        <CSSModules />
      </section>
      <section>
        <h2>(4) Inline Style (JS 객체)</h2>
        <InlineStyle />
      </section>
      <section>
        <h2>(5) CSS-in-JS (Styled-Components)</h2>
        <StyledComponents />
      </section>
      <section>
        <h2>(6) CSS 변수 활용</h2>
        <CSSVariables />
      </section>
      <section>
        <h2>(7) 동적 클래스명 조합</h2>
        <DynamicClass />
      </section>
      <section>
        <h2>(8) SASS / SCSS</h2>
        <SassExample />
      </section>
      <section>
        <h2>(9) Tailwind CSS</h2>
        <TailwindExample />
      </section>
      <section>
        <h2>(10) 디자인 토큰 & 테마</h2>
        <ThemeExample />
      </section>
    </div>
  );
}
export default App;