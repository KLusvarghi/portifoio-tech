// Footer

import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

export const UlFooter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 32px 0;
  min-width: 410px;

  &:hover {
    li {
      &:not(:hover) {
        opacity: 0.3;
        filter: blur(1px);
      }
    }
  }

  @media (max-width: 480px) {
    min-width: auto;
    flex-direction: column;
    gap: 12px;
  }
`;

export const LiFooter = styled.li`
  transition: 0.3s ease-in-out;
  list-style: none;
  color: ${(props) => props.theme.colors.footer.b};
`;

export const ContainerIcons = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 14px;
  }
`;

export const Separator = styled.span`
  width: 100%;
  height: 0.5px;
  background: ${(props) => props.theme.colors.footer.a};
  margin-bottom: 12px;
  flex-wrap: wrap;
`;
