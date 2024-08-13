import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import arrow from './assets/arrow-next.svg';

// const StyledArrow = styled.img`
//   max-width: 100%;
//   margin-left: 10px;
//   flex: 1;
//   &:hover {
//     color: ${(props) => props.theme.colors.dark.a};
//   }
// `;

interface AuxProps {
  children: ReactNode;
  variant?: 'primary' | 'secound' | 'outline' | 'transparent' | 'header';
  icon?: boolean;
}

interface IButtonProps {
  $icon?: boolean;
}

const StyledButton = styled.button`
  font-family: ${(props) => props.theme.font.poppins};
  color: ${(props) => props.theme.colors.neutral.c2};
  line-height: 24px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  transition: ease-in-out 0.3s;
`;

const PrimaryButton = styled(StyledButton)<IButtonProps>`
  ${(props) => {
    switch (props.$icon) {
      case true:
        return css`
          background: ${(props) => props.theme.colors.primaries.a} url(${arrow})
          no-repeat right 16px center;
          padding-right: 52px;
        `;
      default:
        return css`
          background: ${(props) => props.theme.colors.primaries.a};
        `;
    }
  }}
  border: 2px solid ${(props) => props.theme.colors.primaries.a};

  &:hover {
    box-shadow: inset 500px 0 0 0 ${(props) => props.theme.colors.neutral.c1};
    color: ${(props) => props.theme.colors.primaries.a};

  }
`;

const SecoundButton = styled(StyledButton)`
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
`;

export const Button = ({
  variant = 'primary',
  children,
  icon = false,
}: AuxProps) => {
  if (variant === 'primary') {
    return (
      <PrimaryButton $icon={icon}>
        {children}
        {/* {icon ? <StyledArrow src={arrow} alt="Flecha para a direita" /> : null} */}
      </PrimaryButton>
    );
  } else if (variant === 'outline') {
    return <OutlineButton>{children}</OutlineButton>;
  } else if (variant === 'transparent') {
    return <TransparentButton>{children}</TransparentButton>;
  } else if (variant === 'header') {
    return <HeaderButton>{children}</HeaderButton>;
  }
  return <SecoundButton>{children}</SecoundButton>;
};
