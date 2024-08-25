import styled from 'styled-components';
import { ReactNode } from 'react';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { css } from 'styled-components';

//  sendo o component é o que será renderizado

interface IStyledTypographProps {
  $theme: string;
}

const components = {
  intro: styled.h1<IStyledTypographProps>`
    font-size: 2.5em;
    line-height: 1.2;
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
    color: ${(props) => props.theme.colors.primaries.a};
    margin: 0;
  `,
  h1: styled.h1<IStyledTypographProps>`
    font-size: 2.5em;
    line-height: 1.2;
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
    color: ${(props) => props.theme.colors.title.h1};
    margin: 0;
  `,
  h2: styled.h2<IStyledTypographProps>`
    font-size: 2em;
    /* line-height: 2.5em; */
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
  `,

  h4: styled.h1<IStyledTypographProps>`
    font-size: 1.375em;
    /* line-height: 1.5em; */
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
    color: ${(props) => props.theme.colors.footer.a};
  `,
  body: styled.p<IStyledTypographProps>`
    font-size: 1.25em;
    /* line-height: 1.62em; */
    font-weight: 400;
    font-family: ${(props) => props.theme.font.roboto};
    color: ${(props) => props.theme.colors.title.p};
  `,
  bodyBold: styled.strong<IStyledTypographProps>`
    font-size: 1.25em;
    /* line-height: 1.62em; */
    font-weight: 700;
    font-family: ${(props) => props.theme.font.roboto};
  `,
  body2: styled.p`
    font-size: 1em;
    /* line-height: 1.5em; */
    font-weight: 400;
    font-family: ${(props) => props.theme.font.roboto};
  `,
  body2Bold: styled.strong<IStyledTypographProps>`
    font-size: 1em;
    /* line-height: 1.5em; */
    font-weight: 700;
    font-family: ${(props) => props.theme.font.roboto};
  `,
  body3: styled.p<IStyledTypographProps>`
    font-size: 0.75em;
    /* line-height: 16px; */
    font-weight: 400;
    font-family: ${(props) => props.theme.font.roboto};
    color: ${(props) => props.theme.colors.footer.a};
  `,
  bodyMenu: styled.p<IStyledTypographProps>`
    font-size: 1em;
    font-weight: 500;
    font-family: ${(props) => props.theme.font.poppins};
    color: ${(props) => props.theme.colors.menu.tp};
  `,
  subtitle2: styled.p<IStyledTypographProps>`
    font-size: 0.88em;
    /* line-height: 17px; */
    font-weight: 400;
    text-decoration: underline;
    font-family: ${(props) => props.theme.font.roboto};
  `,



  title: styled.h1<IStyledTypographProps>`
    font-size: 2.5em;
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
    ${(props) => {
      switch (props.$theme) {
        case 'dark':
          return css`
            color: ${(props) => props.theme.colors.neutral.c1};
          `;
        default:
          return css`
            color: ${(props) => props.theme.colors.neutral.c10};
          `;
      }
    }}
  `,
  subtitle: styled.h2<IStyledTypographProps>`
    font-size: 2em;
    font-weight: 450;
    font-family: ${(props) => props.theme.font.roboto};
    ${(props) => {
      switch (props.$theme) {
        case 'dark':
          return css`
            color: ${(props) => props.theme.colors.neutral.c3};
          `;
        default:
          return css`
            color: ${(props) => props.theme.colors.neutral.c9};
          `;
      }
    }}
  `,
  titleH3: styled.h3<IStyledTypographProps>`
    font-size: 2em;
    font-weight: 500;
    font-family: ${(props) => props.theme.font.poppins};

    ${(props) => {
      switch (props.$theme) {
        case 'dark':
          return css`
            color: ${(props) => props.theme.colors.neutral.c2};
          `;
        default:
          return css`
            color: ${(props) => props.theme.colors.neutral.c9};
          `;
      }
    }}
  `,

  body: styled.h3<IStyledTypographProps>`
    font-size: 2em;
    font-weight: 500;
    font-family: ${(props) => props.theme.font.poppins};

    ${(props) => {
      switch (props.$theme) {
        case 'dark':
          return css`
            color: ${(props) => props.theme.colors.neutral.c2};
          `;
        default:
          return css`
            color: ${(props) => props.theme.colors.neutral.c9};
          `;
      }
    }}
  `,
};

interface ITypographerProps {
  variant?: keyof typeof components;
  children: ReactNode;
}

// 'variant' o que será exibido de fato
export const Typography = ({ variant = 'h1', children }: ITypographerProps) => {
  const { theme } = useSystemThemeContext();

  const ContainerTypography = components[variant];
  return (
    <ContainerTypography $theme={theme.title}>{children}</ContainerTypography>
  );
};
