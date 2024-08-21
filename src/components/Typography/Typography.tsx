import styled from 'styled-components';
import { ReactNode } from 'react';

//  sendo o component é o que será renderizado
const components = {
  intro: styled.h1`
    font-size: 2.5em;
    line-height: 1.2;
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
    color: ${(props) => props.theme.colors.primaries.a};
    margin: 0;
  `,
  h1: styled.h1`
    font-size: 2.5em;
    line-height: 1.2;
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
    color: ${(props) => props.theme.colors.title.h1};
    margin: 0;
  `,
  h2: styled.h2`
    font-size: 32px;
    /* line-height: 2.5em; */
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
  `,
  h3: styled.h3`
    font-size: 1.5em;
    /* line-height: 2.2em; */
    font-weight: 500;
    font-family: ${(props) => props.theme.font.poppins};
  `,
  h4: styled.h1`
    font-size: 1.375em;
    /* line-height: 1.5em; */
    font-weight: 600;
    font-family: ${(props) => props.theme.font.poppins};
    color: ${(props) => props.theme.colors.footer.a};
  `,
  body: styled.p`
    font-size: 1.25em;
    /* line-height: 1.62em; */
    font-weight: 400;
    font-family: ${(props) => props.theme.font.roboto};
    color: ${(props) => props.theme.colors.title.p};
  `,
  bodyBold: styled.strong`
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
  body2Bold: styled.strong`
    font-size: 1em;
    /* line-height: 1.5em; */
    font-weight: 700;
    font-family: ${(props) => props.theme.font.roboto};
  `,
  body3: styled.p`
    font-size: 0.75em;
    /* line-height: 16px; */
    font-weight: 400;
    font-family: ${(props) => props.theme.font.roboto};
    color: ${(props) => props.theme.colors.footer.a};
  `,
  subtitle: styled.p`
    font-size: 0.88em;
    /* line-height: 1.25em; */
    font-weight: 400;
    font-family: ${(props) => props.theme.font.roboto};
  `,
  subtitle2: styled.p`
    font-size: 0.88em;
    /* line-height: 17px; */
    font-weight: 400;
    text-decoration: underline;
    font-family: ${(props) => props.theme.font.roboto};
  `,
};

interface ITypographerProps {
  variant?: keyof typeof components;
  children: ReactNode;
}

// 'variant' o que será exibido de fato
export const Typography = ({ variant = 'h1', children }: ITypographerProps) => {
  const ComponentUsed = components[variant];
  return <ComponentUsed>{children}</ComponentUsed>;
};
