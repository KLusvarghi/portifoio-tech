import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1680px;
  margin: 40px auto 0;
  padding: 0 84px;

  @media (max-width: 1060px) {
    padding: 0 46px;
  }
  @media (max-width: 600px) {
    padding: 0 22px;
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  text-align: center;
`;
export const ContainerArrow = styled.div`
  transform: rotate(180deg);
  align-self: flex-start;
  color: $c12;
  top: 50px;
  cursor: pointer;
  transition: 0.2s;
  margin-bottom: 42px;
  margin-left: 12px;
`;
export const ContainerContent = styled.div`
  max-width: 80%;
  margin-top: 60px;

  @media (max-width: 631px) {
    max-width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Technologies = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Navigations = styled.div``;

export const ContainerButton = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 8px;

  a {
    text-decoration: none;
  }

  @media (max-width: 510px) {
    a:nth-child(1) {
      flex-basis: 100%;
      display: flex;

      button {
        width: 100%;
      }
    }

    button:nth-child(3) {
      flex-grow: 2;
      flex-basis: 0;
    }

    a:nth-child(2),
    button:nth-child(2) {
      flex-grow: 3;
      flex-basis: 0;
      width: 100%;
    }

    a:nth-child(2) button,
    a:nth-child(3) button {
      width: 100%;
    }
  }
`;

export const Image = styled.img`
  margin-top: 40px;
  width: 100%;
`;
