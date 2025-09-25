import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => (props.isPrimary ? "#007bff" : "#6c757d")};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
const DynamicButton = () => {
  return (
    <div>
      <StyledButton isPrimary>기본 버튼</StyledButton>
      <StyledButton>보조 버튼</StyledButton>
    </div>
  );
};
export default DynamicButton;