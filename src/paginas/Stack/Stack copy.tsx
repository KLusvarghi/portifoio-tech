import { Title } from '../../components/Typography/Title';
import cssSvg from './assets/css.svg';
// import figmaBorderSvg from './assets/figma.svg';
import figmaSvg from './assets/figma-border.svg';
import gitSvg from './assets/git.svg';
import githubSvg from './assets/github.svg';
import htmlSvg from './assets/html.svg';
import javascriptSvg from './assets/javascript.svg';
import nextjsSvg from './assets/nextjs.svg';
import reactSvg from './assets/react.svg';
import sapSvg from './assets/sap.svg';
import sassSvg from './assets/sass.svg';
import tailwindSvg from './assets/tailwind.svg';
import typescriptSvg from './assets/typescript.svg';
import vscodeSvg from './assets/vscode.svg';
import {
  Main,
  Wrapper,
  ContainerCarrosel,
  ContaienrImg,
  StackImg,
} from './styles';
import UseWindowSize from '../../hooks/useWindowSize';

export const Stack = () => {
  const width = UseWindowSize();

  const svgFiles = [
    { index: 1, path: cssSvg, name: 'CSS' },
    { index: 2, path: figmaSvg, name: 'Figma' },
    { index: 3, path: gitSvg, name: 'Git' },
    { index: 4, path: githubSvg, name: 'Github' },
    { index: 5, path: htmlSvg, name: 'Html' },
    { index: 6, path: javascriptSvg, name: 'Javascript' },
    { index: 7, path: nextjsSvg, name: 'NextJs' },
    { index: 8, path: reactSvg, name: 'React' },
    { index: 9, path: sapSvg, name: 'SAP' },
    { index: 10, path: sassSvg, name: 'SASS' },
    { index: 11, path: tailwindSvg, name: 'Tailwind' },
    { index: 12, path: typescriptSvg, name: 'Typescript' },
    { index: 13, path: vscodeSvg, name: 'Vscode' },
  ];

  return (
    <Main id="stack">
      <Title
        title="Minha Stack de tecnologias"
        subtitle="Aqui estão as linguagens, tecnologias e metodologias que detenho conhecimento e estudo diariamente"
        position={width >= 1012 ? 'flex-start' : 'center'}
      />
      <Wrapper>
        <ContainerCarrosel>
          {svgFiles.map(({ index, path, name }) => (
            <ContaienrImg key={index}>
              <StackImg
                $delay={index}
                $length={svgFiles.length}
                src={path}
                alt={`SVG ${name}`}
              />
            </ContaienrImg>
          ))}
        </ContainerCarrosel>
      </Wrapper>
    </Main>
  );
};

export default Stack;
