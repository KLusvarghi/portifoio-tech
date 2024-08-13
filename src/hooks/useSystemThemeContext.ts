import { useContext } from 'react';
import { SystemThemeContext, IThemeContext } from '../context/systemTheme';

const useSystemThemeContext = (): IThemeContext => {
  return useContext(SystemThemeContext);
};

export default useSystemThemeContext;
