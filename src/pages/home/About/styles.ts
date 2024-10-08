import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 60px;
  gap: 44px;
  justify-content: center;
  align-items: center;

  @media (max-width: 680px) {
    margin-bottom: 80px;
  }

  @media (max-width: 431px) {
    margin-top: 32px;
  }
`;

export const Img = styled.img`
  max-height: 415px;
  max-width: 348px;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TextBold = styled.span`
  color: ${(props) => props.theme.colors.primaries.a};
  font-weight: 500;
`;

export const LinkText = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaries.a};
  font-weight: 500;
  transition: 0.2s ease-in;

  &:hover {
    color: ${(props) => props.theme.colors.title.separator};
  }
`;

export const ContainerTypograph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerInformations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  row-gap: 22px;
  column-gap: 28px;

  @media (max-width: 670px) {
    button {
      width: 100%;
    }

    div {
      width: 100%;
    }
  }
`;
export const ContainerXp = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const ContaienrAttribute = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  p {
    font-size: 1em;
  }

  @media (max-width: 436px) {
    p {
      font-size: 0.75em;
    }
    h2 {
      font-size: 2em;
    }
  }
`;
