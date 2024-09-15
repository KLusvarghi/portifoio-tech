import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  font-family: ${(props) => props.theme.font.poppins};
  color: ${(props) => props.theme.colors.neutral.c2};
  line-height: 22px;
  font-size: 1em;
  font-weight: 500;
  border-radius: 5px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.75em 1.5em;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const StyledArrow = styled.svg`
  width: 23px;
  height: 11px;
`;

export const PrimaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.colors.primaries.a};
  border: 2px solid ${(props) => props.theme.colors.primaries.a};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-height: 60px;
  font-weight: 600;
  &:hover {
    box-shadow: inset 700px 0 0 0 ${(props) => props.theme.colors.bgGradient.b};
    color: ${(props) => props.theme.colors.primaries.a};
  }
`;

export const SecondaryButton = styled(StyledButton)`
  font-weight: 600;
  background: ${(props) => props.theme.colors.btnSecondary.bg};

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.colors.btnSecondary.colorHover};
    box-shadow: 0 0 6px ${(props) => props.theme.colors.btnSecondary.boxShadow};
  }
`;

export const OutlineButton = styled(StyledButton)`
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.primaries.a};
  color: ${(props) => props.theme.colors.primaries.a};
  font-weight: 600;
  &:hover {
    box-shadow: inset 700px 0 0 0 ${(props) => props.theme.colors.primaries.a};
    color: ${(props) => props.theme.colors.neutral.c2};
  }
`;

export const ProjectButton = styled(StyledButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.btnHeader};
  cursor: pointer;
  &:hover {
    transform: scale(1.125);
  }
`;

export const TransparentButton = styled(StyledButton)`
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid transparent;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primaries.a};

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primaries.a};
  }
`;

export const HeaderButton = styled(StyledButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.btnHeader};
  padding: 0 0.875em;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 500;

  @media (max-width: 1014px) {
    text-align: start;
    width: 100%;
    padding: 12px 36px 12px 22px;
  }
`;

export const FooterButton = styled(StyledButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.footer.b};
  padding: 0 1.2em 0.2em;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 500;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.115);
  }
`;

interface IStyledFilterProps {
  $active: boolean | undefined;
}

export const FilterButton = styled(StyledButton)<IStyledFilterProps>`
  color: ${(props) => props.theme.colors.footer.b};
  padding: 4px 8px;
  margin: 0;
  border: none;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 500;

  @media (min-width: 1024px) {
    &:hover {
      background: ${(props) => props.theme.colors.filter.activebg};
    }
  }

  ${(props) =>
    props.$active
      ? css`
          background: ${(props) => props.theme.colors.filter.activebg};
          color: ${(props) => props.theme.colors.filter.activeColor};
        `
      : css`
          background: ${(props) => props.theme.colors.filter.bg};
          color: ${(props) => props.theme.colors.filter.color};
        `}
`;
