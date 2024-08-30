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

interface IStyledThoggleThemeMenu {
  $theme: string;
}

export const WrapperToggleThemeMobile = styled.span<IStyledThoggleThemeMenu>`
  text-align: center;
  height: 100%;
  width: 100%;
  border-radius: 0 0 5px 5px;
  transition: 0.2s ease-in;

  &:hover {
    border-radius: 5px;
    transform: scale(1.03);
  }

  ${(props) => {
    switch (props.$theme) {
      case 'dark':
        return css`
          background: ${(props) => props.theme.colors.primaries.a};
        `;
      default:
        return css`
          background: ${(props) => props.theme.colors.neutral.c5};
        `;
    }
  }}
`;

export const ContainerButton = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: none;
  }
`;

// Footer

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

export const UlFooter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 32px 0;
  min-width: 410px;

  &:hover {
    li {
      &:not(:hover) {
        opacity: 0.3;
        filter: blur(1px);
      }
    }
  }

  @media (max-width: 480px) {
    min-width: auto;
    flex-direction: column;
    gap: 12px;
  }
`;

export const LiFooter = styled.li`
  transition: 0.3s ease-in-out;
  list-style: none;
  color: ${(props) => props.theme.colors.footer.b};
`;

export const ContainerIcons = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

export const Separator = styled.span`
  width: 100%;
  height: 0.5px;
  background: ${(props) => props.theme.colors.footer.a};
  margin-bottom: 12px;
  flex-wrap: wrap;
`;