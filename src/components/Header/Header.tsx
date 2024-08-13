import styled from 'styled-components';

export const Header = styled.header`
  background: ${(props) => props.theme.colors.bgGradient.a};
  padding: ${(props) => props.theme.spacing.l} 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 12%;

  @media (max-width: ${(props) => props.theme.breakpoint.mobileGrid}) {
    padding: ${(props) => props.theme.spacing.l} 22px;
  }
`;
