import styled from 'styled-components';

export const Footer = styled.footer`
  background: linear-gradient(
    ${(props) => props.theme.colors.bgGradient.b},
    ${(props) => props.theme.colors.bgGradient.c}
  );
  padding: ${(props) => props.theme.spacing.l} 16%;
`;
