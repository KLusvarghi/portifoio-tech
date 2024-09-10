import styled from 'styled-components';
import { Typography } from '../../components/Typography/Typography';
import { Link as LinkScroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { Instagram } from '../../components/Icons/Instagram';
import { WhatsApp } from '../../components/Icons/WhatsApp';
import { GitHub } from '../../components/Icons/GitHub';
import { Linkedin } from '../../components/Icons/Linkedin';
import { Cv } from '../../components/Icons/Cv';
import { Button } from '../Button/Button';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import {
  ContainerFooter,
  UlFooter,
  LiFooter,
  ContainerIcons,
  Separator,
} from './styles';

const Main = styled.footer`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Footer = () => {
  const { theme } = useSystemThemeContext();
  const isCertificates = location.pathname.includes('certificados');
  const isProject = location.pathname.includes('projetos');
  const options = {
    spy: true,
    smooth: true,
    offset: -162,
    duration: 500,
    isDynamic: true,
  };

  return (
    <Main>
      <ContainerFooter>
        <Typography variant="h5">Navegue até</Typography>
        <UlFooter>
          {!isCertificates && !isProject ? (
            <>
              <LiFooter>
                <Button variant="footer">
                  <LinkScroll to="intro" {...options}>
                    Home
                  </LinkScroll>
                </Button>
              </LiFooter>
              <LiFooter>
                <Button variant="footer">
                  <LinkScroll to="about" {...options}>
                    Sobre
                  </LinkScroll>
                </Button>
              </LiFooter>
              <LiFooter>
                <Button variant="footer">
                  <LinkScroll to="stack" {...options}>
                    Stack
                  </LinkScroll>
                </Button>
              </LiFooter>
              <LiFooter>
                <Button variant="footer">
                  <LinkScroll to="projects" {...options}>
                    Projetos
                  </LinkScroll>
                </Button>
              </LiFooter>
              <LiFooter>
                <Button variant="footer">
                  <LinkScroll to="contact" {...options}>
                    Contato
                  </LinkScroll>
                </Button>
              </LiFooter>
            </>
          ) : (
            <LiFooter>
              <RouterLink to={'/'}>
                <Button variant="footer">Home</Button>
              </RouterLink>
            </LiFooter>
          )}
          {!isCertificates && (
            <LiFooter>
              <RouterLink to={'/certificados'}>
                <Button variant="footer">Certificados</Button>
              </RouterLink>
            </LiFooter>
          )}
        </UlFooter>
        <ContainerIcons>
          <GitHub theme={theme.title} footer={true} />
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
    </Main>
  );
};
