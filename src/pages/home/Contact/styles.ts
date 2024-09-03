import styled from 'styled-components';
import { IStyledSvgProps } from '../../../types/auxProps';

export const ContainerMessage = styled.div`
  position: absolute;
  display: flex;
  flex: 1000;
  background-color: #fff;
  border-radius: 20px;
  bottom: 10%;
  left: 42%;
  min-width: 120px;
  max-width: 280px;
  height: auto;
  padding: 12px 28px;
  font-family: $font-3;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 40%);
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    color: ${props => props.theme.colors.neutral.c8};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`;

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
      fill: ${(props) => props.theme.colors.form.path};
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
