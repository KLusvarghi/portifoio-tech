import { useParams, useNavigate } from 'react-router-dom';
import useSystemProjectContext from '../../hooks/useSystemProjectContext ';
import { useEffect, useState } from 'react';
import { Typography } from '../../components/Typography/Typography';
import { Head } from '../../components/Head/Head';
import { getImageUrl } from '../../utils/imageUtils';
import { Tag } from '../../components/Button/Tag';
import { Button } from '../../components/Button/Button';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowBack } from '../../components/Icons/ArrowBack';
import useSystemThemeContext from '../../hooks/useSystemThemeContext';
import {
  Main,
  Wrapper,
  ContainerTitle,
  ContainerArrow,
  ContainerContent,
  Description,
  Technologies,
  ContainerTech,
  Navigations,
  ContainerButton,
  Image,
} from './styles';

interface IProjectProps {
  id: number;
  name: string;
  preDescription: string;
  description: string;
  technologies: string[];
  urlWebsite: string;
  repositoryLink: string;
  image: string;
  linkTo: string;
}

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { specificProject } = useSystemProjectContext();
  const [data, setData] = useState<IProjectProps>();
  const [title, setTitle] = useState<string | undefined>(undefined);
  const { theme } = useSystemThemeContext();

  const goToBack = () => {
    navigate('/home');
  };

  useEffect(() => {
    if (id) {
      const project = specificProject(id);
      setData(project);

      const titleToLowerCase = project?.name
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setTitle(titleToLowerCase);
    }
  }, [id, specificProject]);

  return (
    <Main>
      <Head
        title={`Projeto | ${title}`}
        description={`Página de talhada do projeto ${data?.name}`}
      />
      {data && (
        <Wrapper>
          <ContainerArrow onClick={goToBack}>
            <ArrowBack theme={theme.title} />
          </ContainerArrow>
          <ContainerTitle>
            <Typography>{title}</Typography>
            <Image
              src={getImageUrl(data.image)}
              alt={`imagem ilustrativa do projeto ${data.name}`}
            />
          </ContainerTitle>
          <ContainerContent>
            <Description>
              <Typography variant="h4">Visão geral do projeto</Typography>
              <Typography variant="body">{data.description}</Typography>
            </Description>
            <Technologies>
              <Typography variant="h4">Tecnologias utilizadas</Typography>
              <ContainerTech>
                {data.technologies.map((tech, index) => (
                  <Tag key={index}>{tech}</Tag>
                ))}
              </ContainerTech>
            </Technologies>
            <Navigations>
              <Typography variant="h4">Projeto</Typography>
              <ContainerButton>
                <RouterLink to={`${data.urlWebsite}`} target="_blank">
                  <Button variant="primary">VER PROJETO</Button>
                </RouterLink>
                <RouterLink to={`${data.repositoryLink}`} target="_blank">
                  <Button variant="transparent">REPOSITÓRIO</Button>
                </RouterLink>
                <Button onClick={goToBack} variant="outline">
                  VOLTAR
                </Button>
              </ContainerButton>
            </Navigations>
          </ContainerContent>
        </Wrapper>
      )}
    </Main>
  );
};

export default ProjectDetails;
