import styled, { css, keyframes } from 'styled-components';

interface IStyledStackProps {
  $length: number;
  $delay: number;
}

interface IStyledTextProps {
  $theme: string;
  $x: number;
  $y: number;
}

export const Main = styled.div`
  margin: 120px auto 0;
  padding: 0 84px;

  @media (max-width: 1060px) {
    padding: 0 46px;
  }
  @media (max-width: 600px) {
    padding: 0 22px;
  }

  @media (max-width: 675px) {
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.5em;
    }
  }
  @media (max-width: 502px) {
    h1 {
      font-size: 1.5em;
    }
    h2 {
      font-size: 1em;
    }
  }
  @media (max-width: 384px) {
    h1 {
      font-size: 1.2em;
    }
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  margin-top: 36px;
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
    right: 100%;
  }
  100% {
    right: -100px;
  }
`;

export const ContainerCarrosel = styled.ul`
  /* position: relative; */
  display: flex;
  align-items: center;
  gap: 36px;
  padding: 22px 0;

  &:hover {
    animation-play-state: paused;
    img {
      filter: grayscale(1);
    }
  }
`;

export const ContaienrImg = styled.li`
  list-style: none;
  cursor: pointer;
  white-space: nowrap;

  min-height: 120px;
`;

export const StackImg = styled.img<IStyledStackProps>`
  /* display: inline-flex; */
  position: absolute;
  right: 100%;
  animation: ${infiniteScroll} 13s linear infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  &:hover {
    filter: grayscale(0) !important;
    transform: scale(1.08);
  }

  @media (max-width: 675px) {
    max-width: 70px;
  }
`;

export const TextTech = styled.p<IStyledTextProps>`
  position: absolute;
  z-index: 100;
  padding: 4px 8px;
  background: ${(props) => props.theme.colors.neutral.c1};
  font-size: 1em;
  font-weight: 400;
  font-family: ${(props) => props.theme.font.roboto};
  border-radius: 5px;

  /* arrumar */
  left: ${({ $x }) => $x - 100}px;
  top: ${({ $y }) => $y - 500}px;

  ${(props) => {
    switch (props.$theme) {
      case 'dark':
        return css`
          color: ${(props) => props.theme.colors.neutral.c4};
          background: ${(props) => props.theme.colors.neutral.c9};
        `;
      default:
        return css`
          color: ${(props) => props.theme.colors.neutral.c7};
          background: ${(props) => props.theme.colors.neutral.c3};
        `;
    }
  }}
`;
