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
  margin: 10px;
  transition: 0.2s;
`;
export const ContainerContent = styled.div`
  max-width: 80%;
  margin-top: 80px;
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
  flex-direction: row;
  gap: 8px;

  a {
    text-decoration: none;
  }
`;

export const Image = styled.img`
  margin-top: 40px;
  width: 100%;
`;
