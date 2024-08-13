import { createContext } from 'react';
import { AuxProps } from '../types/auxProps';
import { DefaultTheme } from 'styled-components/dist/types';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import usePersistedState from '../hooks/usePeristedState';

export interface IThemeContextProps {
  theme: DefaultTheme;
  setTheme: () => void;
}

export const SystemThemeContext = createContext<IThemeContextProps>({
  theme: dark,
  setTheme: () => null,
});

export const SystemThemeProvider = ({ children }: AuxProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const handleSetTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const context = {
    theme,
    setTheme: handleSetTheme,
  };

  return (
    <SystemThemeContext.Provider value={context}>
      {children}
    </SystemThemeContext.Provider>
  );
};
