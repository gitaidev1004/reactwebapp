import React from "react";
import "./styles/global.css";
import IconComponent from "./components/IconComponent";
import EmojiComponent from "./components/EmojiComponent";
import Shapes from "./components/Shapes";
import ProductList from "./components/ProductList";
const App = () => {
  return (
    <div>
      <h1>파비콘, 아이콘, 이모지, 도형 적용</h1>
      <IconComponent />
      <EmojiComponent />
      <Shapes />
      <ProductList />
    </div>
  );
};
export default App;