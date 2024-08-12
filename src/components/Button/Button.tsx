import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { ArrowNext } from '../Icons/ArrowNext';

interface AuxProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'transparent' | 'header';
  icon?: boolean;
}

const StyledButton = styled.button`
  font-family: ${(props) => props.theme.font.poppins};
  color: ${(props) => props.theme.colors.neutral.c2};
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 1em 2em;
`;

const StyledArrow = styled.svg`
  width: 23px;
  height: 11px;
  padding-left: 10px;
`;

const PrimaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.colors.primaries.a};
  border: 2px solid ${(props) => props.theme.colors.primaries.a};

  &:hover {
    box-shadow: inset 500px 0 0 0 ${(props) => props.theme.colors.neutral.c1};
    color: ${(props) => props.theme.colors.primaries.a};
  }
`;

const SecondaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.colors.dark.a};

  &:hover {
    background: transparent;
  }
`;

const OutlineButton = styled(StyledButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.primaries.a};
  border: 2px solid ${(props) => props.theme.colors.primaries.a};

  &:hover {
    box-shadow: inset 300px 0 0 0 ${(props) => props.theme.colors.primaries.a};
    color: ${(props) => props.theme.colors.neutral.c2};
  }
`;

const TransparentButton = styled(StyledButton)`
  background: transparent;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaries.a};
  letter-spacing: 1px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primaries.a};
  }
`;

const HeaderButton = styled(StyledButton)`
  background: transparent;
  color: ${(props) => props.theme.colors.neutral.c1};
  padding: 0 1.2em 0.2em;
`;

export const Button = ({
  variant = 'primary',
  children,
  icon = false,
}: AuxProps) => {
  const [stroke, setStroke] = useState('#E8EBED');

  const renderButton = () => (
    <PrimaryButton
      onMouseEnter={() => setStroke('#225E84')}
      onMouseLeave={() => setStroke('#E8EBED')}
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
    case 'outline':
      return <OutlineButton>{children}</OutlineButton>;
    case 'transparent':
      return <TransparentButton>{children}</TransparentButton>;
    case 'header':
      return <HeaderButton>{children}</HeaderButton>;
    case 'secondary':
      return <SecondaryButton>{children}</SecondaryButton>;
    default:
      return renderButton();
  }
};
