import { Title } from '../../../components/Typography/Title';
import { Typography } from '../../../components/Typography/Typography';
import euImg from './assets/eu.png';
import { useEffect, useState } from 'react';
import { Link } from '../../../components/Link/Link';
import { Button } from '../../../components/Button/Button';
import { instagram, linkedin, urlgitHub } from '../../../utils/links';
import useFetchData from '../../../hooks/useFetchData';
import { Main } from '../../../styles/mainContainer';
import { IUseWindoSizeProps } from '../../../types/auxProps';
import {
  Wrapper,
  ContainerContent,
  TextBold,
  Img,
  LinkText,
  ContainerAcessibility,
  ContainerTypograph,
  ContainerInformations,
  ContainerXp,
  ContaienrAttribute,
} from './styles';


const About = ({ width }: IUseWindoSizeProps) => {
  const { data, error } = useFetchData(urlgitHub);
  const [hover, setHover] = useState(false);
  const [allRepositories, setAllRepositories] = useState<number | null>(null);
  const [displayedRepositories, setDisplayedRepositories] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const setStateWithReposGit = async () => {
      try {
        if (!error && Array.isArray(data) && data.length > 0) {
          setAllRepositories(data.length);
        }
      } catch (err) {
        console.error('Erro ao carregar os repositórios do github.', err);
        setAllRepositories(null);
      }
    };
    setStateWithReposGit();
  }, [data, error]);

  useEffect(() => {
    if (allRepositories !== null) {
      const incrementNumber = () => {
        const repositoriesLength = allRepositories;
        const incremento = Math.max(1, Math.floor(repositoriesLength / 1000));
        let start = 0;
        const timer = setInterval(() => {
          start += incremento;
          setDisplayedRepositories(Math.min(start, repositoriesLength));
          if (start >= repositoriesLength) {
            clearInterval(timer);
          }
        }, 25 * Math.random());
      };
      incrementNumber();
    }
  }, [allRepositories]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({
      x: x,
      y: y,
    });
  };

  return (
    <Main id="about">
      <Title
        title="Sobre mim"
        subtitle="Aqui você encontrará mais informações sobre mim"
      />
      <Wrapper>
        {width >= 1012 && <Img src={euImg} alt="Imagem de Kauã Lusvarghi" />}
        <ContainerContent>
          <ContainerTypograph>
            <Typography variant="h4">Saudações, um pouco sobre mim!</Typography>
            <Typography variant="body">
              Me chamo Kauã Ortolani Lusvarghi,{' '}
              <ContainerAcessibility
                $x={mousePosition.x}
                $y={mousePosition.y}
                $hover={hover}
                onMouseEnter={(e) => {
                  setHover(true);
                  handleMouseMove(e);
                }}
                onMouseLeave={() => setHover(false)}
              >
                sou um homem de pele branca com cabelos castanhos e cacheado.
              </ContainerAcessibility>{' '}
              Além de ser formado em TI, sou um desenvolvedor web frontend
              focado em resolver soluções práticas e eficientes com o que há de
              mais atual no mercado. No momento estou me aprofundadndo cada vez
              mais em <TextBold>Next.js</TextBold>,
              <TextBold>Typescrip</TextBold>,{' '}
              <TextBold>Styled-component</TextBold>,{' '}
              <TextBold>Tailwind</TextBold> e <TextBold>PostgreSQL</TextBold>.
            </Typography>
            <Typography variant="body">
              Explore alguns dos projetos que realizei na seção correspondente.
              Convido você a se conectar ou me seguir no{' '}
              <LinkText href={linkedin} target="_blank">
                LinkedIn
              </LinkText>{' '}
              e{' '}
              <LinkText href={instagram} target="_blank">
                Instagram
              </LinkText>
              . Estou aberto a novas oportunidades profissionais onde possa
              contribuir, aprender e crescer. Caso tenha uma oportunidade que se
              alinhe às minhas habilidades e experiência, por favor, não hesite
              em entrar em contato.
            </Typography>
          </ContainerTypograph>
          <ContainerInformations>
            <ContainerXp>
              <ContaienrAttribute>
                <Typography>3+</Typography>
                <Typography variant="body">
                  Anos <br /> de experiência
                </Typography>
              </ContaienrAttribute>
              <ContaienrAttribute>
                <Typography>{displayedRepositories}+</Typography>
                <Typography variant="body">
                  Projetos
                  <br /> no GitHub
                </Typography>
              </ContaienrAttribute>
            </ContainerXp>
            <Link url="https://drive.google.com/file/d/1Ow7l0_n6wV1JiQGT4tGGrep7QPssfVTC/view">
              <Button>Baixar CV</Button>
            </Link>
          </ContainerInformations>
        </ContainerContent>
      </Wrapper>
    </Main>
  );
};

export default About;
