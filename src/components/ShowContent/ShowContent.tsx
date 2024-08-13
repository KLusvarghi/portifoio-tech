import styled, { keyframes } from 'styled-components';
import { ReactNode } from 'react';
import { css } from 'styled-components';

interface IShowPorps {
  children: ReactNode;
  direction?: 'right' | 'down';
}

interface IStyledShowProps {
  $direction: 'right' | 'down';
}

const showContentRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const showContentDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// eslint-disable-next-line react-refresh/only-export-components
const StyledRotate = styled.div<IStyledShowProps>`
  ${(props) => {
    switch (props.$direction) {
      case 'right':
        return css`
          animation: ${showContentRight} 0.9s forwards;
        `;
      default:
        return css`
          animation: ${showContentDown} 0.9s forwards;
        `;
    }
  }}
`;

export const ShowContent = ({ children, direction = 'right' }: IShowPorps) => {
  return <StyledRotate $direction={direction}>{children}</StyledRotate>;
};
