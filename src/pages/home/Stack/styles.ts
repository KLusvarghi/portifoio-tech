import styled, { css } from 'styled-components';
import { autoRunStack } from '../../../styles/keyframes/keyframes';

interface IStyledStackProps {
  $length: number;
  $delay: number;
  $active: boolean;
}

export const Container = styled.div`
  @media (min-width: 1100px) {
    &:hover {
      .item {
        &:hover {
          filter: grayscale(0) !important;
          img {
            transition: 0.2s ease-in;
            transform: scale(1.2);
          }
        }
      }
    }
  }
`;

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

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }

  ${(props) =>
    props.$active &&
    css`
      animation-play-state: paused;
      filter: grayscale(1);
      cursor: pointer;
    `}
`;

export const Tag = styled.span`
  text-align: center;
  width: 100%;

  @media (min-width: 1100px) {
    position: absolute;
    text-align: center;
    width: 100%;
    top: -36px;
  }
`;

export const StackImg = styled.img`
  white-space: nowrap;
  position: relative;

  @media (max-width: 600px) {
    height: 70%;
  }
`;
