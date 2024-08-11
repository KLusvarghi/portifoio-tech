import { ReactNode } from 'react';
import styled from 'styled-components';

const TagOutline = styled.span``;
const TagDefault = styled.span``;

interface AuxProps {
  children: ReactNode;
  variant?: 'default' | 'outline';
}

export const Tag = ({ children, variant = 'default' }: AuxProps) => {
  if (variant === 'outline') {
    return <TagOutline>{children}</TagOutline>;
  }
  return <TagDefault>{children}</TagDefault>;
};
