import styled from 'styled-components';

export const Header = styled.header`
  background: ${(props) => props.theme.colors.bgGradient.a};
  padding: 0 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 112px;
  z-index: 1000;

  @media (max-width: 1015px) {
    height: 82px;
    padding: 0 44px;

  }
  @media (max-width: 680px) {
    position: static;
  }

  @media (max-width: 460px) {
    padding: 0 12px;
  }
`;
