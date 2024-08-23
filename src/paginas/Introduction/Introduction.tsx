// import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { GitHub } from '../../components/Icons/GitHub';
import { Linkedin } from '../../components/Icons/Linkedin';
import { Instagram } from '../../components/Icons/Instagram';
import { Cv } from '../../components/Icons/Cv';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import image from './assets/ilustrationr.svg';
import {
  StyledMain,
  StyledWrapper,
  StyeldContainerIcons,
  StyledContainerContent,
  StyledContainerButton,
  StyleSvgIlustration,
  StyledNext,
} from './styles';
import { RefObject } from 'react';

interface IntroductionProps {
  homeRef: RefObject<HTMLDivElement>;
}

const Introduction = ({ homeRef }: IntroductionProps) => {
  return (
    <StyledMain ref={homeRef} id="intro">
      <StyledWrapper>
        <StyledContainerContent>
          <Typography variant="body">E ai, eu me chamo</Typography>
          <div style={{ marginBottom: '12px' }}>
            <Typography>Kauã Lusvarghi</Typography>
            <Typography variant="intro">Web Developer</Typography>
          </div>
          <Typography variant="body">
            Sou um Engenheiro de Software especializado em frontend, apaixonado
            por desafios que me permitem criar interfaces intuitivas e
            eficientes a partir de código.
          </Typography>
          <StyledContainerButton>
            <Button variant="outline">Contato</Button>
            <Button variant="primary"icon={true}>Projetos</Button>
          </StyledContainerButton>
        </StyledContainerContent>
        <StyleSvgIlustration src={image} alt="Imagem ilustrativa" />
        <StyeldContainerIcons>
          <GitHub />
          <Instagram />
          <Linkedin />
          <Cv />
        </StyeldContainerIcons>
      </StyledWrapper>
      <StyledNext>
        <span></span>
        <span></span>
        <span></span>
      </StyledNext>
    </StyledMain>
  );
};

export default Introduction;
