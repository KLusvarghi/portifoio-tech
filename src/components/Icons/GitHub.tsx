import { useState } from 'react';
import styled from 'styled-components';
import { IStyledSvgProps, ISvgProps } from '../../types/auxProps';
import { Link } from '../Link/Link';
import { github } from '../../utils/links';

const StyledSpan = styled.span<IStyledSvgProps>`
  svg path {
    transition: 0.1s ease-in;
    fill: ${({ $footer, $theme, $isHovered }) =>
      $isHovered ? '#0F0F0F' : $footer ? ($theme === 'dark' ? '#AAAEB6' : '#999CA4') : '#225E84'};
  }
`;

export const GitHub = ({ theme = 'dark', footer = false }: ISvgProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledSpan
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
      $footer={footer}
      $theme={theme}
    >
      <Link url={github}>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.2322 0.529297C5.47392 0.529297 0 5.8242 0 12.3615C0 17.5972 3.50147 22.0195 8.36378 23.5873C8.9754 23.6908 9.20475 23.3358 9.20475 23.0252C9.20475 22.7442 9.18946 21.8124 9.18946 20.8215C6.11611 21.3687 5.32102 20.0968 5.07637 19.4312C4.93876 19.091 4.34244 18.0409 3.82257 17.7599C3.39444 17.5381 2.78283 16.9908 3.80728 16.976C4.77057 16.9612 5.45863 17.8339 5.68799 18.1888C6.78889 19.9784 8.54727 19.4756 9.25062 19.165C9.35765 18.3959 9.67875 17.8782 10.0304 17.5824C7.30876 17.2866 4.46476 16.2661 4.46476 11.7403C4.46476 10.4535 4.93876 9.38864 5.71857 8.56039C5.59624 8.26458 5.16812 7.05179 5.84089 5.42486C5.84089 5.42486 6.86534 5.11427 9.20475 6.63766C10.1833 6.37144 11.2231 6.23832 12.2628 6.23832C13.3025 6.23832 14.3423 6.37144 15.3209 6.63766C17.6603 5.09948 18.6847 5.42486 18.6847 5.42486C19.3575 7.05179 18.9294 8.26458 18.8071 8.56039C19.5869 9.38864 20.0609 10.4387 20.0609 11.7403C20.0609 16.2809 17.2016 17.2866 14.4799 17.5824C14.9233 17.9522 15.3056 18.6621 15.3056 19.7714C15.3056 21.3539 15.2903 22.6259 15.2903 23.0252C15.2903 23.3358 15.5196 23.7056 16.1313 23.5873C18.5599 22.7949 20.6704 21.2854 22.1654 19.2715C23.6604 17.2576 24.4645 14.8408 24.4645 12.3615C24.4645 5.8242 18.9905 0.529297 12.2322 0.529297Z" />
        </svg>
      </Link>
    </StyledSpan>
  );
};
