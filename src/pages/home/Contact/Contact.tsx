import { Main } from '../../../styles/mainContainer';
import { Title } from '../../../components/Typography/Title';
import { Forms } from '../../../components/Form/Form';
import { GitHub, Linkedin, Email } from './icons';
import { Typography } from '../../../components/Typography/Typography';
import {
  Wrapper,
  ContainerInformations,
  ContainerInfo,
  ContainerIcone,
  SuccessMessage,
} from './styles';
import useSystemThemeContext from '../../../hooks/useSystemThemeContext';
import { useState } from 'react';

const Contact = () => {
  const { theme } = useSystemThemeContext();
  const [sendMessage, setSendMessage] = useState(false);
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

  const handleCopy = (text: string): void => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Texto copiado com sucesso!');
        setSendMessage(true);
      })
      .catch((err) => {
        console.error('Erro ao copiar texto: ', err);
      })
      .finally(() => {
        setTimeout(() => {
          setSendMessage(false);
        }, 3000);
      });
  };

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
            <ContainerInfo key={index} onClick={() => handleCopy(text)}>
              <ContainerIcone $theme={theme.title}>{path}</ContainerIcone>
              <Typography variant="body">{text}</Typography>
            </ContainerInfo>
          ))}
        </ContainerInformations>
        <Forms />
      </Wrapper>
      {sendMessage && (
        <SuccessMessage>
          <Typography variant="body">
            Texto copiado para área de transferência!
          </Typography>
        </SuccessMessage>
      )}
    </Main>
  );
};

export default Contact;
