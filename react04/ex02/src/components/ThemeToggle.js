import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: isDark ? "#444" : "#007bff",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        marginBottom: "15px",
      }}
    >
      {isDark ? "🌙 다크 모드" : "☀️ 라이트 모드"}
    </button>
  );
};
export default ThemeToggle;