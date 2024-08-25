import styled from "styled-components";

export const Main = styled.div`
  overflow: hidden;
  gap: 80px;
  padding: 0 84px;
  max-width: 1680px;
  margin: 120px auto 0;

  @media (max-width: 1060px) {
    padding: 0 46px;
  }
  @media (max-width: 600px) {
    padding: 0 22px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;
  gap: 44px;
  justify-content: center;
  align-items: center;
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

export const ContainerAcessibility = styled.span`
  cursor: pointer;
  padding: 12px 0;
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
    font-size: 16px;
  }

  @media (max-width: 436px) {
    p {
      font-size: 12px;
    }
    h1 {
      font-size: 32px;
    }
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  /* right: 50%; */
  padding: 4px 12px;
  color: ${(props) => props.theme.colors.neutral.c1};
  background: ${(props) => props.theme.colors.neutral.c10};
  font-family: ${(props) => props.theme.font.poppins};
  border-radius: 5px;
  /* z-index: 2; */
  /* pointer-events: none; */

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 10%;
    width: 13px;
    height: 13px;
    background: ${(props) => props.theme.colors.neutral.c10};
    transform: rotate(45deg);
    /* z-index: 1; */
    /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); */
  }
`;