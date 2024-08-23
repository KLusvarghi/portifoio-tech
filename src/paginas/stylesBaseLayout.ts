import styled, { css } from 'styled-components';

interface IStyledStateProps {
  $active: boolean;
}

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

export const UlHeader = styled.ul<IStyledStateProps>`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    ${(props) => {
      switch (props.$active) {
        case true:
          return css`
            position: absolute;
            top: 100%;
            right: 10%;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background: ${(props) => props.theme.colors.menu.bg};
            box-shadow: 0px 2px 8px ${(props) => props.theme.colors.menu.shadow};
            border-radius: 5px;
            margin-top: 12px;

            li {
              padding: 0;
              width: 100%;
            }
          `;
        default:
          return css`
            display: none;
          `;
      }
    }}
  }

  display: flex;
  &:hover {
    li {
      &:not(:hover) {
        opacity: 0.3;
        filter: blur(1px);
      }
    }
  }
`;

export const LiHeader = styled.li`
  cursor: pointer;
  list-style: none;
  position: relative;
  transition: 0.5s;
  padding-bottom: 0.3rem;

  &::after {
    content: '';
    position: absolute;
    margin: 0 10% 0 10%;
    width: 80%;
    height: 2px;
    top: 100%;
    left: 0;
    background: ${(props) => props.theme.colors.btnHeader};
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.mobile}) {
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export const ContainerButton = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const StyledButtonHamburguer = styled.span`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: flex;
  }
`;

export const Separator = styled.span`
  width: 100%;
  height: 0.5px;
  background: ${(props) => props.theme.colors.footer.a};
  margin-bottom: 12px;
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperFooter = styled(StyledFooter)``;

export const WrapperIcons = styled(StyledFooter)`
  margin-bottom: 60px;
`;

export const UlFooter = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 32px 0;

  &:hover {
    li {
      &:not(:hover) {
        opacity: 0.3;
        filter: blur(1px);
      }
    }
  }
`;

export const LiFooter = styled.li`
  transition: 0.3s ease-in-out;
  list-style: none;
  color: ${(props) => props.theme.colors.footer.b};
`;
