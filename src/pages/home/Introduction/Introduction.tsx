// import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { GitHub } from '../../../components/Icons/GitHub';
import { Linkedin } from '../../../components/Icons/Linkedin';
import { Instagram } from '../../../components/Icons/Instagram';
import { Cv } from '../../../components/Icons/Cv';
import { Typography } from '../../../components/Typography/Typography';
import { Link as LinkScroll } from 'react-scroll';
import { Button } from '../../../components/Button/Button';
import image from './assets/ilustrationr.svg';
import { RefProps } from '../../../types/auxProps';
import {
  Main,
  Wrapper,
  ContainerIcons,
  ContainerContent,
  ContainerButton,
  ContainerSvg,
  ContainerNextArrow,
  ContainerNextmobile,
} from './styles';
import { WhatsApp } from '../../../components/Icons/WhatsApp';
import { AnimatedSection } from '../../../components/AnimatedSection/AnimatedSection';

const Introduction = ({ refContainer }: RefProps) => {
  const options = {
    spy: true,
    smooth: true,
    offset: -162,
    duration: 500,
    isDynamic: true,
  };

  return (
    <Main ref={refContainer} id="intro">
      <Wrapper>
        <AnimatedSection position="down">
          <ContainerContent>
            <Typography variant="body">E ai, eu me chamo</Typography>
            <div style={{ marginBottom: '12px' }}>
              <Typography>Kauã Lusvarghi</Typography>
              <Typography variant="intro">Web Developer</Typography>
            </div>
            <Typography variant="body">
              Sou um Engenheiro de Software especializado em frontend,
              apaixonado por desafios que me permitem criar interfaces
              intuitivas e eficientes a partir de código.
            </Typography>
            <ContainerButton>
              <LinkScroll to="contact" {...options}>
                <Button variant="outline">Contato</Button>
              </LinkScroll>
              <LinkScroll to="projects" {...options}>
                <Button variant="primary" icon={true}>
                  Projetos
                </Button>
              </LinkScroll>
            </ContainerButton>
          </ContainerContent>
        </AnimatedSection>
        <ContainerSvg src={image} alt="Imagem ilustrativa" />
        <AnimatedSection position="up">
          <ContainerIcons>
            <GitHub />
            <Instagram />
            <Linkedin />
            <WhatsApp />
            <Cv />
          </ContainerIcons>
        </AnimatedSection>
      </Wrapper>
      <ContainerNextArrow>
        <span></span>
        <span></span>
        <span></span>
      </ContainerNextArrow>
      <ContainerNextmobile />
    </Main>
  );
};

export default Introduction;
