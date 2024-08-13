import styled from 'styled-components';

export const Header = styled.header`
  background: ${(props) => props.theme.colors.bgGradient.a};
  padding: ${(props) => props.theme.spacing.l} 82px;
  /* display: flex;
  flex-wrap: nowrap; */
  /* min-width: 100vw; */

  @media (max-width: ${(props) => props.theme.breakpoint.mobileGrid}) {
    padding: ${(props) => props.theme.spacing.l} 22px;
  }
`;
