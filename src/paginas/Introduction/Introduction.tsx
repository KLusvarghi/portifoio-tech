import styled from 'styled-components';
import { Linkedin } from '../../components/Icons/Linkedin';
import { Instagram } from '../../components/Icons/Instagram';
import { Cv } from '../../components/Icons/Cv';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
// import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import image from './assets/ilustrationr.svg';

const StyleIntroduction = styled.div``;
const StyleSvgIlustration = styled.img``;

const Introduction = () => {
  // const { theme } = useSystemThemeContext();
  return (
    <StyleIntroduction>
      <div>
        <div>
          <Linkedin />
          <Instagram />
          <Linkedin />
          <Cv />
        </div>
        <div>
          <Typography variant="body">E ai, eu me chamo</Typography>
          <div>
            <Typography>Kauã Lusvarghi</Typography>
            <Typography>Web Developer</Typography>
          </div>
          <Typography variant="body">
            Sou um Engenheiro de Software especializado em frontend, apaixonado
            por desafios que me permitem criar interfaces intuitivas e
            eficientes a partir de código.
          </Typography>
          <div>
            <Button variant="outline">Contato</Button>
            <Button icon={true}>Projetos</Button>
          </div>
        </div>
        <StyleSvgIlustration src={image} />
      </div>
      <div>next page</div>
    </StyleIntroduction>
  );
};

export default Introduction;
