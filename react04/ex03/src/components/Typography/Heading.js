import React from 'react';
import styled from 'styled-components';
const StyledHeading = styled.h1`
  font-family: ${(props) => props.font || "'Nanum Myeongjo', serif"};
  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '2.5rem';
      case 'medium':
        return '1.8rem';
      case 'small':
        return '1.2rem';
      default:
        return '2rem';
    }
  }};
  font-weight: ${(props) => props.weight || 700};
  color: ${(props) => props.color || '#333'};
  margin: ${(props) => props.margin || '0 0 10px 0'};
`;
const Heading = ({ children, ...props }) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};
export default Heading;