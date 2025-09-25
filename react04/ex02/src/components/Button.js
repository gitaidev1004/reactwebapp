import React from "react";
import "./Button.css";
const Button = () => {
  const inlineStyle = {
    backgroundColor: "#6c757d",
    color: "#fff",
    padding: "10px 20px",
    marginLeft: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return (
    <div>
      <button className="btn-primary">CSS 파일 스타일링</button>
      <button style={inlineStyle}>인라인 스타일링</button>
    </div>
  );
};
export default Button;