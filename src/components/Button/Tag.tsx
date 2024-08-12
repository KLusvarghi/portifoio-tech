import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ITagProps {
  type: number;
  mode: 'dark' | 'light';
}

const StyledTag = styled.span<ITagProps>`
  padding: 8px 14px;
  /* letter-spacing: 0.8px; */
  transition: 0.3s ease-in-out;
  font-weight: 500;
  font-family: ${(props) => props.theme.font.poppins};
  border-radius: ${(props) => props.theme.borderRadius.xxs};
  cursor: grab;
  text-transform: capitalize;
  ${({ type }) => type == 1 && `text-transform: uppercase;`}
  &:hover {
    ${(props) => {
      switch (props.mode) {
        case 'dark':
          return css`
            box-shadow: 0 0 0 1px ${(props) => props.theme.colors.bgGradient.b},
              0 0 0 2px ${(props) => props.theme.colors.bgGradient.a};
          `;
        default:
          return css`
            box-shadow: 0 0 0 1px ${(props) => props.theme.colors.neutral.c4},
              0 0 0 2px ${(props) => props.theme.colors.neutral.c3};
          `;
      }
    }}
  }
`;

const TagDark = styled(StyledTag)`
  border: 2px solid ${(props) => props.theme.colors.tecnologyStrokeDark};
  color: ${(props) => props.theme.colors.neutral.c4};
`;

const TagLight = styled(StyledTag)`
  color: ${(props) => props.theme.colors.neutral.c6};
  background: ${(props) => props.theme.colors.tecnologyStrokeLight};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

interface AuxProps {
  children: ReactNode;
  type?: number;
  mode?: 'dark' | 'light';
}

export const Tag = ({ children, mode = 'dark', type = 1 }: AuxProps) => {
  if (mode === 'dark') {
    return (
      <TagDark mode={mode} type={type}>
        {children}
      </TagDark>
    );
  }
  return (
    <TagLight mode={mode} type={type}>
      {children}
    </TagLight>
  );
};
