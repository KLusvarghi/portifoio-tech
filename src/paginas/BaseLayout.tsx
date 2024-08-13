import { Col, Container, Row } from '../components/Grid/Grid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <Header>
        <Container>
          <Row>
            <Col>
              <Link to={'/pagina-inicial'}>
                <PortifolioLogo
                  width={width < 1100 ? 201 : 231}
                  height={width < 1100 ? 36 : 42}
                  theme={theme.title}
                />
              </Link>
            </Col>
            <Col>
              <StyledNav>
                {/* passando a props com "$" para que o styled-components filtre essa props e não passse para o DOM, assim não gerando erro no console */}
                <StyledUl $active={active} onMouseLeave={() => setAcive(false)}>
                  <StyledLi>
                    <Button onClick={() => setAcive(false)} variant="header">
                      Home
                    </Button>
                  </StyledLi>
                  <StyledLi>
                    <Button onClick={() => setAcive(false)} variant="header">
                      Sobre
                    </Button>
                  </StyledLi>
                  <StyledLi>
                    <Button onClick={() => setAcive(false)} variant="header">
                      Projetos
                    </Button>
                  </StyledLi>
                  <StyledLi>
                    <Link
                      onClick={() => setAcive(false)}
                      to={'/pagina-inicial/certificados'}
                    >
                      <Button variant="header">Certificados</Button>
                    </Link>
                  </StyledLi>
                  <StyledLi>
                    <Button onClick={() => setAcive(false)} variant="header">
                      Contato
                    </Button>
                  </StyledLi>
                </StyledUl>
                <StyledDivButton>
                  <Button variant="secondary">Baixar CV</Button>
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
              <Button variant="footer">Home</Button>
            </StyledLiFooter>
            <StyledLiFooter>
              <Button variant="footer">Sobre</Button>
            </StyledLiFooter>
            <StyledLiFooter>
              <Button variant="footer">Projetos</Button>
            </StyledLiFooter>
            <StyledLiFooter>
              <Link to={'/pagina-inicial/certificados'}>
                <Button variant="footer">Certificados</Button>
              </Link>
            </StyledLiFooter>
            <StyledLiFooter>
              <Button variant="footer">Contato</Button>
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
