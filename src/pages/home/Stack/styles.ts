import styled, { keyframes } from 'styled-components';

interface IStyledStackProps {
  $length: number;
  $delay: number;
}

export const Wrapper = styled.div`
  overflow: hidden;
  margin-top: 60px;
  position: relative;
  /* padding-bottom: 130px; */
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  --webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 10% 90%,
    transparent
  );
`;

const infiniteScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const ContainerCarrosel = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  /* Adicione um contêiner interno para a animação contínua */

  .carousel-inner {
    display: flex;
    width: 200%; /* Duplique a largura do contêiner para incluir as imagens duplicadas */
  }

  @media (max-width: 502px) {
    .carousel-inner {
      width: 400%; /* Ajuste a largura para mais imagens conforme necessário */
    }
  }
`;

export const ContaienrImg = styled.div`
  flex: 1 0 auto;
  min-width: 120px; /* Ajuste conforme o tamanho das suas imagens */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StackImg = styled.img<IStyledStackProps>`
  width: 100%; /* Ajuste o tamanho das imagens conforme necessário */
  animation: ${infiniteScroll} 15s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  cursor: pointer;

  &:hover {
    filter: grayscale(0) !important;
    transform: scale(1.08);
  }

  @media (max-width: 675px) {
    max-width: 70px;
  }
`;
