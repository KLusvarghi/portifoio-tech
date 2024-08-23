// import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { GitHub } from '../../components/Icons/GitHub';
import { Linkedin } from '../../components/Icons/Linkedin';
import { Instagram } from '../../components/Icons/Instagram';
import { Cv } from '../../components/Icons/Cv';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import image from './assets/ilustrationr.svg';
import { RefProps } from '../../types/auxProps';
import {
  Main,
  Wrapper,
  ContainerIcons,
  ContainerContent,
  ContainerButton,
  ContainerSvg,
  ContainerNext,
  ContainerNextmobile
} from './styles';

const Introduction = ({ refContainer }: RefProps) => {
  return (
    <Main ref={refContainer} id="intro">
      <Wrapper>
        <ContainerContent>
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
          <ContainerButton>
            <Button variant="outline">Contato</Button>
            <Button variant="primary" icon={true}>
              Projetos
            </Button>
          </ContainerButton>
        </ContainerContent>
        <ContainerSvg src={image} alt="Imagem ilustrativa" />
        <ContainerIcons>
          <GitHub />
          <Instagram />
          <Linkedin />
          <Cv />
        </ContainerIcons>
      </Wrapper>
      <ContainerNext>
        <span></span>
        <span></span>
        <span></span>
      </ContainerNext>
      <ContainerNextmobile/>
    </Main>
  );
};

export default Introduction;
