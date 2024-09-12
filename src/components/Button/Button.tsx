import { ReactNode, useState } from 'react';
import { ArrowNext } from '../Icons/ArrowNext';
import { IStyledSvgProps } from '../../types/auxProps';
import styled, { css } from 'styled-components';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';

interface IButtonProps {
  children: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'transparent'
    | 'header'
    | 'project'
    | 'filter'
    | 'footer';
  icon?: boolean;
  onClick?: () => void;
  width?: number;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  active?: boolean | undefined;
}

const StyledButton = styled.button`
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

const StyledArrow = styled.svg`
  width: 23px;
  height: 11px;
`;

const PrimaryButton = styled(StyledButton)<IStyledSvgProps>`
  background: ${(props) => props.theme.colors.primaries.a};
  border: 2px solid ${(props) => props.theme.colors.primaries.a};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-height: 60px;
  &:hover {
    box-shadow: inset 700px 0 0 0 ${(props) => props.theme.colors.neutral.c1};
    color: ${(props) => props.theme.colors.primaries.a};
  }
`;

const SecondaryButton = styled(StyledButton)<IStyledSvgProps>`
  font-weight: 600;

  ${(props) => {
    switch (props.$theme) {
      case 'dark':
        return css`
          color: ${(props) => props.theme.colors.header.b};
          background: ${(props) => props.theme.colors.btnSecundary};

          &:hover {
            background: transparent;
            box-shadow: 0 0 6px ${(props) => props.theme.colors.btnHeader};
          }
        `;
      default:
        return css`
          color: ${(props) => props.theme.colors.neutral.c10};
          background: ${(props) => props.theme.colors.neutral.c3};

          &:hover {
            background: transparent;
            box-shadow: 0 0 6px ${(props) => props.theme.colors.btnHeader};
          }
        `;
    }
  }}
`;

const OutlineButton = styled(StyledButton)`
  background: transparent;
  border: 2px solid ${(props) => props.theme.colors.primaries.a};
  color: ${(props) => props.theme.colors.primaries.a};
  &:hover {
    box-shadow: inset 700px 0 0 0 ${(props) => props.theme.colors.primaries.a};
    color: ${(props) => props.theme.colors.neutral.c2};
  }
`;

const ProjectButton = styled(StyledButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.btnHeader};
  cursor: pointer;
  &:hover {
    transform: scale(1.125);
  }
`;

const TransparentButton = styled(StyledButton)`
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

interface IStyledHeaderButton {
  $width: number;
}

const HeaderButton = styled(StyledButton)<IStyledHeaderButton>`
  background: transparent;
  color: ${(props) => props.theme.colors.btnHeader};
  padding: 0 1.2em 0.2em;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 500;

  ${(props) =>
    props.$width <= 1015
      ? css`
          text-align: start;
          width: 100%;
          padding: 12px 36px 12px 22px;
        `
      : null}
`;

const FooterButton = styled(StyledButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.footer.b};
  padding: 0 1.2em 0.2em;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 500;
`;

interface IStyledFilterProps {
  $theme: string;
  $active: boolean | undefined;
}

const FilterButton = styled(StyledButton)<IStyledFilterProps>`
  color: ${(props) => props.theme.colors.footer.b};
  padding: 4px 8px;
  margin: 0;
  border: none;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 500;

  &:hover {
    background: ${(props) => props.theme.colors.filter.activebg};
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

export const Button = ({
  variant = 'primary',
  children,
  icon = false,
  onClick,
  width = 0,
  type = 'button',
  active,
  ...props
}: IButtonProps) => {
  const [stroke, setStroke] = useState('#E8EBED');
  const { theme } = useSystemThemeContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    if (onClick) onClick();
  };

  const renderButton = () => (
    <PrimaryButton
      {...props}
      type={type}
      $theme={theme.title}
      onMouseEnter={() => setStroke('#225E84')}
      onMouseLeave={() => setStroke('#E8EBED')}
      onKeyUp={onClick}
      onClick={handleClick}
    >
      {children}
      {icon && (
        <StyledArrow>
          <ArrowNext stroke={stroke} />
        </StyledArrow>
      )}
    </PrimaryButton>
  );

  switch (variant) {
    case 'secondary':
      return (
        <SecondaryButton $theme={theme.title} onClick={handleClick}>
          {children}
        </SecondaryButton>
      );
    case 'outline':
      return <OutlineButton onClick={handleClick}>{children}</OutlineButton>;
    case 'filter':
      return (
        <FilterButton
          $active={active}
          $theme={theme.title}
          onClick={handleClick}
        >
          {children}
        </FilterButton>
      );
    case 'project':
      return <ProjectButton onClick={handleClick}>{children}</ProjectButton>;
    case 'transparent':
      return (
        <TransparentButton onClick={onClick}>{children}</TransparentButton>
      );
    case 'header':
      return (
        <HeaderButton onClick={handleClick} $width={width}>
          {children}
        </HeaderButton>
      );
    case 'footer':
      return (
        <FooterButton onKeyUp={onClick} onClick={handleClick}>
          {children}
        </FooterButton>
      );
    default:
      return renderButton();
  }
};
