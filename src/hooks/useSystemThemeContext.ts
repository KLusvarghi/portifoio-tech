import { useContext } from 'react';
import { SystemThemeContext, IThemeContextProps } from '../context/systemTheme';

const useSystemThemeContext = (): IThemeContextProps => {
  return useContext(SystemThemeContext);
};

export default useSystemThemeContext;
