import { ReactNode } from 'react';
import styled from 'styled-components';

interface ILinkProps {
  children: ReactNode;
  url: string;
  blank?: boolean;
}

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.primaries.a};
  font-weight: 700;
  text-decoration: none;
  width: 100%;
`;

export const Link = ({ children, url, blank = true }: ILinkProps) => {
  return (
    <StyledLink href={url} target={blank ? '_blank' : '_self'}>
      {children}
    </StyledLink>
  );
};
