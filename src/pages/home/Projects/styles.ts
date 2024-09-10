import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  gap: 80px;
  justify-content: center;
  align-items: center;

  @media (max-width: 680px) {
    margin-bottom: 80px;
  }

  @media (max-width: 431px) {
    margin-top: 32px;
  }
`;

export const ContainerProject = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media (min-width: 1180px) {
    &:nth-child(odd) {
      text-align: end;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
      text-align: start;

      div {
        justify-content: start;
      }
    }
  }

  @media (max-width: 1180px) {
    flex-direction: column;

    div {
      text-align: center;
      width: 100%;
      justify-content: center;

      #tech {
        margin: 28px 0 12px;
      }
      button {
        width: 100%;
      }
    }
  }
`;

export const Image = styled.img`
  flex: 3;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 50%;

  @media (max-width: 1180px) {
    align-items: center;
    max-width: 80%;
  }

  @media (max-width: 702px) {
    max-width: 100%;
  }
`;

export const ContainerListTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex-direction: row;
  margin: 28px 0 40px;

  justify-content: end;
`;

export const ContainerButton = styled.div`
  @media (max-width: 1180px) {
    max-width: 58%;
  }
  @media (max-width: 702px) {
    max-width: 72%;
  }
`;
