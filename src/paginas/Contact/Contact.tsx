import styled from 'styled-components';
import { Main } from '../../styles/mainContainer';
import { Title } from '../../components/Typography/Title';
import { Forms } from '../../components/Form/Form';
import { GitHub, Linkedin, Email } from './icons';
import { Typography } from '../../components/Typography/Typography';

const Wrapper = styled.div`
  margin: 60px 0 120px;
  display: flex;
  flex-wrap: wrap-reverse;
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
  padding: 12px;
  border-radius: 100%;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 25%);
  background: ${(props) => props.theme.colors.form.a};

  &:hover {
    background: ${(props) => props.theme.colors.form.b};
  }

  svg {
    max-height: 28px;
    max-width: 28px;

    path {
      fill: ${(props) => props.theme.colors.form.path};
    }
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
              <ContainerText>
                <Typography variant="body">{text}</Typography>
              </ContainerText>
            </ContainerInfo>
          ))}
        </ContainerInformations>
        <Forms />
      </Wrapper>
    </Main>
  );
};

export default Contact;
