import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1680px;
  margin: 40px auto 0;
  padding: 0 84px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1060px) {
    padding: 0 46px;
  }
  @media (max-width: 600px) {
    padding: 0 22px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerArrow = styled.div`
  transform: rotate(180deg);
  align-self: flex-start;
  cursor: pointer;
  margin-bottom: 42px;
`;
