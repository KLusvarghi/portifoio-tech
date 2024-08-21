import { ReactNode } from 'react';

export interface IChildrenProps {
  children?: ReactNode;
}

export interface ISvgProps {
  theme?: string;
  footer?: boolean
  hover?: boolean
}
