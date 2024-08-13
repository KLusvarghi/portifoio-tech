import styled from 'styled-components';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { ModeButton } from '../../components/Icons/ModeButton';
import UseWindowSize from '../../hooks/useWindowSize';
import { Rocket } from '../../components/Rocket/Rocket';

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

const StyledDiv = styled.div`
  height: 100vh;
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

const Home = () => {
  const { theme, setTheme } = useSystemThemeContext();
  const width = UseWindowSize();

  return (
    <>
      {width >= 600 && (
        <StyledMode onClick={() => setTheme()}>
          <ModeButton mode={theme.title} />
        </StyledMode>
      )}
      <StyledDiv></StyledDiv>
      <StyledRocket>
        <Rocket />
      </StyledRocket>
    </>
  );
};

export default Home;
