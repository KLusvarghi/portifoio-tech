import styled from 'styled-components';
import { Main } from '../../styles/mainContainer';
import { Title } from '../../components/Typography/Title';
import { Forms } from '../../components/Form/Form';
import { GitHub, Linkedin, Email } from './icons';
import { Typography } from '../../components/Typography/Typography';
import {
  Wrapper,
  ContainerInformations,
  ContainerInfo,
  ContainerIcone,
} from './styles';


const Contact = () => {
  const info = [
    { index: 1, path: <GitHub />, text: '/klusvarghi' },
    {
      index: 2,
      path: <Linkedin />,
      text: '/kauã-ortolani-lusvarghi',
    },
    {
      index: 3,
      path: <Email />,
      text: '/kauaolusvarghi@gmail.com',
    },
  ];

  return (
    <Main id="contact">
      <Title
        title="Contato"
        subtitle="Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo. Retornarei o mais breve possível!"
        position="center"
      />
      <Wrapper>
        <ContainerInformations>
          {info.map(({ index, path, text }) => (
            <ContainerInfo key={index}>
              <ContainerIcone>{path}</ContainerIcone>
              <Typography variant="body">{text}</Typography>
            </ContainerInfo>
          ))}
        </ContainerInformations>
        <Forms />
      </Wrapper>
    </Main>
  );
};

export default Contact;
