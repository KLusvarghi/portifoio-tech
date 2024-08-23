import styled from 'styled-components';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { ModeButton } from '../../components/Icons/ModeButton';
import UseWindowSize from '../../hooks/useWindowSize';
import { Rocket } from '../../components/Rocket/Rocket';
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import { useRef, useState } from 'react';
import useWindowPositionY from '../../hooks/useWindowPositionY';


const StyledRocket = styled.div`
  cursor: pointer;
  transition: 0.3s ease-in;
  position: fixed;
  right: 20px;
  top: 86%;

  &:hover {
    transform: scale(1.04);
  }
`;

const StyledMode = styled.div`
  cursor: pointer;
  position: fixed;
  right: 0px;
  top: 22%;
  height: 54px;
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  background: linear-gradient(
    to left,
    ${(props) => props.theme.colors.bgGradient.a},
    ${(props) => props.theme.colors.bgGradient.b} 50%,
    ${(props) => props.theme.colors.bgGradient.c} 75%
  );
`;

const StyledContainer = styled.div`

  
`;

const Home = () => {
  const { theme, setTheme } = useSystemThemeContext();
  const [visible, setVisible] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const width = UseWindowSize();
  const pageY = useWindowPositionY();

  const handleChange = () => {
    const introContainer = homeRef.current?.offsetHeight;
    if (introContainer && pageY >= introContainer) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  window.addEventListener('scroll', handleChange);

  const scrollToTop = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    setVisible(false);
  };

  return (
    <StyledContainer>
      {width >= 600 && (
        <>
          <StyledMode
            onClick={() => {
              setTheme();
            }}
          >
            <ModeButton mode={theme.title} />
          </StyledMode>
          {visible && (
            <StyledRocket onClick={scrollToTop}>
              <Rocket />
            </StyledRocket>
          )}
        </>
      )}
      <Introduction homeRef={homeRef} />
      <About />
    </StyledContainer>
  );
};

export default Home;
