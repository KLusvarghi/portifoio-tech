import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { SystemThemeProviderTheme } from './context/systemTheme.tsx';

createRoot(document.getElementById('root')!).render(
    <SystemThemeProviderTheme>
      <App />
    </SystemThemeProviderTheme>
);
