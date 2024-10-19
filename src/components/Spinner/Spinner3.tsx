import styled from 'styled-components';
import { color, dash, spinner } from '../../styles/keyframes/keyframes';

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const Svg = styled.svg`
  animation: ${spinner} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite, ${color} 6s ease-in-out infinite;
  stroke-linecap: round;
`;

const Spinner = () => {
  return (
    <Loader>
      <Svg viewBox="25 25 50 50">
        <Circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </Svg>
    </Loader>
  );
};

export default Spinner;
