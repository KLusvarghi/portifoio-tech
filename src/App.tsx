import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from './router/router';
import GlobalStyles from './styles/GlobalStyles/GlobalStyles';
import Background from './styles/Background/Background';
import useSystemThemeContext from './hooks/useSystemThemeContext';

function App() {
  const { theme } = useSystemThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Background>
        <RouterProvider router={router} />
      </Background>
    </ThemeProvider>
  );
}

export default App;
