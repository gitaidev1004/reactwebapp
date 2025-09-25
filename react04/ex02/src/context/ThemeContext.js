import React, { createContext, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const theme = isDark ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};