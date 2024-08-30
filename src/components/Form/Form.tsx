import { Form, Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { TextArea } from '../InputText/TextArea';

const ContainerForm = styled.div`
  display: grid;
  grid-template-areas:
    'name email'
    'subject subject'
    'message message';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
  gap: 12px;
`;

const ContainerButton = styled.div`
  margin-top: 24px;
  button {
    width: 100%;
  }
`;

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .lowercase()
    .min(3, 'Digite seu nome completo')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Digite um email válido!')
    .required('Campo obrigatório'),
  subject: Yup.string()
    .trim()
    .lowercase()
    .min(10, 'Digite o assunto da mensagem')
    .required('Campo obrigatório'),
  message: Yup.string()
    .trim()
    .lowercase()
    .min(10, 'Digite a mensagem do email')
    .required('Campo obrigatório'),
});

export const Forms = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={schema}
      onSubmit={(response) => {
        console.log(response);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <ContainerForm>
            <InputText
              gridArea="name"
              placeholder="Digite seu nome"
              name="name"
              type="text"
            />
            <InputText
              gridArea="email"
              placeholder="Digite seu email"
              name="email"
              type="email"
            />
            <InputText
              gridArea="subject"
              placeholder="Qual o assunto?"
              name="subject"
              type="text"
            />
            <TextArea
              gridArea="message"
              placeholder="O que teme em mente?"
              name="message"
              type="textarea"
            />
          </ContainerForm>
          <ContainerButton>
            <Button>Enviar mensagem</Button>
          </ContainerButton>
        </Form>
      )}
    </Formik>
  );
};
