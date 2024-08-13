import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SystemThemeProvider } from './context/systemTheme.tsx';

createRoot(document.getElementById('root')!).render(
  <SystemThemeProvider>
    <App />
  </SystemThemeProvider>,
);
