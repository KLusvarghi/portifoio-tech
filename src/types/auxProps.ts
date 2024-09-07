import { ReactNode, RefObject } from 'react';
import styled from 'styled-components';

// Interface para os childrens
export interface IChildrenProps {
  children?: ReactNode;
}

// Interface para width de UseWindowSize
export interface IUseWindoSizeProps {
  width: number;
}

// Interfaces para as props recebidas no styled-componente
export interface ISvgProps {
  theme?: string;
  footer?: boolean;
  hover?: boolean;
}

export interface IStyledSvgProps {
  $footer?: boolean;
  $theme: string;
}

// Interface para o use do useRef
export interface RefProps {
  refContainer: RefObject<HTMLDivElement>;
}

// Styled dos social icons
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

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
