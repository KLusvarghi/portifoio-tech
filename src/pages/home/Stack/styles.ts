import styled from 'styled-components';
import { autoRunStack } from '../../../styles/keyframes/keyframes';

interface IStyledStackProps {
  $length: number;
  $delay: number;
}

export const Wrapper = styled.div`
  margin-top: 60px;
  position: relative;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  --webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 10% 90%,
    transparent
  );
  height: 120px;

  @media (max-width: 680px) {
    margin-bottom: 80px;
  }
  /* height: 380px; */

`;

export const ContainerCarrosel = styled.div`
  display: flex;
  gap: 32px;
  position: relative;
  width: 300%; //arrumar issooooooooooooooooo
  /* height: 580px; */

  &:hover {
    filter: grayscale(1);

    div {
      animation-play-state: paused;

      img{
        
      }
    }
  }
`;

export const ContainerImg = styled.div`
  position: relative;
  white-space: nowrap;
  transition: 0.2s ease-in;
  text-align: center;
  height: 100%;

  /* animation: ${autoRunStack} 13s infinite linear; */
  &:hover {
    
    img {
      filter: grayscale(0) !important;
      cursor: pointer;
    }
  }
`;

export const Tag = styled.span`
  position: absolute;
  /* width: 100%; */
  /* top: -10px; */
  justify-content: center;
  display: flex;
`;

export const StackImg = styled.img<IStyledStackProps>`
  white-space: nowrap;
  transition: 0.2s ease-in;
  position: relative;


  &:hover {
    /* filter: grayscale(0) !important; */
    transform: scale(1.525);
  }

  @media (max-width: 600px) {
    width: 70%;
  }
`;
