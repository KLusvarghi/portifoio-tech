import styled from 'styled-components';
import { autoRunStack } from '../../../styles/keyframes/keyframes';

interface IStyledStackProps {
  $length: number;
  $delay: number;
}

export const ContainerCarrosel = styled.div`
  position: relative;
  margin-top: 8px;
  height: 250px;
  display: flex;
  gap: 32px;
  align-items: center;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  --webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 10% 90%,
    transparent
  );

  &:hover {
    div {
      animation-play-state: paused;
      /* filter: grayscale(1); */
    }
  }

  @media (max-width: 680px) {
    margin-bottom: 80px;
  }
`;

export const ContainerImg = styled.div<IStyledStackProps>`
  position: absolute;
  left: max(calc(200px * 13), 100%);
  display: flex;
  gap: 20px;
  height: 130px;
  align-items: flex-end;
  border-radius: 5px;
  animation: ${autoRunStack} infinite linear;
  animation-duration: ${({ $length }) => `calc(${$length * 1.5}s)`};
  animation-delay: ${({ $delay, $length }) =>
    `calc(${(($length * 1.5) / $length) * ($length - $delay) - 18}s)`};

  &:hover {
  }
`;

export const Tag = styled.span`
  position: absolute;
  text-align: center;
  width: 100%;
  top: -36px;
`;

export const StackImg = styled.img`
  white-space: nowrap;
  transition: 0.2s ease-in;
  position: relative;

  &:hover {
    cursor: pointer;
    transform: scale(1.525);
    /* filter: grayscale(0) !important; */
  }

  @media (max-width: 600px) {
    height: 70%;
  }
`;
