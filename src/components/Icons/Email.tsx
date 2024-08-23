import styled from 'styled-components';
import { IStyledSvgProps, ISvgProps } from '../../types/auxProps';
import { useState } from 'react';
import { Link } from '../Link/Link';
import { linkedin } from '../../utils/links';

const StyledSpan = styled.span<IStyledSvgProps>`
  svg path {
    transition: 0.1s ease-in;
    fill: ${({ $theme, $isHovered }) =>
      $isHovered ? '#5D616B' : $theme === 'dark' ? '#AAAEB6' : '#999CA4'};
  }
`;

export const Email = ({ theme = 'dark' }: ISvgProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledSpan
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
      $theme={theme}
    >
      <Link url={linkedin}>
        <svg
          width="20"
          height="15"
          viewBox="0 0 23 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23 14V2C23 0.893333 22.0941 0 20.9718 0H2.02822C0.905938 0 0 0.893333 0 2V14C0 15.1067 0.905938 16 2.02822 16H20.9718C22.0941 16 23 15.1067 23 14ZM21.2287 1.85333C21.6749 2.29333 21.4315 2.74667 21.1881 2.97333L15.6984 7.93333L20.9718 13.3467C21.134 13.5333 21.2422 13.8267 21.0529 14.0267C20.8771 14.24 20.4715 14.2267 20.2957 14.0933L14.3868 9.12L11.4932 11.72L8.61317 9.12L2.70429 14.0933C2.52851 14.2267 2.12287 14.24 1.94709 14.0267C1.75779 13.8267 1.86596 13.5333 2.02822 13.3467L7.30159 7.93333L1.81188 2.97333C1.56849 2.74667 1.3251 2.29333 1.77131 1.85333C2.21752 1.41333 2.67725 1.62667 3.05585 1.94667L11.4932 8.66667L19.9442 1.94667C20.3228 1.62667 20.7825 1.41333 21.2287 1.85333Z" />
        </svg>
      </Link>
    </StyledSpan>
  );
};
