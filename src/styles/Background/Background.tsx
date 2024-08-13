import styled from 'styled-components';
import { AuxProps } from '../../types/auxProps';

const StyledBackground = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.colors.buttonGradient.a},
    ${(props) => props.theme.colors.buttonGradient.b},
    ${(props) => props.theme.colors.buttonGradient.c}
  );
  /* width: 100vw; */
  /* min-width: 100vw; */
  min-height: 100vh;
  overflow-x: hidden;
`;

const Background = ({ children }: AuxProps) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
