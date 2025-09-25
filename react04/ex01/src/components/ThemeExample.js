import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 20px;
`;
export default function ThemeExample() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <h1>디자인 토큰 & 테마 적용</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '라이트 모드' : '다크 모드'}
        </button>
      </Container>
    </ThemeProvider>
  );
}