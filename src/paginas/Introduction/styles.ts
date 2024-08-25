import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 84px;

  @media (max-width: 620px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 54px;
  justify-content: center;

  @media (max-width: 680px) {
    margin-top: -112px;
  }

  @media (max-width: 620px) {
    padding: 0 46px;
  }

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

export const ContainerContent = styled.div`
  max-width: 621px;
  padding-left: 62px;

  @media (max-width: 502px) {
    padding: 0;
    text-align: center;
  }
`;

// EFEITO DO HOVER DA IMAGEM EM ANDAMENTO
export const ContainerSvg = styled.img`
  width: 468px;
  height: 352px;
  transition: transform 0.3s ease;
  transform-origin: center center;

  /* Inclina a imagem para trás ao passar o mouse */
  &:hover {
    transform: rotateX(15deg);
  }

  @media (max-width: 1090px) {
    display: none;
  }
`;

// assim os icones de redes sociais fica sempre no canto
// export const StyeldContainerIcons = styled.div`
//   flex: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
//   max-width: 54px;

//   @media (max-width: 1536px) {
//   }
//     position: absolute;
//     top: 40%;
//     left: 54px;

//   @media (max-width: 460px) {
//     flex-direction: row;
//     position: static;
//     max-width: 100%;
//   }
// `;

// assim o icone do menu ficará grudado ao container de texto quando acima de 1536px
export const ContainerIcons = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 54px;

  @media (max-width: 1536px) {
    position: absolute;
    top: 40%;
    left: 54px;
  }

  @media (min-width: 1536px) {
    flex-direction: column;
    order: -1;
  }

  @media (max-width: 502px) {
    flex-direction: row;
    position: static;
    max-width: 100%;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;

  @media (max-width: 680px) {
    justify-content: flex-start;
  }

  @media (max-width: 502px) {
    justify-content: center;
  }
`;

// Animação
const animate = keyframes`
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-5px, -5px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  `;

export const ContainerNextArrow = styled.div`
  position: absolute;
  bottom: 6%;
  right: 50%;
  transform: translate(-50%, -50%);

  span {
    display: block;
    width: 16px;
    height: 16px;
    border-bottom: 2px solid ${(props) => props.theme.colors.header.a};
    border-right: 2px solid ${(props) => props.theme.colors.header.a};
    transform: rotate(45deg);
    margin: -8px;
    animation: ${animate} 2s infinite;
  }

  span:nth-child(2) {
    animation-delay: -0.2s;
  }
  span:nth-child(3) {
    animation-delay: -0.4s;
  }

  @media (max-width: 502px) {
    display: none;
  }
`;

const scrolling = keyframes`
  0% {
    transform: translateY(-10px);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(14px);
    opacity: 0;
  }
`;

export const ContainerNextmobile = styled.span`
  @media (max-width: 502px) {
    position: absolute;
    bottom: 2%;
    right: 48%;
    height: 40px;
    width: 25px;
    border-radius: 60px;
    border: 2px solid ${props => props.theme.colors.neutral.c7};
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      border-radius: 50%;
      background: ${props => props.theme.colors.neutral.c7};
      animation: ${scrolling} 2s infinite linear;
    }
  }
  @media (max-width: 401px) {
    display: none;
  }
`;
