import styled from 'styled-components';
import { IStyledSvgProps, ISvgProps, StyledIcons } from '../../types/auxProps';
import { email } from '../../utils/links';
import { Link } from '../Link/Link';

const StyledSpan = styled(StyledIcons)<IStyledSvgProps>`
  &:hover {
    svg path {
      fill: #5d616b;
    }
  }
`;

export const Email = ({ theme = 'dark', footer = false }: ISvgProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {});
    setTimeout(() => {}, 2000);
  };

  return (
    <div className="">
      <Link url={email}>
        <StyledSpan
          $footer={footer}
          $theme={theme}
          onClick={() => copyToClipboard()}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 7.373V14.5C18 15.163 17.7366 15.7989 17.2678 16.2678C16.7989 16.7366 16.163 17 15.5 17H4.5C3.83696 17 3.20107 16.7366 2.73223 16.2678C2.26339 15.7989 2 15.163 2 14.5V7.373L9.746 11.931C9.82295 11.9764 9.91066 12.0003 10 12.0003C10.0893 12.0003 10.177 11.9764 10.254 11.931L18 7.373ZM15.5 4C16.1151 3.9999 16.7087 4.22661 17.1672 4.63674C17.6257 5.04687 17.9168 5.61164 17.985 6.223L10 10.92L2.015 6.223C2.08316 5.61164 2.37432 5.04687 2.83279 4.63674C3.29127 4.22661 3.88485 3.9999 4.5 4H15.5Z" />
          </svg>
        </StyledSpan>
      </Link>
    </div>
  );
};
