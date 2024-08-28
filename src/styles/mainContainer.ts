import styled from "styled-components";

export const Main = styled.div`
  max-width: 1680px;
  margin: 120px auto 0;
  padding: 0 84px;

  @media (max-width: 1060px) {
    padding: 0 46px;
  }
  @media (max-width: 600px) {
    padding: 0 22px;
  }
`;