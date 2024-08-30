import styled from 'styled-components';
import { IStyledSvgProps } from '../../types/auxProps';

export const Wrapper = styled.div`
  margin: 60px 0 120px;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 88px;
  justify-content: center;
  align-items: center;
`;
export const ContainerInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
export const ContainerInfo = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const ContainerIcone = styled.span<IStyledSvgProps>`
  padding: 12px;
  border-radius: 100%;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 25%);

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.form.b};
  }

  svg {
    max-height: 28px;
    max-width: 28px;

    path {
      fill: ${(props) =>
        props.theme.colors.form.path};
    }
  }
`;

export const SuccessMessage = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.neutral.c10};
  padding: 12px 20px;
  max-width: 20%;
  text-align: center;
  border-radius: 4px;
`;
