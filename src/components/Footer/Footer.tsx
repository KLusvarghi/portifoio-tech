import styled from 'styled-components';
import { Typography } from '../../components/Typography/Typography';
import { Link as LinkScroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import { Instagram } from '../../components/Icons/Instagram';
import { WhatsApp } from '../../components/Icons/WhatsApp';
import { GitHub } from '../../components/Icons/GitHub';
import { Linkedin } from '../../components/Icons/Linkedin';
import { Email } from '../../components/Icons/Email';
import { Cv } from '../../components/Icons/Cv';
import {
  ContainerFooter,
  UlFooter,
  LiFooter,
  ContainerIcons,
  Separator,
} from './styles';
import { Button } from '../Button/Button';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';

const Main = styled.footer`
  padding: 32px 0;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Footer = () => {
  const { theme } = useSystemThemeContext();
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
          <LiFooter>
            <RouterLink to={'/certificados'}>
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
    </Main>
  );
};
