import { Main } from '../../../styles/mainContainer';
import { Title } from '../../../components/Typography/Title';
import api from '../../../api/projetos.json';
import { Typography } from '../../../components/Typography/Typography';
import { useState } from 'react';
import { Tag } from '../../../components/Button/Tag';
import { Button } from '../../../components/Button/Button';
import { getImageUrl } from '../../../utils/imageUtils';
import {
  Wrapper,
  ContainerProject,
  Image,
  ContainerContent,
  ContainerListTech,
  ContainerButton,
} from './styles';
import { Link } from 'react-scroll';

export const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const increment = 3;

  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + increment, api.length));
  };

  return (
    <Main id="projects">
      <Title
        title="Projetos"
        subtitle="Aqui você encontrará alguns dos meus projetos pessoais mais recentes"
      />
      <Wrapper>
        {api.slice(0, visibleItems).map((projeto, index) => (
          <ContainerProject key={index}>
            <Image
              src={getImageUrl(projeto.image)}
              alt={`imagem ilustrativa do projeto ${projeto.nome}`}
            />
            <ContainerContent>
              <Typography variant="h4">{projeto.nome}</Typography>
              <Typography variant="body">{projeto.preDescricao}</Typography>
              <ContainerListTech id="tech">
                {projeto.tecnologias.map((tech, index) => (
                  <Tag key={index}>{tech}</Tag>
                ))}
              </ContainerListTech>
              <ContainerButton>
                <Link to={projeto.linkTo}>
                  <Button variant="secondary">Mais Sobre</Button>
                </Link>
              </ContainerButton>
            </ContainerContent>
          </ContainerProject>
        ))}
        {visibleItems < api.length && (
          <Button variant="project" onClick={showMoreItems}>
            Ver mais projetos 💻
          </Button>
        )}
      </Wrapper>
    </Main>
  );
};

export default Projects;
