import './App.css'
import { RouterProvider } from 'react-router-dom';
import { ProviderTheme } from './components/ThemeProvider/ThemeProvider';
import { router } from './router/router';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import Background from './components/Background/Background';

function App() {
  return (
    <ProviderTheme>
      <GlobalStyles />
      <Background>
        <RouterProvider router={router} />
      </Background>
    </ProviderTheme>
  );
}

export default App;
