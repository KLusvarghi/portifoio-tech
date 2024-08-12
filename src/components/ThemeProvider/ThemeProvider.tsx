import { ThemeProvider } from 'styled-components';
import { AuxProps } from '../../types/auxProps';

const theme = {
  colors: {
    branco: '#FFF',
    atencao: '#FF0E0E',
    stackIcon: 'rgba(34,94,132,80)',
    overlay: 'rgba(0,0,0,29)',
    light: '#EBEAF9',
    formColor: '#F7F7F8',
    form: '#11213F',
    tecnologyStrokeLight: '#FCFCFC',
    tecnologyStrokeDark: '#122442',
    bgGradient: {
      a: '#081324',
      b: '#162849',
    },
    gradientLigthButton: {
      a: '#FFFFFF',
      b: '#CAD2E0',
      c: '#AFBACC',
    },
    buttonGradientDark: {
      a: '#081324',
      b: '#091426',
      c: '#0E1E37',
    },
    buttonGradientLight: {
      a: '#',
      b: '#',
      c: '#',
    },
    primaries: {
      a: '#225E84',
    },
    secondary: {
      b: '#FDF8F8',
      c: '#EBFCF9',
    },
    neutral: {
      c0: '#FFFFFF',
      c1: '#F4F5F6',
      c2: '#E8EBED',
      c3: '#DEE0E2',
      c4: '#C1C4C8',
      c5: '#AAAEB6',
      c6: '#999CA4',
      c7: '#73777D ',
      c8: '#5D616B',
      c9: '#404447',
      c10: '#242526',
      c11: '#121212',
      c12: '#000000',
    },
    dark: {
      a: '#0D1E39',
      b: '#B61B00',
    },
  },
  spacing: {
    xxs: '4px',
    xs: '8px',
    s: '16px',
    l: '32px',
    xl: '48px',
    xxl: '64px',
  },
  borderRadius: {
    xxs: '5px',
    xs: '8px',
  },
  font: {
    poppins: "'Poppins', sans-serif",
    roboto: "'Roboto', sans-serif",
    montserrat: "'Montserrat', sans-serif",
  },
};

export const ProviderTheme = ({ children }: AuxProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
