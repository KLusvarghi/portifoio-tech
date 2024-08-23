import styled from 'styled-components';
import { IStyledSvgProps, ISvgProps } from '../../types/auxProps';
import { useState } from 'react';
import { Link } from '../Link/Link';
import { whatsapp } from '../../utils/links';

const StyledSpan = styled.span<IStyledSvgProps>`
  svg path {
    transition: 0.1s ease-in;
    fill: ${({ $theme, $isHovered }) =>
      $isHovered ? '#00E676' : $theme === 'dark' ? '#AAAEB6' : '#999CA4'};
  }
`;

export const WhatsApp = ({ theme = 'dark' }: ISvgProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledSpan
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
      $theme={theme}
    >
      <Link url={whatsapp}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.5382 5.00544C18.6037 4.06144 17.4905 3.31297 16.2637 2.80369C15.0369 2.2944 13.7209 2.0345 12.3926 2.03912C6.82689 2.03912 2.29078 6.57524 2.29078 12.1409C2.29078 13.9248 2.75968 15.6577 3.63632 17.1867L2.20923 22.4262L7.56083 21.0195C9.03889 21.8248 10.7004 22.2529 12.3926 22.2529C17.9582 22.2529 22.4943 17.7168 22.4943 12.1511C22.4943 9.44981 21.4444 6.91163 19.5382 5.00544ZM12.3926 20.5404C10.8839 20.5404 9.40586 20.1326 8.11128 19.3681L7.80547 19.1846L4.62509 20.0205L5.47116 16.9217L5.26729 16.6057C4.42912 15.2672 3.98406 13.7201 3.9829 12.1409C3.9829 7.51304 7.7545 3.74144 12.3824 3.74144C14.6249 3.74144 16.735 4.61808 18.315 6.20827C19.0973 6.98702 19.7173 7.91331 20.139 8.93344C20.5607 9.95357 20.7757 11.0473 20.7716 12.1511C20.792 16.779 17.0204 20.5404 12.3926 20.5404ZM17 14.2612C16.7452 14.1388 15.5016 13.5272 15.2773 13.4355C15.0429 13.3539 14.8798 13.3132 14.7065 13.5578C14.5332 13.8126 14.0541 14.3835 13.9114 14.5466C13.7687 14.7199 13.6158 14.7403 13.3609 14.6077C13.1061 14.4854 12.2906 14.2102 11.3324 13.3539C10.5781 12.6812 10.0786 11.8555 9.92572 11.6006C9.78302 11.3458 9.90534 11.2133 10.0379 11.0808C10.15 10.9686 10.2927 10.7852 10.415 10.6425C10.5373 10.4997 10.5883 10.3876 10.6699 10.2245C10.7514 10.0512 10.7106 9.90852 10.6495 9.7862C10.5883 9.66388 10.0786 8.42027 9.87476 7.91059C9.67089 7.4213 9.45682 7.48246 9.30392 7.47227H8.81463C8.64134 7.47227 8.37631 7.53343 8.14186 7.78827C7.9176 8.04311 7.26522 8.65472 7.26522 9.89833C7.26522 11.1419 8.17244 12.3448 8.29476 12.5079C8.41708 12.6812 10.0786 15.2295 12.6066 16.3202C13.208 16.5853 13.6769 16.7382 14.0439 16.8503C14.6453 17.044 15.1958 17.0134 15.6341 16.9522C16.1234 16.8809 17.1325 16.3406 17.3364 15.7494C17.5505 15.1582 17.5505 14.6587 17.4791 14.5466C17.4078 14.4344 17.2549 14.3835 17 14.2612Z" />
        </svg>
      </Link>
    </StyledSpan>
  );
};
