import { createContext } from 'react';
import { AuxProps } from '../types/auxProps';
import { DefaultTheme } from 'styled-components/dist/types';
import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import usePersistedState from '../hooks/usePeristedState';

export interface IThemeContext {
  theme: DefaultTheme;
  setTheme: (tema: string) => void;
}

export const SystemThemeContext = createContext<IThemeContext>({
  theme: dark,
  setTheme: () => null,
});

export const SystemThemeProvider = ({ children }: AuxProps) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);


  const handleSetTheme = (tema: string) => {
    setTheme(tema === 'light' ? light : dark);
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
