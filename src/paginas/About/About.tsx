import styled from 'styled-components';
import { Title } from '../../components/Typography/Title';
import { Typography } from '../../components/Typography/Typography';
import euImg from './assets/eu.png';
import { useState } from 'react';
import { useRef } from 'react';
import { Button } from '../../components/Button/Button';

const StyleAbout = styled.div`
  margin-top: 120px;
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 80px;
`;
const StyledImg = styled.img``;
const StyledContent = styled.div``;

const StyledBold = styled.span`
  color: ${(props) => props.theme.colors.primaries.a};
  font-weight: 500;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaries.a};
  font-weight: 500;
  transition: 0.2s ease-in;

  &:hover {
    color: ${(props) => props.theme.colors.title.separator};
  }
`;

const StyledAcessibility = styled.span`
  cursor: pointer;
  padding: 12px 0;
`;

const StyledSpan = styled.span`
  position: absolute;
  /* right: 50%; */
  padding: 4px 12px;
  color: ${(props) => props.theme.colors.neutral.c1};
  background: ${(props) => props.theme.colors.neutral.c10};
  font-family: ${(props) => props.theme.font.poppins};
  border-radius: 5px;
  /* z-index: 2; */
  /* pointer-events: none; */

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 10%;
    width: 13px;
    height: 13px;
    background: ${(props) => props.theme.colors.neutral.c10};
    transform: rotate(45deg);
    /* z-index: 1; */
    /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); */
  }
`;

const StyledXp = styled.span``;

const About = () => {
  const linkedin =
    'https://www.linkedin.com/in/kau%C3%A3-ortolani-lusvarghi-422b141b4/';
  const instagram = 'https://www.instagram.com/lusvarghikaua/';

  const [hover, setHover] = useState(false);
  const accRef = useRef<HTMLSpanElement | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    if (accRef.current) {
      const spanElement = accRef.current;

      // Atualiza a posição do elemento com base nas coordenadas do mouse
      const offsetX = -spanElement.offsetWidth / 2; // ou outro valor para ajustar horizontalmente
      const offsetY = -spanElement.offsetHeight / 2 + 10; // +10px para mover mais para baixo

      spanElement.style.left = `${e.clientX + offsetX}px`;
      spanElement.style.top = `${e.clientY + offsetY + 500}px`;
    }
  }

  return (
    <StyleAbout id="about">
      {/* {hover && <StyledSpan ref={accRef}>Acessibilidade</StyledSpan>} */}
      <Title
        title="Sobre mim"
        subtitle="Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais na área de programação e tecnologia"
      />
      <StyledWrapper>
        <StyledImg src={euImg} />
        <StyledContent>
          <Typography variant="h3">Saudações, um pouco sobre mim!</Typography>
          <Typography variant="body">
            Me chamo Kauã Ortolani Lusvarghi,{' '}
            <StyledAcessibility
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHover(false)}
              onMouseEnter={() => setHover(true)}
            >
              sou um homem de pele branca com cabelos castanhos e cacheado.
            </StyledAcessibility>{' '}
            Além de ser formado em TI, sou um desenvolvedor web frontend focado
            em resolver soluções práticas e eficientes com o que há de mais
            atual no mercado. No momento estou me aprofundadndo cada vez mais em{' '}
            <StyledBold>Next.js</StyledBold>,<StyledBold>Typescrip</StyledBold>,{' '}
            <StyledBold>Styled-component</StyledBold>,{' '}
            <StyledBold>Tailwind</StyledBold> e{' '}
            <StyledBold>PostgreSQL</StyledBold>
          </Typography>
          <Typography variant="body">
            Explore alguns dos projetos que realizei na seção correspondente.
            Convido você a se conectar ou me seguir no{' '}
            <StyledLink href={linkedin} target="_blank">
              LinkedIn
            </StyledLink>{' '}
            e{' '}
            <StyledLink href={instagram} target="_blank">
              Instagram
            </StyledLink>
            . Estou aberto a novas oportunidades profissionais onde possa
            contribuir, aprender e crescer. Caso tenha uma oportunidade que se
            alinhe às minhas habilidades e experiência, por favor, não hesite em
            entrar em contato.
          </Typography>
          <div>
            <div>
              <StyledXp></StyledXp>
              <StyledXp></StyledXp>
            </div>
            <Button>Baixar CV</Button>
          </div>
        </StyledContent>
      </StyledWrapper>
    </StyleAbout>
  );
};

export default About;
