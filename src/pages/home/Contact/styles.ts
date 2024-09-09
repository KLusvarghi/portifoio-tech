import styled from 'styled-components';
import { IStyledSvgProps } from '../../../types/auxProps';
import { hideDown, showDown } from '../../../styles/keyframes/keyframes';

export const Wrapper = styled.div`
  position: relative;
  margin: 60px 0 120px;
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 88px;
  justify-content: center;
  align-items: center;

  @media (max-width: 431px) {
    margin-top: 32px;
  }
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
  transition: 0.2s ease-in;
  &:hover {
    cursor: pointer;
    transform: scale(1.125);
  }

  svg {
    max-height: 28px;
    max-width: 28px;

    path {
      fill: ${(props) => props.theme.colors.form.path};
    }
  }
`;

export const ContainerTextCopy = styled.div`
  position: absolute;
  top: 20%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.colors.neutral.c10};
  padding: 12px 20px;
  max-width: 300px;
  text-align: center;
  border-radius: 4px;

  animation: ${showDown} 1s ease forwards, ${hideDown} 1s ease forwards;
  animation-delay: 0s, 2s;
`;

export const ContainerMessage = styled.div`
  position: absolute;
  top: 20%;
  background-color: #fff;
  border-radius: 20px;
  min-width: 120px;
  max-width: 280px;
  padding: 12px 28px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 40%);

  animation: ${showDown} 1s ease forwards, ${hideDown} 1s ease forwards;
  animation-delay: 0s, 2.6s;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    color: ${(props) => props.theme.colors.neutral.c8};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`;
