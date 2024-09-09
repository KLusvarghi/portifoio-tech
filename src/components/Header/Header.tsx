import { useState } from 'react';
import { Link } from '../../components/Link/Link';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { PortifolioLogo } from '../../components/Icons/PortifolioLogo';
import { Button } from '../../components/Button/Button';
import UseWindowSize from '../../hooks/useWindowSize';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { ToggleThemeButton } from '../../components/Button/ToggleThemeButton';
import { HamburguerButton } from '../../components/Button/HamburguerButton';
import { curriculo, github, linkedin } from '../../utils/links';
import { Col, Container, Row } from '../Grid/Grid';
import {
  Main,
  ContainerLogo,
  Nav,
  UlHeader,
  LiHeader,
  ToggleThemeMobile,
  ContainerButton,
} from './styles';

interface IHeaderLinksProps {
  width: number;
  theme: string;
  setTheme: () => void;
  options: {
    onClick: () => void;
    spy: boolean;
    smooth: boolean;
    offset: number;
    duration: number;
    isDynamic: boolean;
  };
  isHome: boolean;
  isCertificates: boolean;
  isProject: boolean;
}

const HeaderLinks = ({
  width,
  theme,
  setTheme,
  options,
  isHome,
  isCertificates,
  isProject,
}: IHeaderLinksProps) => (
  <>
    {isCertificates || isProject ? (
      <LiHeader>
        <RouterLink to="/home">
          <Button variant="header" width={width}>
            Home
          </Button>
        </RouterLink>
      </LiHeader>
    ) : (
      <LiHeader>
        <ScrollLink to="intro" {...options}>
          <Button variant="header" width={width}>
            Home
          </Button>
        </ScrollLink>
      </LiHeader>
    )}
    {!isHome && (
      <>
        <LiHeader>
          <ScrollLink to="about" {...options}>
            <Button variant="header" width={width}>
              Sobre
            </Button>
          </ScrollLink>
        </LiHeader>
        <LiHeader>
          <ScrollLink to="stack" {...options}>
            <Button variant="header" width={width}>
              Stack
            </Button>
          </ScrollLink>
        </LiHeader>
        <LiHeader>
          <ScrollLink to="projects" {...options}>
            <Button variant="header" width={width}>
              Projetos
            </Button>
          </ScrollLink>
        </LiHeader>
        <LiHeader>
          <ScrollLink to="contact" {...options}>
            <Button variant="header" width={width}>
              Contato
            </Button>
          </ScrollLink>
        </LiHeader>
      </>
    )}
    {!isCertificates && (
      <LiHeader>
        <RouterLink to="/home/certificados">
          <Button variant="header" width={width}>
            Certificados
          </Button>
        </RouterLink>
      </LiHeader>
    )}
    {width <= 1016 && (
      <>
        <LiHeader>
          <Link href={linkedin}>
            <Button variant="header" width={width}>
              Linkedin
            </Button>
          </Link>
        </LiHeader>
        <LiHeader>
          <Link href={github}>
            <Button variant="header" width={width}>
              GitHub
            </Button>
          </Link>
        </LiHeader>
        {width < 430 && (
          <ToggleThemeMobile onClick={() => setTheme()} $theme={theme}>
            <Button variant="header" width={width}>
              Mudar o tema
            </Button>
          </ToggleThemeMobile>
        )}
      </>
    )}
    {width >= 1200 && (
      <ContainerButton>
        <Link href={curriculo}>
          <Button variant="secondary">Baixar CV</Button>
        </Link>
      </ContainerButton>
    )}
  </>
);

export const Header = () => {
  const location = useLocation();
  const isCertificates = location.pathname.includes('certificados');
  const isProject = location.pathname.includes('projetos');
  const isHome = isCertificates || isProject;
  const width = UseWindowSize();
  const { theme, setTheme } = useSystemThemeContext();
  const [active, setActive] = useState(false);

  const options = {
    onClick: () => setActive(false),
    spy: true,
    smooth: true,
    offset: -162,
    duration: 500,
    isDynamic: true,
  };

  return (
    <Main $isHome={isHome}>
      <Container>
        <Row>
          <Col>
            <ContainerLogo>
              <RouterLink to="/home">
                <PortifolioLogo
                  width={width < 1100 ? 201 : 231}
                  height={width < 1100 ? 36 : 42}
                  theme={theme.title}
                />
              </RouterLink>
            </ContainerLogo>
          </Col>
          <Col>
            <Nav>
              <UlHeader
                $active={active}
                onMouseLeave={() => setActive(false)}
                onClick={() => setActive(false)}
              >
                <HeaderLinks
                  width={width}
                  theme={theme.title}
                  setTheme={setTheme}
                  options={options}
                  isHome={isHome}
                  isCertificates={isCertificates}
                  isProject={isProject}
                />
              </UlHeader>
              <HamburguerButton active={active} setActive={setActive} />
              {width > 429 && <ToggleThemeButton fixed={width > 680} />}
            </Nav>
          </Col>
        </Row>
      </Container>
    </Main>
  );
};
