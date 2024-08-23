import styled from 'styled-components';
import { IStyledSvgProps, ISvgProps, StyledIcons } from '../../types/auxProps';
import { Link } from 'react-router-dom';
import { email } from '../../utils/links';

const StyledSpan = styled(StyledIcons)<IStyledSvgProps>`
  &:hover {
    svg path {
      fill: #5d616b;
    }
  }
`;

export const Email = ({ theme = 'dark', footer = false }: ISvgProps) => {

  return (
    <StyledSpan $footer={footer} $theme={theme}>
      <Link target='_blank' to={email}>
        <svg
          width="21"
          height="18"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 3.373V10.5C16 11.163 15.7366 11.7989 15.2678 12.2678C14.7989 12.7366 14.163 13 13.5 13H2.5C1.83696 13 1.20107 12.7366 0.732233 12.2678C0.263392 11.7989 0 11.163 0 10.5V3.373L7.746 7.931C7.82295 7.97638 7.91066 8.00032 8 8.00032C8.08934 8.00032 8.17705 7.97638 8.254 7.931L16 3.373ZM13.5 3.09527e-08C14.1151 -9.6716e-05 14.7087 0.226607 15.1672 0.63674C15.6257 1.04687 15.9168 1.61164 15.985 2.223L8 6.92L0.0150001 2.223C0.0831583 1.61164 0.374324 1.04687 0.832795 0.63674C1.29127 0.226607 1.88485 -9.6716e-05 2.5 3.09527e-08H13.5Z" />
        </svg>
      </Link>
    </StyledSpan>
  );
};
