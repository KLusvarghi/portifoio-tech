// para modificarmos apenas um propriedade (defaulttheme) e não o styled-components inteiro, nós temos que improtar ele antes
import 'styled-components';

// sendo um arquvo de definição de tipos, sendo acessivel por varios niveis da minha aplicação

// sobrescrevendo uma definição de tipos dentro do styled-component

declare module 'styled-components' {
  // passando o formato do meu tema e iremos sobrescerber o DefaultTheme apenas
  export interface DefaultTheme {
    title: string;
    colors: {
      stackIcon: string;
      overlay: string;
      tecnologyStroke: string;
      formBg: string;
      footer: string;
      header: {
        a: string;
      };
      intro: {
        a: string;
        b: string;
      };
      about: {
        a: string;
        b: string;
        xp: {
          a: string;
        };
      };
      title: {
        h1: string;
        p: string;
        separator: string;
      };
      project: {
        h2: string;
        p: string;
      };
      bgGradient: {
        a: string;
        b: string;
      };
      buttonGradient: {
        a: string;
        b: string;
        c: string;
      };
      primaries: {
        a: string;
      };
      secondary: {
        b: string;
        c: string;
      };
      neutral: {
        c0: string;
        c1: string;
        c2: string;
        c3: string;
        c4: string;
        c5: string;
        c6: string;
        c7: string;
        c8: string;
        c9: string;
        c10: string;
        c11: string;
        c12: string;
      };
      hover: {
        a: string;
        b: string;
      };
    };
    spacing: {
      xxs: string;
      xs: string;
      s: string;
      l: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      xxs: string;
      xs: string;
    };
    breakpoint: {
      mobile: string;
      mobileGrid: string;
      header: string;
    };
    font: {
      poppins: string;
      roboto: string;
      montserrat: string;
    };
  }
}
// depois de definir os tipos temos que falar para o tytpescript compilar esse aquivo junto com a nossa aplicação
