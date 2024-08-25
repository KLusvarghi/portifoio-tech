import styled from 'styled-components';
import { Title } from '../../components/Typography/Title';
import cssSvg from './assets/css.svg';
import figmaBorderSvg from './assets/figma-border.svg';
import figmaSvg from './assets/figma.svg';
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

const Main = styled.div`
  margin: 120px auto 0;
`;
const Wrapper = styled.div``;
const ContainerCarrosel = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
`;

const StackImg = styled.img``;

export const Stack = () => {
  const svgFiles = [
    { index: 1, path: cssSvg },
    { index: 2, path: figmaBorderSvg },
    { index: 3, path: figmaSvg },
    { index: 4, path: gitSvg },
    { index: 5, path: githubSvg },
    { index: 6, path: htmlSvg },
    { index: 7, path: javascriptSvg },
    { index: 8, path: nextjsSvg },
    { index: 9, path: reactSvg },
    { index: 10, path: sapSvg },
    { index: 11, path: sassSvg },
    { index: 12, path: tailwindSvg },
    { index: 13, path: typescriptSvg },
    { index: 14, path: vscodeSvg },
  ];

  

  return (
    <Main id="stack">
      <Title
        title="Minha Stack de tecnologias"
        subtitle="Aqui estão as linguagens e tecnologias que detenho conhecimento e estudo diariamente"
        position="flex-start"
      />
      <Wrapper>
        <ContainerCarrosel>
          {svgFiles.map(({ index, path }) => (
            <StackImg key={index} src={path} alt={`SVG ${index}`} />
          ))}
        </ContainerCarrosel>
      </Wrapper>
    </Main>
  );
};

export default Stack;
