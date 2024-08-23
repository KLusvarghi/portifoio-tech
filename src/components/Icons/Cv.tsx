import styled from 'styled-components';
import { IStyledSvgProps, ISvgProps } from '../../types/auxProps';
import { useState } from 'react';
import { Link } from '../Link/Link';
import { curriculo } from '../../utils/links';

const StyledSpan = styled.span<IStyledSvgProps>`
  svg path {
    transition: 0.1s ease-in;
    fill: ${({ $footer, $theme, $isHovered }) =>
      $isHovered
        ? '#5D616B'
        : $footer
        ? $theme === 'dark'
          ? '#AAAEB6'
          : '#999CA4'
        : '#225E84'};
  }
`;

export const Cv = ({ theme = 'dark', footer = false }: ISvgProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledSpan
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
      $footer={footer}
      $theme={theme}
    >
      <Link url={curriculo}>
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8351 9.40406H19.4415L13.8351 3.98098V9.40406ZM6.69959 2.50195H14.8544L20.9705 8.41804V20.2502C20.9705 20.7732 20.7557 21.2748 20.3734 21.6447C19.9911 22.0145 19.4725 22.2222 18.9318 22.2222H6.69959C6.1589 22.2222 5.64034 22.0145 5.25801 21.6447C4.87568 21.2748 4.66089 20.7732 4.66089 20.2502V4.47398C4.66089 3.37951 5.56811 2.50195 6.69959 2.50195ZM15.8738 18.2782V16.3062H6.69959V18.2782H15.8738ZM18.9318 14.3341V12.3621H6.69959V14.3341H18.9318Z"
          />
        </svg>
      </Link>
    </StyledSpan>
  );
};
