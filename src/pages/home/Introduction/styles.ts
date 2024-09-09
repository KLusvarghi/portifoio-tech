import styled from 'styled-components';
import {
  autoRunFreela,
  next,
  scrolling,
} from '../../../styles/keyframes/keyframes';

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 42px;

  @media (max-width: 620px) {
    padding: 0 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 54px;

  @media (max-width: 680px) {
    margin-top: -112px;
  }
`;

export const ContainerFreela = styled.div`
  width: 20rem;
  overflow: hidden;
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.freela.bg};
  border-radius: 40px;
  position: relative;
  transition: 0.3s ease-in-out;
  border: 1px solid ${(props) => props.theme.colors.freela.bg};
  margin-bottom: -32px;

  &:hover {
    transform: scale(1.055);
    border: 1px solid ${(props) => props.theme.colors.freela.border};
  }

  p {
    padding-left: 146px;
    white-space: nowrap;
    animation: ${autoRunFreela} 10s infinite linear;
    user-select: none;
    pointer-events: none;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      padding: 8px;
      border-radius: 100%;
      margin-right: 8px;
      background-color: ${(props) => props.theme.colors.green};
      border: 1px solid ${(props) => props.theme.colors.green};
      margin-top: -2px;
    }
  }
`;

export const ContainerContent = styled.div`
  text-align: center;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  margin-bottom: 12px;

  @media (max-width: 1130px) {
    h1,
    h2 {
      font-size: 2.5em;
    }
  }

  @media (max-width: 624px) {
    h1,
    h2 {
      font-size: 2em;
    }
  }
`;

export const ContainerDescription = styled.div`
  max-width: 821px;
  align-self: center;

  @media (max-width: 1130px) {
    max-width: 621px;
  }

  @media (max-width: 624px) {
    p {
      font-size: 1em;
    }
  }
`;

export const ContainerIcons = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 54px;
  flex-direction: row;
  position: static;
  max-width: 100%;
`;

export const ContainerButton = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  justify-content: center;
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
    animation: ${next} 2s infinite;
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

export const ContainerNextmobile = styled.span`
  @media (max-width: 502px) {
    position: absolute;
    bottom: 2%;
    right: 48%;
    height: 40px;
    width: 25px;
    border-radius: 60px;
    border: 2px solid ${(props) => props.theme.colors.neutral.c7};
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      width: 6px;
      height: 6px;
      position: absolute;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.neutral.c7};
      animation: ${scrolling} 2s infinite linear;
    }
  }
  @media (max-width: 401px) {
    display: none;
  }
`;
