import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import UseWindowSize from '../../hooks/useWindowSize';
import { RefProps } from '../../types/auxProps';
import { Link as LinkScroll } from 'react-scroll';
import { flight, rotate } from '../../styles/keyframes/keyframes';

interface IStyledRocketProps {
  $visible: boolean;
  $started: boolean;
}

const StyledRocket = styled.div<IStyledRocketProps>`
  z-index: 1001;
  cursor: pointer;
  transition: 0.2s ease-in;
  position: fixed;
  right: 20px;
  bottom: 30px;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  animation: ${({ $started }) =>
    $started
      ? css`
          ${flight} .5s ease-in forwards
        `
      : css`
          ${rotate} .5s ease-out
        `};

  &:hover {
    transform: scale(1.125);
  }
`;

export const Rocket = ({ refContainer }: RefProps) => {
  const width = UseWindowSize();
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introContainerHeight = refContainer.current?.offsetHeight || 0;
      if (window.scrollY >= introContainerHeight) {
        setVisible(true);
      } else {
        setAnimationStarted(false);
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [refContainer]);

  if (width >= 670) {
    return (
      <StyledRocket
        $started={animationStarted}
        $visible={visible}
        ref={rocketRef}
      >
        <LinkScroll
          to="intro"
          spy={true}
          smooth={true}
          offset={0}
          duration={360}
          isDynamic={true}
          onClick={() => setAnimationStarted(true)}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="27.5"
              cy="27.5"
              r="26"
              stroke="#225E84"
              strokeWidth="3"
            />
            <path
              d="M10.8213 43V31.3943C10.8213 30.7414 10.9899 30.1211 11.327 29.5335C11.6642 28.9459 12.1331 28.4725 12.7338 28.1134L15.0713 26.6933C15.3192 29.4356 15.7088 31.7698 16.24 33.6959C16.7713 35.622 17.6036 37.7603 18.7369 40.1108L10.8213 43ZM21.9244 39.0825C20.6848 36.9278 19.764 34.6426 19.1619 32.2268C18.5598 29.811 18.2588 27.3136 18.2588 24.7345C18.2588 20.6538 19.1357 16.81 20.8895 13.2033C22.6434 9.59656 24.954 6.86213 27.8213 5C30.69 6.86082 33.0013 9.59526 34.7552 13.2033C36.509 16.8113 37.3852 20.6551 37.3838 24.7345C37.3838 27.2809 37.0827 29.7542 36.4807 32.1543C35.8786 34.5545 34.9577 36.8638 33.7182 39.0825H21.9244ZM27.8213 25.3711C28.99 25.3711 29.9909 24.9879 30.8239 24.2213C31.6569 23.4548 32.0727 22.5322 32.0713 21.4536C32.0699 20.375 31.6541 19.4531 30.8239 18.6878C29.9937 17.9226 28.9929 17.5387 27.8213 17.5361C26.6497 17.5335 25.6495 17.9174 24.8208 18.6878C23.992 19.4583 23.5755 20.3802 23.5713 21.4536C23.567 22.527 23.9835 23.4496 24.8208 24.2213C25.658 24.9931 26.6582 25.3764 27.8213 25.3711ZM44.8213 43L36.9057 40.1108C38.039 37.7603 38.8713 35.622 39.4025 33.6959C39.9338 31.7698 40.3234 29.4356 40.5713 26.6933L42.9088 28.1134C43.5109 28.4725 43.9805 28.9459 44.3177 29.5335C44.6548 30.1211 44.8227 30.7414 44.8213 31.3943V43Z"
              fill="#225E84"
            />
          </svg>
        </LinkScroll>
      </StyledRocket>
    );
  }
};
