import React from 'react';
import styled from 'styled-components';
const StyledParagraph = styled.p`
  font-family: ${(props) => props.font || "'Noto Sans KR', sans-serif"};
  font-size: ${(props) => props.size || '1rem'};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.color || '#555'};
  margin: ${(props) => props.margin || '0 0 10px 0'};
`;
const Paragraph = ({ children, ...props }) => {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
};
export default Paragraph;