import React from 'react';
import styled from 'styled-components';
import { FaNewspaper } from 'react-icons/fa';
const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  font-family: 'Pretendard-Bold', sans-serif;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  svg {
    margin-right: 8px;
  }
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <FaNewspaper />
        React News
      </Logo>
    </HeaderWrapper>
  );
};
export default Header;