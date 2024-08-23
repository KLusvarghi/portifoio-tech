import { ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import { ArrowNext } from '../Icons/ArrowNext';

interface IButtonProps {
  children: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'transparent'
    | 'header'
    | 'footer';
  icon?: boolean;
  onClick?: () => void;
  width?: number;
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

const PrimaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.colors.primaries.a};
  border: 2px solid ${(props) => props.theme.colors.primaries.a};
  display: flex;
  align-items: center;
  gap: 12px;
  &:hover {
    box-shadow: inset 500px 0 0 0 ${(props) => props.theme.colors.neutral.c1};
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
    box-shadow: inset 300px 0 0 0 ${(props) => props.theme.colors.primaries.a};
    color: ${(props) => props.theme.colors.neutral.c2};
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

export const Button = ({
  variant = 'primary',
  children,
  icon = false,
  onClick,
  width = 0,
}: IButtonProps) => {
  const [stroke, setStroke] = useState('#E8EBED');

  const renderButton = () => (
    <PrimaryButton
      onMouseEnter={() => setStroke('#225E84')}
      onMouseLeave={() => setStroke('#E8EBED')}
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
      return <FooterButton onClick={onClick}>{children}</FooterButton>;
    default:
      return renderButton();
  }
};
