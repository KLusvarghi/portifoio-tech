import styled from 'styled-components';
import { Main } from '../../styles/mainContainer';
import { Title } from '../../components/Typography/Title';
import api from '../../api/projetos.json';
import { Typography } from '../../components/Typography/Typography';
import { useState } from 'react';
import { Tag } from '../../components/Button/Tag';
import { Button } from '../../components/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 120px;
  justify-content: center;
  align-items: center;
`;
const ContainerProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;
const Image = styled.img``;
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  gap: 12px;

  max-width: 532px;
`;
const ContainerListTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex-direction: row;
  margin: 28px 0 40px;

  justify-content: end;
`;
const ContainerButton = styled.div``;

export const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(3);
  const increment = 3;

  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + increment, api.length));
  };

  return (
    <Main id='projects'>
      <Title
        title="Projetos"
        subtitle="Aqui você encontrará alguns dos meus projetos pessoais mais recentes"
      />
      <Wrapper>
        {api.slice(0, visibleItems).map((projeto, index) => (
          <ContainerProject key={index}>
            <Image
              src={projeto.image}
              alt={`imagem ilustrativa do projeto ${projeto.nome}`}
            />
            <ContainerContent>
              <Typography variant="h4">{projeto.nome}</Typography>
              <Typography variant="body">{projeto.preDescricao}</Typography>
              <ContainerListTech>
                {projeto.tecnologias.map((tech, index) => (
                  <Tag key={index}>{tech}</Tag>
                ))}
              </ContainerListTech>
              <ContainerButton>
                <Button variant='secondary'>Mais Sobre</Button>
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
