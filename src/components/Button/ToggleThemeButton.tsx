import styled from 'styled-components';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import UseWindowSize from '../../hooks/useWindowSize';

const StyledToggleTheme = styled.div`
  cursor: pointer;
  position: fixed;
  right: 0px;
  top: 22%;
  padding: 0.5em;
  display: flex;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgGradient.a},
    ${(props) => props.theme.colors.bgGradient.b} 66%,
    ${(props) => props.theme.colors.bgGradient.c} 88%
  );
transition: .2s ease-in;
  &:hover {
    opacity: 0.8;
  }
`;

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useSystemThemeContext();
  const width = UseWindowSize();
  const size = '28';
  const handleToggleTheme = () => {
    setTheme();
  };
  if (width >= 600) {
    if (theme.title == 'light') {
      return (
        <StyledToggleTheme onClick={() => handleToggleTheme()}>
          <svg
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9349 19.1725C28.2523 18.4165 27.3454 17.7725 26.5847 18.1085C25.0642 18.7759 23.4214 19.1192 21.7609 19.1165C15.2508 19.1165 9.97432 13.9458 9.97432 7.56639C9.97194 5.41246 10.5839 3.30252 11.7383 1.48411C12.1801 0.787211 11.6497 -0.177243 10.8408 0.0280922C4.60449 1.61944 0 7.17594 0 13.7856C0 21.6365 6.49451 28.0004 14.5073 28.0004C20.574 28.0004 25.7696 24.3526 27.9349 19.1725Z"
              fill="#121212"
            />
            <path
              d="M18.3338 0.184373C17.3831 -0.45057 16.2496 0.683001 16.8827 1.63362L18.0127 3.3286C18.4711 4.01585 18.7157 4.82345 18.7157 5.64954C18.7157 6.47564 18.4711 7.28324 18.0127 7.97049L16.8827 9.66547C16.2496 10.6161 17.3849 11.7497 18.3355 11.1147L20.0287 9.98473C20.716 9.52634 21.5236 9.28172 22.3497 9.28172C23.1758 9.28172 23.9834 9.52634 24.6706 9.98473L26.3656 11.1147C27.3162 11.7497 28.4498 10.6161 27.8148 9.66547L26.6849 7.97049C26.2265 7.28324 25.9818 6.47564 25.9818 5.64954C25.9818 4.82345 26.2265 4.01585 26.6849 3.3286L27.8148 1.63362C28.4498 0.683001 27.3162 -0.45057 26.3638 0.184373L24.6706 1.31436C23.9834 1.77275 23.1758 2.01737 22.3497 2.01737C21.5236 2.01737 20.716 1.77275 20.0287 1.31436L18.3338 0.184373Z"
              fill="#121212"
            />
          </svg>
        </StyledToggleTheme>
      );
    }
    return (
      <StyledToggleTheme onClick={() => handleToggleTheme()}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3333 3.18V0H14.6667V3.18H13.3333ZM13.3333 28V24.8213H14.6667V28H13.3333ZM24.8213 14.6667V13.3333H28V14.6667H24.8213ZM0 14.6667V13.3333H3.18V14.6667H0ZM22.4213 6.52267L21.4773 5.57867L23.4 3.64133L24.36 4.6L22.4213 6.52267ZM4.6 24.36L3.64 23.4013L5.57867 21.4787L6.52267 22.4213L4.6 24.36ZM23.4 24.36L21.4773 22.4227L22.42 21.4787L24.3587 23.4013L23.4 24.36ZM5.58 6.52267L3.64 4.6L4.59867 3.64L6.52133 5.57867L5.58 6.52267ZM14.0067 20.6667C12.156 20.6667 10.5809 20.0191 9.28133 18.724C7.98178 17.4289 7.33244 15.8564 7.33333 14.0067C7.33422 12.1569 7.98178 10.5813 9.276 9.28C10.5702 7.97867 12.1427 7.32978 13.9933 7.33333C15.844 7.33689 17.4191 7.98444 18.7187 9.276C20.0182 10.5676 20.6676 12.14 20.6667 13.9933C20.6658 15.8467 20.0182 17.4218 18.724 18.7187C17.4298 20.0156 15.8573 20.6649 14.0067 20.6667ZM14 19.3333C15.4889 19.3333 16.7502 18.8169 17.784 17.784C18.8178 16.7511 19.3342 15.4898 19.3333 14C19.3324 12.5102 18.816 11.2489 17.784 10.216C16.752 9.18311 15.4907 8.66667 14 8.66667C12.5093 8.66667 11.248 9.18356 10.216 10.2173C9.184 11.2511 8.66756 12.512 8.66667 14C8.66578 15.488 9.18267 16.7493 10.2173 17.784C11.252 18.8187 12.5129 19.3351 14 19.3333Z"
            fill="#FDF5F5"
          />
        </svg>
      </StyledToggleTheme>
    );
  }
};
