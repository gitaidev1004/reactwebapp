import React from "react";
import styled from "styled-components";
import { FaUserCircle, FaGithub, FaTwitter } from "react-icons/fa";

const IconWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 28px;
`;
const IconComponent = () => {
  return (
    <IconWrapper>
      <FaUserCircle />
      <FaGithub color="#4078c0" />
      <FaTwitter style={{ color: "#1da1f2" }} />
    </IconWrapper>
  );
};
export default IconComponent;