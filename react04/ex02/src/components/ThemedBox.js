import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";
const Box = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 20px;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`;
const ThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box theme={theme}>
      <h3>테마 적용 박스</h3>
      <p>현재 테마의 배경색과 글자색을 따릅니다.</p>
    </Box>
  );
};
export default ThemedBox;