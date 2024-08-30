import { ErrorMessage } from 'formik';
import styled from 'styled-components';
import { IFormInputProps, IStyledClassProps } from '../../types/auxProps';
import { Typography } from '../Typography/Typography';

const ContainerEstilizado = styled.div<IStyledClassProps>`
  width: 100%;
  position: relative;
  grid-area: ${({ $gridArea }) => $gridArea};
`;

const InputEstilizado = styled.input`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.form.a};
  color: ${(props) => props.theme.colors.neutral.c7};
  padding: 20px 10px;
  font-size: 1.125em;
  font-family: ${(props) => props.theme.font.roboto};
  border-radius: 5px 4px 0 0;
  transition: 0.1s ease-in;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaries.a};

  &:focus {
    background: ${(props) => props.theme.colors.form.b};
    border: none;
    transform: scale(1.02);
    border-radius: 5px;
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.primaries.a};
  }
`;

export const InputText = ({
  placeholder,
  name,
  type,
  gridArea,
}: IFormInputProps) => {
  return (
    <>
      <ContainerEstilizado $gridArea={gridArea}>
        <InputEstilizado placeholder={placeholder} type={type} />
        <ErrorMessage name={name}>
          {(mensagens) => (
            <div style={{ color: 'red', marginTop: '4px' }}>
              <Typography variant="body">{mensagens}</Typography>
            </div>
          )}
        </ErrorMessage>
      </ContainerEstilizado>
    </>
  );
};
