import styled from 'styled-components';
import { IStyledSvgProps } from '../../types/auxProps';

const StyledSpan = styled.span<IStyledSvgProps>`
  svg {
    transform: rotate(180deg);
    path {
      fill: ${({ $theme, theme }) =>
        $theme === 'dark' ? theme.colors.neutral.c5 : theme.colors.neutral.c12};
    }
  }

  &:hover {
    svg path {
      fill: ${(props) => props.theme.colors.neutral.c8};
    }
  }
`;

export const ArrowBack = ({ theme = 'dark' }) => {
  return (
    <StyledSpan $theme={theme}>
      <svg
        width="31"
        height="23"
        viewBox="0 0 31 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31 11.5177C31 11.9762 30.8185 12.4159 30.4955 12.7401C30.1726 13.0644 29.7345 13.2465 29.2777 13.2465L5.87729 13.2465L12.1235 19.5164C12.4278 19.8441 12.5934 20.2776 12.5855 20.7255C12.5776 21.1734 12.3969 21.6007 12.0813 21.9175C11.7658 22.2342 11.34 22.4157 10.8938 22.4236C10.4477 22.4315 10.0158 22.2652 9.68933 21.9598L0.503694 12.7394C0.181163 12.4152 0 11.9758 0 11.5177C0 11.0595 0.181163 10.6201 0.503694 10.296L9.68933 1.07551C10.0158 0.77013 10.4477 0.603876 10.8938 0.611778C11.34 0.61968 11.7658 0.801123 12.0813 1.11787C12.3969 1.43463 12.5776 1.86196 12.5855 2.30985C12.5934 2.75773 12.4278 3.1912 12.1235 3.51893L5.87729 9.78883L29.2777 9.78883C29.7345 9.78883 30.1726 9.97098 30.4955 10.2952C30.8185 10.6194 31 11.0592 31 11.5177Z"
          fill="#F4F5F7"
        />
      </svg>
    </StyledSpan>
  );
};
