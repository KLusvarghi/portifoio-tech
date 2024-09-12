import { Main } from '../../../styles/mainContainer';
import { Title } from '../../../components/Typography/Title';
import { Typography } from '../../../components/Typography/Typography';
import { useState } from 'react';
import { Tag } from '../../../components/Button/Tag';
import { Button } from '../../../components/Button/Button';
import useSystemProjectContext from '../../../hooks/useSystemProjectContext ';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../../utils/imageUtils';
import { AnimatedSection } from '../../../components/AnimatedSection/AnimatedSection';
import {
  Wrapper,
  ContainerProject,
  Image,
  ContainerContent,
  ContainerListTech,
  ContainerButton,
  MoreProjects,
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
      <AnimatedSection direction="toDown">
        <Title
          title="Projetos"
          subtitle="Aqui você encontrará alguns dos meus projetos pessoais mais recentes"
        />
      </AnimatedSection>
      <Wrapper>
        {data.slice(0, visibleItems).map((project) => (
          <ContainerProject key={project.id}>
            <Image
              src={getImageUrl(project.image, 'projectsSvg')}
              alt={`imagem ilustrativa do projeto: ${project.name}`}
            />
            <ContainerContent>
              <AnimatedSection direction="toUp">
                <Typography variant="h4">{project.name}</Typography>
                <Typography variant="body">{project.preDescription}</Typography>
              </AnimatedSection>
              <AnimatedSection direction="toLeft">
                <ContainerListTech id="tech">
                  {project.technologies.map((technology, index) => (
                    <Tag key={index}>{technology}</Tag>
                  ))}
                </ContainerListTech>
              </AnimatedSection>
              <ContainerButton>
                <AnimatedSection direction="toRight">
                  <Link to={`/projetos/${project.linkTo}`}>
                    <Button variant="secondary">Mais Sobre</Button>
                  </Link>
                </AnimatedSection>
              </ContainerButton>
            </ContainerContent>
          </ContainerProject>
        ))}
      </Wrapper>
      {visibleItems < data.length && (
        <MoreProjects>
          <Button variant="project" onClick={showMoreItems}>
            Ver mais projetos 💻
          </Button>
        </MoreProjects>
      )}
    </Main>
  );
};

export default Projects;
