import { Main } from '../../../styles/mainContainer';
import { Title } from '../../../components/Typography/Title';
import { Typography } from '../../../components/Typography/Typography';
import { useState } from 'react';
import { Tag } from '../../../components/Button/Tag';
import { Button } from '../../../components/Button/Button';
import { getImageUrl } from '../../../utils/imageUtils';
import useSystemProjectContext from '../../../hooks/useSystemProjectContext ';
import { Link } from 'react-scroll';
import {
  Wrapper,
  ContainerProject,
  Image,
  ContainerContent,
  ContainerListTech,
  ContainerButton,
} from './styles';

export const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const increment = 3;
  const { data } = useSystemProjectContext();

  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + increment, data.length));
  };

  return (
    <Main id="projects">
      <Title
        title="Projetos"
        subtitle="Aqui você encontrará alguns dos meus projetos pessoais mais recentes"
      />
      <Wrapper>
        {data.slice(0, visibleItems).map((project) => (
          <ContainerProject key={project.id}>
            <Image
              src={getImageUrl(project.image)}
              alt={`imagem ilustrativa do projeto: ${project.name}`}
            />
            <ContainerContent>
              <Typography variant="h4">{project.name}</Typography>
              <Typography variant="body">{project.preDescription}</Typography>
              <ContainerListTech id="tech">
                {project.technologies.map((technology, index) => (
                  <Tag key={index}>{technology}</Tag>
                ))}
              </ContainerListTech>
              <ContainerButton>
                <Link to={`/projetos/${project.id}`}>
                  <Button variant="secondary">Mais Sobre</Button>
                </Link>
              </ContainerButton>
            </ContainerContent>
          </ContainerProject>
        ))}
        {visibleItems < data.length && (
          <Button variant="project" onClick={showMoreItems}>
            Ver mais projetos 💻
          </Button>
        )}
      </Wrapper>
    </Main>
  );
};

export default Projects;
