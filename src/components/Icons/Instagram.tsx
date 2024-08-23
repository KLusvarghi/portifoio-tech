import { useState } from 'react';
import styled from 'styled-components';
import { ISvgProps } from '../../types/auxProps';
import { Link } from '../Link/Link';
import { instagram } from '../../utils/links';

const StyledSpan = styled.span<{
  $isHovered: boolean;
  $footer: boolean;
  $theme: string;
}>`
  svg path {
    fill: ${({ $footer, $isHovered, $theme }) =>
      $isHovered
        ? 'url(#instagramGradient)' // Aplica o gradiente quando hoverado
        : $footer
        ? $theme === 'dark'
          ? '#AAAEB6'
          : '#999CA4'
        : '#225E84'};
  }
`;

export const Instagram = ({ theme = 'dark', footer = false }: ISvgProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledSpan
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
      $footer={footer}
      $theme={theme}
    >
      <Link url={instagram}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="instagramGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: '#F58529', stopOpacity: 1 }}
              />
              <stop
                offset="30%"
                style={{ stopColor: '#DD2A7B', stopOpacity: 1 }}
              />
              <stop
                offset="60%"
                style={{ stopColor: '#8134AF', stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: '#515BD4', stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>

          <path
            d="M12.4228 9.28212C10.6692 9.28212 9.23815 10.6664 9.23815 12.3626C9.23815 14.0589 10.6692 15.4432 12.4228 15.4432C14.1764 15.4432 15.6075 14.0589 15.6075 12.3626C15.6075 10.6664 14.1764 9.28212 12.4228 9.28212ZM21.9745 12.3626C21.9745 11.087 21.9864 9.82289 21.9124 8.54954C21.8383 7.07052 21.4895 5.75788 20.3714 4.67635C19.2509 3.5925 17.8963 3.25741 16.3672 3.18577C15.0485 3.11413 13.7416 3.12569 12.4252 3.12569C11.1064 3.12569 9.79959 3.11413 8.48319 3.18577C6.95416 3.25741 5.59715 3.59481 4.47905 4.67635C3.35855 5.7602 3.01213 7.07052 2.93807 8.54954C2.86401 9.8252 2.87595 11.0893 2.87595 12.3626C2.87595 13.636 2.86401 14.9024 2.93807 16.1757C3.01213 17.6548 3.36094 18.9674 4.47905 20.0489C5.59954 21.1328 6.95416 21.4679 8.48319 21.5395C9.80198 21.6112 11.1088 21.5996 12.4252 21.5996C13.744 21.5996 15.0508 21.6112 16.3672 21.5395C17.8963 21.4679 19.2533 21.1305 20.3714 20.0489C21.4919 18.9651 21.8383 17.6548 21.9124 16.1757C21.9888 14.9024 21.9745 13.6383 21.9745 12.3626ZM12.4228 17.1024C9.71119 17.1024 7.52277 14.9856 7.52277 12.3626C7.52277 9.73969 9.71119 7.62284 12.4228 7.62284C15.1345 7.62284 17.3229 9.73969 17.3229 12.3626C17.3229 14.9856 15.1345 17.1024 12.4228 17.1024ZM17.5236 8.53567C16.8905 8.53567 16.3792 8.04113 16.3792 7.42872C16.3792 6.81631 16.8905 6.32176 17.5236 6.32176C18.1567 6.32176 18.668 6.81631 18.668 7.42872C18.6681 7.57414 18.6387 7.71816 18.5812 7.85255C18.5238 7.98693 18.4395 8.10903 18.3332 8.21186C18.2269 8.31469 18.1007 8.39622 17.9617 8.45178C17.8228 8.50735 17.6739 8.53586 17.5236 8.53567Z"
            fill="#AAAEB6"
          />
        </svg>
      </Link>
    </StyledSpan>
  );
};
