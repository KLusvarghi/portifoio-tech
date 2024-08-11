import styled from 'styled-components';

export const Header = styled.header`
  background: ${(props) => props.theme.colors.bgGradient.a};
  padding: ${(props) => props.theme.spacing.l};
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    gap: ${(props) => props.theme.spacing.l};

    /* aplcia a opacidade nos itens não selecionados */
    &:hover {
      li {
        &:not(:hover) {
          opacity: 0.3;
          filter: blur(1px);
        }
      }
    }

    li {
      list-style: none;
      position: relative;
      transition: 0.5s;
      padding-bottom: 0.3rem;

      &::after {
        content: '';
        position: absolute;
        margin: 0 10% 0 10%;
        width: 80%;
        height: 2px;
        top: 100%;
        left: 0;
        background: ${(props) => props.theme.colors.neutral.c1};
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;
