import styled from 'styled-components';
import { AuxProps } from '../../types/auxProps';

const StyledBackground = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.colors.buttonGradientDark.a},
    ${(props) => props.theme.colors.buttonGradientDark.b},
    ${(props) => props.theme.colors.buttonGradientDark.c}
  );
  width: 100vw;
  min-height: 100vh;
`;

const Background = ({ children }: AuxProps) => {
  return <StyledBackground>{children}</StyledBackground>;
};

export default Background;
