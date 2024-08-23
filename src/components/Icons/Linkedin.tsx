import styled from 'styled-components';
import { IStyledSvgProps, ISvgProps } from '../../types/auxProps';
import { useState } from 'react';
import { Link } from '../Link/Link';
import { linkedin } from '../../utils/links';

const StyledSpan = styled.span<IStyledSvgProps>`
  svg path {
    transition: 0.1s ease-in;
    fill: ${({ $footer, $theme, $isHovered }) =>
      $isHovered
        ? '#0A66C2'
        : $footer
        ? $theme === 'dark'
          ? '#AAAEB6'
          : '#999CA4'
        : '#225E84'};
  }
`;

export const Linkedin = ({ theme = 'dark', footer = false }: ISvgProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledSpan
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
      $footer={footer}
      $theme={theme}
    >
      <Link url={linkedin}>
      <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.72951 5.45934C7.72924 5.98236 7.51419 6.48385 7.13167 6.85349C6.74914 7.22313 6.23048 7.43065 5.68979 7.43039C5.14909 7.43013 4.63064 7.22211 4.2485 6.8521C3.86636 6.48208 3.65183 5.98039 3.6521 5.45737C3.65237 4.93436 3.86742 4.43287 4.24994 4.06323C4.63247 3.69358 5.15113 3.48607 5.69182 3.48633C6.23252 3.48659 6.75097 3.69461 7.13311 4.06462C7.51525 4.43463 7.72978 4.93633 7.72951 5.45934ZM7.79067 8.89068H3.71326V21.2356H7.79067V8.89068ZM14.233 8.89068H10.176V21.2356H14.1922V14.7575C14.1922 11.1487 19.0545 10.8134 19.0545 14.7575V21.2356H23.081V13.4165C23.081 7.33277 15.8843 7.55956 14.1922 10.5472L14.233 8.89068Z" fill="#AAAEB6"/>
</svg>
      </Link>
    </StyledSpan>
  );
};
