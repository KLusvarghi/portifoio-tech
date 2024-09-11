import { Title } from '../../../components/Typography/Title';
import cssSvg from './assets/css.svg';
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
import { Main } from '../../../styles/mainContainer';
import { IUseWindoSizeProps } from '../../../types/auxProps';
import { AnimatedSection } from '../../../components/AnimatedSection/AnimatedSection';
import { useState } from 'react';
import { Typography } from '../../../components/Typography/Typography';
import {
  Container,
  ContainerCarrosel,
  ContainerImg,
  Tag,
  StackImg,
} from './styles';

export const Stack = ({ width }: IUseWindoSizeProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      <AnimatedSection direction="toDown">
        <Title
          title="Minha Stack de tecnologias"
          subtitle="Aqui estão as linguagens, tecnologias e metodologias que detenho conhecimento e estudo diariamente"
          position={width >= 1012 ? 'flex-start' : 'center'}
        />
      </AnimatedSection>
      <Container>
        <ContainerCarrosel>
          {svgFiles.map(({ index, path, name }) => (
            <ContainerImg
              className="item"
              key={index}
              $delay={index}
              $length={svgFiles.length}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && width >= 1100 && (
                <Tag>
                  <Typography variant="body">{name}</Typography>
                </Tag>
              )}
              {width < 1100 && (
                <Tag>
                  <Typography variant="body">{name}</Typography>
                </Tag>
              )}
              <StackImg src={path} alt={`SVG ${name}`} />
            </ContainerImg>
          ))}
        </ContainerCarrosel>
      </Container>
    </Main>
  );
};

export default Stack;
