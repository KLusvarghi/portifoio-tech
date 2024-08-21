import styled, { keyframes } from 'styled-components';

export const StyledMain = styled.main`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledContainer = styled.div`
  /* padding: 0 54px; */
`;
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  /* gap: 54px; */
`;
export const StyeldContainerIcons = styled.div`
  position: absolute;
  top: 40%;
`;
export const StyledWrapperIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const StyledLinkIcon = styled.a`
  cursor: pointer;
`;
export const StyledContainerContent = styled.div`
  margin: 0 48px 0 112px;
`;
export const StyledWrapperContent = styled.div`
  /* padding: 0 54px; */
`;

export const StyledContainerButton = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
`;

// EFEITO DO HOVER DA IMAGEM EM ANDAMENTO
export const StyleSvgIlustration = styled.img`
  width: 100%;
  transition: transform 0.3s ease; /* Suaviza a transformação */
  transform-origin: center center;

  &:hover{
    transform: rotateX(15deg); /* Inclina a imagem para trás ao passar o mouse */

  }
`;

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

export const StyledNext = styled.div`
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
`;
