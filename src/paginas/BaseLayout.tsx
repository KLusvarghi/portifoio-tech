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
import { ModeButton } from '../components/Icons/ModeButton';
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledDivButton,
  StyledButtonHamburguer,
  StyledHamburguer,
  StyledSeparator,
  StyledMode,
  StyledContainerFooter,
  StayledWrapperFooter,
  StyledUlFooter,
  StyledLiFooter,
  StyledWrapperIcons,
} from './stylesBaseLayout';

const BaseLayout = ({ children }: IChildrenProps) => {
  const [active, setAcive] = useState(false);
  const width = UseWindowSize();
  const { theme, setTheme } = useSystemThemeContext();
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
              <StyledNav>
                {/* passando a props com "$" para que o styled-components filtre essa props e não passse para o DOM, assim não gerando erro no console */}
                <StyledUl $active={active} onMouseLeave={() => setAcive(false)}>
                  <StyledLi>
                    <Button variant="header">
                      <LinkScroll to="intro" {...options}>
                        Home
                      </LinkScroll>
                    </Button>
                  </StyledLi>
                  <StyledLi>
                    <Button variant="header">
                      <LinkScroll to="about" {...options}>
                        Sobre
                      </LinkScroll>
                    </Button>
                  </StyledLi>
                  <StyledLi>
                    <Button variant="header">
                      <LinkScroll to="projects" {...options}>
                        Projetos
                      </LinkScroll>
                    </Button>
                  </StyledLi>
                  <StyledLi>
                    <Button variant="header">
                      <LinkScroll to="contact" {...options}>
                        Contato
                      </LinkScroll>
                    </Button>
                  </StyledLi>
                  <StyledLi>
                    <RouterLink to={'/home/certificados'}>
                      <Button variant="header">Certificados</Button>
                    </RouterLink>
                  </StyledLi>
                </StyledUl>
                <StyledDivButton>
                  <Link url="https://drive.google.com/file/d/1Ow7l0_n6wV1JiQGT4tGGrep7QPssfVTC/view">
                    <Button variant="secondary">Baixar CV</Button>
                  </Link>
                </StyledDivButton>
                {width <= 600 && (
                  <>
                    <StyledMode onClick={() => setTheme()}>
                      <ModeButton mode={theme.title} />
                    </StyledMode>
                  </>
                )}
                <StyledButtonHamburguer onClick={() => setAcive(!active)}>
                  <StyledHamburguer $active={active}></StyledHamburguer>
                </StyledButtonHamburguer>
              </StyledNav>
            </Col>
          </Row>
        </Container>
      </Header>
      <Outlet />
      {children}
      <Footer>
        <StyledContainerFooter>
          <StayledWrapperFooter>
            <Typography variant="h4">Navegue até</Typography>
          </StayledWrapperFooter>
          <StyledUlFooter>
            <StyledLiFooter>
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
            </StyledLiFooter>
            <StyledLiFooter>
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
            </StyledLiFooter>
            <StyledLiFooter>
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
            </StyledLiFooter>
            <StyledLiFooter>
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
            </StyledLiFooter>
            <StyledLiFooter>
              <RouterLink to={'/home/certificados'}>
                <Button variant="footer">Certificados</Button>
              </RouterLink>
            </StyledLiFooter>
          </StyledUlFooter>
          <StyledWrapperIcons>
            <GitHub theme={theme.title} footer={true} />
            <Email theme={theme.title} footer={true} />
            <Instagram theme={theme.title} footer={true} />
            <Linkedin theme={theme.title} footer={true} />
            <WhatsApp theme={theme.title} footer={true} />
            <Cv theme={theme.title} footer={true} />
          </StyledWrapperIcons>
          <StyledSeparator />
          <StayledWrapperFooter>
            <Typography variant="body3">
              © 2024 by Kauã Lusvarghi | Todos os direitos reservados{' '}
            </Typography>
          </StayledWrapperFooter>
        </StyledContainerFooter>
      </Footer>
    </>
  );
};

export default BaseLayout;
