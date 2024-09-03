import { ReactNode } from 'react';
import styled from 'styled-components';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';

interface ITagProps {
  children: ReactNode;
  capitalize?: boolean;
  mode?: 'dark' | 'light';
}
interface IStyledTagProps {
  $capitalize: boolean;
}

const StyledTag = styled.span<IStyledTagProps>`
  padding: 8px 14px;
  letter-spacing: 0.8px;
  transition: 0.3s ease-in-out;
  font-weight: 500;
  font-family: ${(props) => props.theme.font.poppins};
  border-radius: ${(props) => props.theme.borderRadius.xxs};
  text-transform: capitalize;
  ${({ $capitalize }) => !$capitalize && `text-transform: uppercase;`}
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.bgGradient.b},
  0 0 0 2px ${(props) => props.theme.colors.bgGradient.a};
`;

const TagDark = styled(StyledTag)`
  border: 2px solid ${(props) => props.theme.colors.tecnologyStroke};
  color: ${(props) => props.theme.colors.neutral.c4};
`;

const TagLight = styled(StyledTag)`
  color: ${(props) => props.theme.colors.neutral.c6};
  background: ${(props) => props.theme.colors.tecnologyStroke};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Tag = ({ children, capitalize = true }: ITagProps) => {
  const { theme } = useSystemThemeContext();

  if (theme.title === 'dark') {
    return <TagDark $capitalize={capitalize}>{children}</TagDark>;
  }
  return <TagLight $capitalize={capitalize}>{children}</TagLight>;
};
