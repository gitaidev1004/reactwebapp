import React from 'react';
import styled from 'styled-components';
const Title = styled.h1`
  color: orange;
  font-size: 30px;
  &:hover {
    color: red;
  }
`;
export default function StyledComponents() {
  return <Title>Styled-Components 적용</Title>;
}