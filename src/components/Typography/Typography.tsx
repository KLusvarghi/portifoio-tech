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
    line-height: 40px; 
  `,
  h3: `
    font-size: 24px; 
    font-weight: 500; 
    line-height: 36px; 
  `,
  body: `
    font-size: 20px; 
    font-weight: 400; 
    line-height: 26px; 
  `,
  bodyBold: `
    font-size: 20px; 
    font-weight: 700; 
    line-height: 26px; 
  `,
  body2: `
    font-size: 16px; 
    font-weight: 400; 
    line-height: 24px; 
  `,
  body2Bold: `
    font-size: 16px; 
    font-weight: 700; 
    line-height: 24px; 
  `,
  subtitle: `
    font-size: 14px; 
    font-weight: 400; 
    line-height: 20px; 
  `,
  subtitle2: `
    font-size: 14px; 
    font-weight: 400; 
    line-height: 17px; 
    text-decoration: underline;
  `,
};

interface TypographerProps {
  variant?: keyof typeof estilos;
  component?: keyof typeof components;
  children: ReactNode;
}
// sendo o component é o que será renderizado e 'variant' o que será exibido de fato
export const Typography  = ({ variant = 'h1', component = 'h1', children }: TypographerProps) => {
  const tag = components[component];
  const ComponentUsed = styled(tag)`
    ${estilos[variant]}
  `;
  return <ComponentUsed>{children}</ComponentUsed>;
};
