import { ReactNode } from 'react';
import styled from 'styled-components';

export interface IChildrenProps {
  children?: ReactNode;
}

export interface ISvgProps {
  theme?: string;
  footer?: boolean;
  hover?: boolean;
}

export interface IStyledSvgProps {
  // $isHovered: boolean;
  $footer?: boolean;
  $theme: string;
}

export const StyledIcons = styled.span<IStyledSvgProps>`
  &:hover {
    svg {
      cursor: pointer;
      transition: 0.2s ease-in;
      transform: scale(1.2);
    }
  }
  svg {
    path {
      fill: ${({ $footer, $theme }) =>
        $footer ? ($theme === 'dark' ? '#AAAEB6' : '#999CA4') : '#225E84'};
    }
  }
`;
