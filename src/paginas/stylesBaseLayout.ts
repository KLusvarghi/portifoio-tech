import styled, { css } from 'styled-components';

interface IStyledHamburguerProps {
  $active: boolean;
}

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

export const StyledUl = styled.ul<IStyledHamburguerProps>`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    ${(props) => {
      switch (props.$active) {
        case true:
          return css`
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            row-gap: 12px;
            background: ${(props) => props.theme.colors.bgGradient.a};
            position: absolute;
            top: 100%;
            right: 35%;
            z-index: 1000;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 10%);
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

export const StyledLi = styled.li`
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

export const StyledDivButton = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const StyledButtonHamburguer = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: flex;
  }
`;

export const StyledHamburguer = styled.span<IStyledHamburguerProps>`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    width: 20px;
    border-top: 2px solid;
    color: ${(props) => props.theme.colors.btnHeader};

    &::after,
    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: currentColor;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
    }
    ${({ $active }) =>
      $active &&
      `
        border-top-color: transparent;
        &::before {
          transform: rotate(135deg);
        }

        &::after {
          transform: rotate(-135deg);
          top: -7px;
        }
    `}
  }
`;

export const StyledMode = styled.div`
  cursor: pointer;
  height: 54px;
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledSeparator = styled.span`
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

export const StyledContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StayledWrapperFooter = styled(StyledFooter)``;

export const StyledWrapperIcons = styled(StyledFooter)`
  margin-bottom: 60px;
`;

export const StyledUlFooter = styled.ul`
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

export const StyledLiFooter = styled.li`
  transition: 0.3s ease-in-out;
  list-style: none;
  color: ${(props) => props.theme.colors.footer.b};
`;
