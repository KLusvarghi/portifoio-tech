import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../../components/Link/Link';
import { Link as LinkScroll } from 'react-scroll';
import { PortifolioLogo } from '../../components/Icons/PortifolioLogo';
import { Button } from '../../components/Button/Button';
import UseWindowSize from '../../hooks/useWindowSize';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import { ToggleThemeButton } from '../../components/Button/ToggleThemeButton';
import { HamburguerButton } from '../../components/Button/HamburguerButton';
import { github, linkedin } from '../../utils/links';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from '../Grid/Grid';
import {
  Main,
  ContainerLogo,
  Nav,
  UlHeader,
  LiHeader,
  WrapperToggleThemeMobile,
  ContainerButton,
} from './styles';

export const Header = () => {
  const location = useLocation();
  const isCertificates = location.pathname.includes('certificados');
  const isProject = location.pathname.includes('projetos');
  const isHome = isCertificates || isProject;
  const { theme, setTheme } = useSystemThemeContext();
  const width = UseWindowSize();
  const [active, setAcive] = useState(false);
  const options = {
    onClick: () => setAcive(false),
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
              <RouterLink to={'/home'}>
                <PortifolioLogo
                  width={width < 1100 ? 201 : 231}
                  height={width < 1100 ? 36 : 42}
                  theme={theme.title}
                />
              </RouterLink>
            </ContainerLogo>
          </Col>
          <Col>
            {isCertificates && (
              <Nav>
                <UlHeader $active={active} onMouseLeave={() => setAcive(false)}>
                  <LiHeader>
                    <RouterLink to={'/home'}>
                      <Button variant="header" width={width}>
                        Home
                      </Button>
                    </RouterLink>
                  </LiHeader>
                </UlHeader>
              </Nav>
            )}
            {isProject && (
              <Nav>
                <UlHeader $active={active} onMouseLeave={() => setAcive(false)}>
                  <LiHeader>
                    <RouterLink to={'/home'}>
                      <Button variant="header" width={width}>
                        Home
                      </Button>
                    </RouterLink>
                  </LiHeader>
                  <LiHeader>
                    <RouterLink to={'/home/certificados'}>
                      <Button variant="header" width={width}>
                        Certificados
                      </Button>
                    </RouterLink>
                  </LiHeader>
                </UlHeader>
              </Nav>
            )}
            {!isCertificates && !isProject && (
              <Nav>
                <UlHeader $active={active} onMouseLeave={() => setAcive(false)}>
                  <LiHeader>
                    <LinkScroll to="intro" {...options}>
                      <Button variant="header" width={width}>
                        Home
                      </Button>
                    </LinkScroll>
                  </LiHeader>
                  <LiHeader>
                    <LinkScroll to="about" {...options}>
                      <Button variant="header" width={width}>
                        Sobre
                      </Button>
                    </LinkScroll>
                  </LiHeader>
                  <LiHeader>
                    <LinkScroll to="stack" {...options}>
                      <Button variant="header" width={width}>
                        Stack
                      </Button>
                    </LinkScroll>
                  </LiHeader>
                  <LiHeader>
                    <LinkScroll to="projects" {...options}>
                      <Button variant="header" width={width}>
                        Projetos
                      </Button>
                    </LinkScroll>
                  </LiHeader>
                  <LiHeader>
                    <LinkScroll to="contact" {...options}>
                      <Button variant="header" width={width}>
                        Contato
                      </Button>
                    </LinkScroll>
                  </LiHeader>
                  <LiHeader>
                    <RouterLink to={'/home/certificados'}>
                      <Button variant="header" width={width}>
                        Certificados
                      </Button>
                    </RouterLink>
                  </LiHeader>

                  {width <= 1015 && (
                    <>
                      <LiHeader>
                        <Link url={linkedin}>
                          <Button variant="header" width={width}>
                            Linkedin
                          </Button>
                        </Link>
                      </LiHeader>
                      <LiHeader>
                        <Link url={github}>
                          <Button variant="header" width={width}>
                            GitHub
                          </Button>
                        </Link>
                      </LiHeader>
                      {width < 430 && (
                        <WrapperToggleThemeMobile
                          onClick={() => setTheme()}
                          $theme={theme.title}
                        >
                          <Button variant="header" width={width}>
                            Mudar o tema
                          </Button>
                        </WrapperToggleThemeMobile>
                      )}
                    </>
                  )}
                </UlHeader>
                {width >= 1200 && (
                  <ContainerButton>
                    <Link url="https://drive.google.com/file/d/1Ow7l0_n6wV1JiQGT4tGGrep7QPssfVTC/view">
                      <Button variant="secondary">Baixar CV</Button>
                    </Link>
                  </ContainerButton>
                )}
                <HamburguerButton active={active} setActive={setAcive} />
                {width > 429 && (
                  <ToggleThemeButton fixed={width > 680 ? true : false} />
                )}
              </Nav>
            )}
          </Col>
        </Row>
      </Container>
    </Main>
  );
};
