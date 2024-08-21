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
  StyledContainer,
  StyledWrapper,
  StyeldContainerIcons,
  StyledWrapperIcons,
  StyledLinkIcon,
  StyledContainerContent,
  StyledWrapperContent,
  StyledContainerButton,
  StyleSvgIlustration,
  StyledNext,
} from './styles';
import { RefObject } from 'react';

interface IntroductionProps {
  homeRef: RefObject<HTMLDivElement>;
}

const Introduction = ({ homeRef }:IntroductionProps) => {
  // const { theme } = useSystemThemeContext();
  // const [hover, setHover] = useState(false);
  return (
    <StyledMain ref={homeRef} id="intro">
      <StyledContainer>
        <StyledWrapper>
          <StyeldContainerIcons>
            <StyledWrapperIcons>
              <StyledLinkIcon
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              >
                <GitHub />
              </StyledLinkIcon>
              <StyledLinkIcon
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              >
                <Instagram />
              </StyledLinkIcon>
              <StyledLinkIcon
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              >
                <Linkedin />
              </StyledLinkIcon>
              <StyledLinkIcon
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              >
                <Cv />
              </StyledLinkIcon>
            </StyledWrapperIcons>
          </StyeldContainerIcons>
          <StyledContainerContent>
            <StyledWrapperContent>
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
              <StyledContainerButton>
                <Button variant="outline">Contato</Button>
                <Button icon={true}>Projetos</Button>
              </StyledContainerButton>
            </StyledWrapperContent>
          </StyledContainerContent>
          <StyleSvgIlustration src={image} />
        </StyledWrapper>
        <StyledNext>
          <span></span>
          <span></span>
          <span></span>
        </StyledNext>
      </StyledContainer>
    </StyledMain>
  );
};

export default Introduction;
