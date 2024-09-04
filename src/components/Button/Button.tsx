import { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import { ArrowNext } from '../Icons/ArrowNext';
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
  isActive?: boolean | null;
}

const StyledButton = styled.button`
  font-family: ${(props) => props.theme.font.poppins};
  color: ${(props) => props.theme.colors.neutral.c2};
  line-height: 22px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.75em 1.5em;
  white-space: nowrap;
`;

const StyledArrow = styled.svg`
  width: 23px;
  height: 11px;
`;

interface IStyledPrimaryProps {
  $theme: string;
}

const PrimaryButton = styled(StyledButton)<IStyledPrimaryProps>`
  background: ${(props) => props.theme.colors.primaries.a};
  border: 2px solid ${(props) => props.theme.colors.primaries.a};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-height: 60px;
  /* width: 100%; */
  &:hover {
    box-shadow: inset 700px 0 0 0 ${(props) => props.theme.colors.neutral.c1};
    color: ${(props) => props.theme.colors.primaries.a};
  }
`;

const SecondaryButton = styled(StyledButton)`
  font-weight: 600;
  color: ${(props) => props.theme.colors.header.b};
  background: ${(props) => props.theme.colors.btnSecundary};

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.colors.btnHeader};
    box-shadow: 0 0 6px ${(props) => props.theme.colors.btnHeader};
  }
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

const FilterButton = styled(StyledButton)<{ $isActive: boolean }>`
  background: transparent;
  color: ${(props) => props.theme.colors.footer.b};
  padding: 0 1.2em 0.2em;
  font-size: 1em;
  line-height: 1.5em;
  font-weight: 500;
  background: ${(props) => (props.$isActive ? '#000' : '#102444')};
`;

export const Button = ({
  variant = 'primary',
  children,
  icon = false,
  onClick,
  width = 0,
  type = 'button',
  isActive,
  ...props
}: IButtonProps) => {
  const [stroke, setStroke] = useState('#E8EBED');
  const { theme } = useSystemThemeContext();

  const renderButton = () => (
    <PrimaryButton
      {...props}
      type={type}
      $theme={theme.title}
      onMouseEnter={() => setStroke('#225E84')}
      onMouseLeave={() => setStroke('#E8EBED')}
      onKeyUp={onClick}
      onClick={onClick}
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
      return <SecondaryButton onClick={onClick}>{children}</SecondaryButton>;
    case 'outline':
      return <OutlineButton onClick={onClick}>{children}</OutlineButton>;
    case 'filter':
      return (
        <FilterButton $isActive={isActive} onClick={onClick}>
          {children}
        </FilterButton>
      );
    case 'project':
      return <ProjectButton onClick={onClick}>{children}</ProjectButton>;
    case 'transparent':
      return (
        <TransparentButton onClick={onClick}>{children}</TransparentButton>
      );
    case 'header':
      return (
        <HeaderButton onClick={onClick} $width={width}>
          {children}
        </HeaderButton>
      );
    case 'footer':
      return (
        <FooterButton onKeyUp={onClick} onClick={onClick}>
          {children}
        </FooterButton>
      );
    default:
      return renderButton();
  }
};
