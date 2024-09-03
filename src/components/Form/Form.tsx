import { Form, Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Button } from '../Button/Button';
import { InputText, TextArea } from './InputForm';
import emailjs from '@emailjs/browser';

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
    .min(4, 'Digite seu nome completo')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Digite um email válido!')
    .required('Campo obrigatório'),
  subject: Yup.string()
    .trim()
    .lowercase()
    .min(6, 'Digite o assunto da mensagem')
    .required('Campo obrigatório'),
  message: Yup.string()
    .trim()
    .lowercase()
    .min(10, 'Digite a mensagem do email')
    .required('Campo obrigatório'),
});

export const Forms = ({ setSucces }: { setSucces: React.Dispatch<React.SetStateAction<boolean>> }) => {
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
        const templateParams = {
          name: response.name,
          subject: response.subject,
          message: response.message,
          email: response.email,
        };
        emailjs
          .send(
            'service_9yq346d',
            'template_fze75s6',
            templateParams,
            'RogZHWFmgc7vGw9e2',
          )
          .then(
            (response) => {
              console.log(response.text);
              console.log(response.status);
            },
            (error) => {
              console.log(error.text);
            },
          );
        setSucces(true);
        setTimeout(() => {
          setSucces(false);
        }, 5000);
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
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <InputText
              gridArea="email"
              placeholder="Digite seu email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <InputText
              gridArea="subject"
              placeholder="Qual o assunto?"
              name="subject"
              type="text"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <TextArea
              gridArea="message"
              placeholder="O que teme em mente?"
              name="message"
              type="textarea"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </ContainerForm>
          <ContainerButton>
            <Button type="submit">Enviar mensagem</Button>
          </ContainerButton>
        </Form>
      )}
    </Formik>
  );
};
