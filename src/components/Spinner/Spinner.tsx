import styled from 'styled-components';
import { spinner } from '../../styles/keyframes/keyframes';

const ContaienrSpinner = styled.span`
  width: 52px;
  height: 52px;
  border: 6px solid ${(props) => props.theme.colors.neutral.c3};
  border-top-color: ${(props) => props.theme.colors.primaries.a};
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`;

const Spinner = () => {
  return <ContaienrSpinner />;
};

export default Spinner;
