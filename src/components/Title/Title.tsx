import styled from 'styled-components';
import { ReactNode } from 'react';

const components = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  bodyBold: 'strong',
  body2: 'p',
  body2Bold: 'strong',
  legenda: 'p',
};

const estilos = {
  h1: `
    font-size: 40px; 
    font-weight: 600; 
    line-height: 48px; 
  `,
  h2: `
    font-size: 32px; 
    font-weight: 600; 
    line-height: 39px; 
  `,
  h3: `
    font-size: 24px; 
    font-weight: 500; 
    line-height: 29px; 
  `,
  body: `
    font-size: 20px; 
    font-weight: 400; 
    line-height: 24px; 
  `,
  bodyBold: `
    font-size: 20px; 
    font-weight: 700; 
    line-height: 24px; 
  `,
  body2: `
    font-size: 16px; 
    font-weight: 400; 
    line-height: 19px; 
  `,
  body2Bold: `
    font-size: 16px; 
    font-weight: 700; 
    line-height: 19px; 
  `,
  legenda: `
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  `,
  subtitle: `
    font-size: 14px; 
    font-weight: 400; 
    line-height: 17px; 
  `,
  subtitle2: `
    font-size: 14px; 
    font-weight: 400; 
    line-height: 17px; 
    text-decoration: underline;
  `,
};

interface TypographerProps {
  variant: keyof typeof estilos;
  component: keyof typeof components;
  children: ReactNode;
}
// sendo o component é o que será renderizado e 'variant' o que será exibido de fato
export const Typographer  = ({ variant, component = 'h1', children }: TypographerProps) => {
  const tag = components[component];
  const ComponentUsed = styled(tag)`
    ${estilos[variant]}
  `;
  return <ComponentUsed>{children}</ComponentUsed>;
};
