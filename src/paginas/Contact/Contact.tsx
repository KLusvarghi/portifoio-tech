import styled from 'styled-components';
import { Main } from '../../styles/mainContainer';
import { Title } from '../../components/Typography/Title';
import Form from '../../components/Form/Form';
import { GitHub, Linkedin, Email } from './icons';
import { Typography } from '../../components/Typography/Typography';

const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 88px;
  justify-content: center;
  align-items: center;
`;
const ContainerInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
const ContainerInfo = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
const ContainerIcone = styled.span`
  background: ${(props) => props.theme.colors.formBg};
  padding: 12px;
  border-radius: 100%;

  svg {
    max-height: 28px;
    max-width: 28px;
  }
`;
const ContainerText = styled.span``;

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
    <Main>
      <Title
        title="Contato"
        subtitle="Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e entrarei em contato com você o mais breve possível!"
        position="center"
      />
      <Wrapper>
        <ContainerInformations>
          {info.map(({ index, path, text }) => (
            <ContainerInfo key={index}>
              <ContainerIcone>{path}</ContainerIcone>
              <ContainerText>
                <Typography variant="body">{text}</Typography>
              </ContainerText>
            </ContainerInfo>
          ))}
        </ContainerInformations>
        <Form />
      </Wrapper>
    </Main>
  );
};

export default Contact;
