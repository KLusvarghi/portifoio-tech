import { ReactNode } from 'react';
import styled from 'styled-components';

interface ILinkProps {
  children: ReactNode;
  href: string;
  blank?: boolean;
}

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.primaries.a};
  font-weight: 700;
  text-decoration: none;
  width: 100%;
`;

export const Link = ({ children, href, blank = true }: ILinkProps) => {
  return (
    <StyledLink href={href} target={blank ? '_blank' : '_self'}>
      {children}
    </StyledLink>
  );
};
