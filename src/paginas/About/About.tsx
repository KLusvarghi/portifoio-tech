import { Title } from '../../components/Typography/Title';
import { Typography } from '../../components/Typography/Typography';
import euImg from './assets/eu.png';
import { useState } from 'react';
import { useRef } from 'react';
import { Button } from '../../components/Button/Button';
import UseWindowSize from '../../hooks/useWindowSize';
import { instagram, linkedin } from '../../utils/links';
import {
  Main,
  Wrapper,
  ContainerContent,
  TextBold,
  Img,
  LinkText,
  ContainerAcessibility,
  ContainerTypograph,
  ContainerInformations,
  ContainerXp,
  ContaienrAttribute,
} from './styles';

const About = () => {
  const width = UseWindowSize();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hover, setHover] = useState(false);
  const accRef = useRef<HTMLSpanElement | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    if (accRef.current) {
      const spanElement = accRef.current;
      // Atualiza a posição do elemento com base nas coordenadas do mouse
      const offsetX = -spanElement.offsetWidth / 2; // ou outro valor para ajustar horizontalmente
      const offsetY = -spanElement.offsetHeight / 2 + 10; // +10px para mover mais para baixo
      spanElement.style.left = `${e.clientX + offsetX}px`;
      spanElement.style.top = `${e.clientY + offsetY + 400}px`;
    }
  }

  return (
    <Main id="about">
      {/* {hover && <StyledSpan ref={accRef}>Acessibilidade</StyledSpan>} */}
      <Title
        title="Sobre mim"
        subtitle="Aqui você encontrará mais informações sobre mim"
      />
      <Wrapper>
        {width >= 1012 && <Img src={euImg} alt="Imagem de Kauã Lusvarghi" />}
        <ContainerContent>
          <ContainerTypograph>
            <Typography variant="h3">Saudações, um pouco sobre mim!</Typography>
            <Typography variant="body">
              Me chamo Kauã Ortolani Lusvarghi,{' '}
              <ContainerAcessibility
                ref={accRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                sou um homem de pele branca com cabelos castanhos e cacheado.
              </ContainerAcessibility>{' '}
              Além de ser formado em TI, sou um desenvolvedor web frontend
              focado em resolver soluções práticas e eficientes com o que há de
              mais atual no mercado. No momento estou me aprofundadndo cada vez
              mais em <TextBold>Next.js</TextBold>,
              <TextBold>Typescrip</TextBold>,{' '}
              <TextBold>Styled-component</TextBold>,{' '}
              <TextBold>Tailwind</TextBold> e <TextBold>PostgreSQL</TextBold>.
            </Typography>
            <Typography variant="body">
              Explore alguns dos projetos que realizei na seção correspondente.
              Convido você a se conectar ou me seguir no{' '}
              <LinkText href={linkedin} target="_blank">
                LinkedIn
              </LinkText>{' '}
              e{' '}
              <LinkText href={instagram} target="_blank">
                Instagram
              </LinkText>
              . Estou aberto a novas oportunidades profissionais onde possa
              contribuir, aprender e crescer. Caso tenha uma oportunidade que se
              alinhe às minhas habilidades e experiência, por favor, não hesite
              em entrar em contato.
            </Typography>
          </ContainerTypograph>
          <ContainerInformations>
            <ContainerXp>
              <ContaienrAttribute>
                <Typography>3+</Typography>
                <Typography variant="body">
                  Anos <br /> de experiência
                </Typography>
              </ContaienrAttribute>
              <ContaienrAttribute>
                <Typography>35+</Typography>
                <Typography variant="body">
                  Projetos
                  <br /> no GitHub
                </Typography>
              </ContaienrAttribute>
            </ContainerXp>
            <Button>Baixar CV</Button>
          </ContainerInformations>
        </ContainerContent>
      </Wrapper>
    </Main>
  );
};

export default About;
