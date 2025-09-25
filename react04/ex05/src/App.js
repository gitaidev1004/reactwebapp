import React from "react";
import FlexboxPatterns from "./components/FlexboxPatterns";
import CSSGridPatterns from "./components/CSSGridPatterns";
import MediaQueryPatterns from "./components/MediaQueryPatterns";
import ContainerSystem from "./components/ContainerSystem";
import LayoutSystem from "./components/LayoutSystem";
import "./styles/variables.css";
import "./styles/AppLayout.css";
function App() {
  return (
    <div>
      <h1>반응형 디자인 프로젝트 (ex05)</h1>
      <ContainerSystem />
      <FlexboxPatterns />
      <CSSGridPatterns />
      <MediaQueryPatterns />
      <LayoutSystem />
    </div>
  );
}
export default App;