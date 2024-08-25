import { Col, Container, Row } from '../components/Grid/Grid';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../components/Link/Link';
import { Link as LinkScroll } from 'react-scroll';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { PortifolioLogo } from '../components/Icons/PortifolioLogo';
import { IChildrenProps } from '../types/auxProps';
import { Button } from '../components/Button/Button';
import UseWindowSize from '../hooks/useWindowSize';
import useSystemThemeContext from '../hooks/useSystemThemeContext';
import { Outlet } from 'react-router-dom';
import { Instagram } from '../components/Icons/Instagram';
import { WhatsApp } from '../components/Icons/WhatsApp';
import { GitHub } from '../components/Icons/GitHub';
import { Linkedin } from '../components/Icons/Linkedin';
import { Email } from '../components/Icons/Email';
import { Cv } from '../components/Icons/Cv';
import { Typography } from '../components/Typography/Typography';
import { ToggleThemeButton } from '../components/Button/ToggleThemeButton';
import {
  Nav,
  UlHeader,
  LiHeader,
  WrapperToggleThemeMobile,
  ContainerButton,
  ContainerFooter,
  UlFooter,
  LiFooter,
  ContainerIcons,
  Separator,
} from './stylesBaseLayout';
import { HamburguerButton } from '../components/Button/HamburguerButton';
import { github, linkedin } from '../utils/links';

const BaseLayout = ({ children }: IChildrenProps) => {
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
    <>
      <Header>
        <Container>
          <Row>
            <Col>
              <PortifolioLogo
                width={width < 1100 ? 201 : 231}
                height={width < 1100 ? 36 : 42}
                theme={theme.title}
              />
            </Col>
            <Col>
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
                      {width < 600 && (
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
                <ContainerButton>
                  <Link url="https://drive.google.com/file/d/1Ow7l0_n6wV1JiQGT4tGGrep7QPssfVTC/view">
                    <Button variant="secondary">Baixar CV</Button>
                  </Link>
                </ContainerButton>
                <ToggleThemeButton />
                <HamburguerButton active={active} setActive={setAcive} />
              </Nav>
            </Col>
          </Row>
        </Container>
      </Header>
      <Outlet />
      {children}
      <Footer>
        <ContainerFooter>
          <Typography variant="h4">Navegue até</Typography>
          <UlFooter>
            <LiFooter>
              <Button variant="footer">
                <LinkScroll
                  to="intro"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </LinkScroll>
              </Button>
            </LiFooter>
            <LiFooter>
              <Button variant="footer">
                <LinkScroll
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Sobre
                </LinkScroll>
              </Button>
            </LiFooter>
            <LiFooter>
              <Button variant="footer">
                <LinkScroll
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Projetos
                </LinkScroll>
              </Button>
            </LiFooter>
            <LiFooter>
              <Button variant="footer">
                <LinkScroll
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contato
                </LinkScroll>
              </Button>
            </LiFooter>
            <LiFooter>
              <RouterLink to={'/home/certificados'}>
                <Button variant="footer">Certificados</Button>
              </RouterLink>
            </LiFooter>
          </UlFooter>
          <ContainerIcons>
            <GitHub theme={theme.title} footer={true} />
            <Email theme={theme.title} footer={true} />
            <Instagram theme={theme.title} footer={true} />
            <Linkedin theme={theme.title} footer={true} />
            <WhatsApp theme={theme.title} footer={true} />
            <Cv theme={theme.title} footer={true} />
          </ContainerIcons>
          <Separator />
          <Typography variant="body2">
            © 2024 by Kauã Lusvarghi | Todos os direitos reservados{' '}
          </Typography>
        </ContainerFooter>
      </Footer>
    </>
  );
};

export default BaseLayout;
