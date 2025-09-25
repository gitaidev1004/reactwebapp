import styled from 'styled-components';

export const Button = styled.button`
  padding: ${({ size }) => (size === 'lg' ? '12px 24px' : '8px 16px')};
  background: ${({ variant }) =>
    variant === 'primary'
      ? '#007bff'
      : variant === 'secondary'
      ? '#6c757d'
      : 'transparent'};
  color: ${({ variant }) => (variant === 'outline' ? '#007bff' : '#fff')};
  border: ${({ variant }) =>
    variant === 'outline' ? '1px solid #007bff' : 'none'};
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: background 0.2s;

  &:hover {
    background: ${({ variant }) =>
      variant === 'primary'
        ? '#0056b3'
        : variant === 'secondary'
        ? '#5a6268'
        : 'rgba(0,123,255,0.1)'};
  }
`;