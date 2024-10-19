import styled from 'styled-components';
import { loader, loaderInner } from '../../styles/keyframes/keyframes';

const Square = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid #Fff;
  top: 50%;
  animation: ${loader} 2s infinite ease;
`;

const Inner = styled.svg`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: ${loaderInner} 2s infinite ease-in;
`;

const Spinner = () => {
  return (
    <Square>
      <Inner></Inner>
    </Square>
  );
};

export default Spinner;
