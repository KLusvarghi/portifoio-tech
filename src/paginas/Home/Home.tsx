import styled, { css } from 'styled-components';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { ModeButton } from '../../components/Icons/ModeButton';
// import { Rocket } from '../../components/Rocket/Rocket';

// const StyledRocket = styled.div`
//   cursor: pointer;
//   transition: 0.3s ease-in;
//   position: absolute;
//   right: 20px;
//   top: 86%;

//   &:hover {
//     transform: scale(1.04);
//   }
// `;

interface IStyledModeProps {
  $mode: string;
}

const StyledMode = styled.div<IStyledModeProps>`
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 16%;
  height: 54px;
  width: 54px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  ${(props) => {
    switch (props.$mode) {
      case 'dark':
        return css`
          background: linear-gradient(
            to left,
            ${(props) => props.theme.colors.buttonGradient.a},
            ${(props) => props.theme.colors.buttonGradient.b} 50%,
            ${(props) => props.theme.colors.buttonGradient.c} 75%
          );
        `;
      default:
        return css`
          background: linear-gradient(
            to left,
            ${(props) => props.theme.colors.buttonGradient.a} 9%,
            ${(props) => props.theme.colors.buttonGradient.b} 24%,
            ${(props) => props.theme.colors.buttonGradient.c} 100%
          );
        `;
    }
  }}
`;

const Home = () => {
  const { theme, setTheme } = useSystemThemeContext();

  const toggleTheme = () => {
    setTheme(theme.title == 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <StyledMode $mode={theme.title} onClick={() => toggleTheme()}>
        <ModeButton mode={theme.title} />
      </StyledMode>
    </>
  );
};

export default Home;
