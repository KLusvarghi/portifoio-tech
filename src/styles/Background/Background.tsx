import styled from 'styled-components';
import { IChildrenProps } from '../../types/auxProps';

const ContainerBackground = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.colors.bgGradient.a},
    ${(props) => props.theme.colors.bgGradient.b}
    );
    /* ${(props) => props.theme.colors.bgGradient.c} */
  /* width: 100vw; */
  /* min-width: 100vw; */
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Background = ({ children }: IChildrenProps) => {
  return <ContainerBackground>{children}</ContainerBackground>;
};
