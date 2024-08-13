import { Col, Container, Row } from '../components/Grid/Grid';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header/Header';
// import { Footer } from '../components/Footer/Footer';
import { PortifolioLogo } from '../components/Icons/PortifolioLogo';
import { AuxProps } from '../types/auxProps';
import { Button } from '../components/Button/Button';
import UseWindowSize from '../hooks/useWindowSize';

interface IStyledHamburguerProps {
  $active: boolean;
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 26px;
`;

const StyledUl = styled.ul<IStyledHamburguerProps>`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    ${(props) => {
      switch (props.$active) {
        case true:
          return css`
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            row-gap: 12px;
            background: ${(props) => props.theme.colors.bgGradient.a};
            position: absolute;
            top: 100%;
            right: 35%;
            z-index: 1000;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 10%);
          `;
        default:
          return css`
            display: none;
          `;
      }
    }}
  }

  display: flex;

  &:hover {
    li {
      &:not(:hover) {
        opacity: 0.3;
        filter: blur(1px);
      }
    }
  }
`;

const StyledLi = styled.li`
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

  @media (min-width: ${(props) => props.theme.breakpoint.mobile}) {
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const StyledDivButton = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: none;
  }
`;

const StyledButtonHamburguer = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.neutral.c1};
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    display: flex;
  }
`;

const StyledHamburguer = styled.span<IStyledHamburguerProps>`
  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    width: 20px;
    border-top: 2px solid;
    color: ${(props) => props.theme.colors.neutral.c1};

    &::after,
    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: currentColor;
      margin-top: 5px;
      transition: 0.3s;
      position: relative;
    }
    ${({ $active }) =>
      $active &&
      `
        border-top-color: transparent;
        &::before {
          transform: rotate(135deg);
        }

        &::after {
          transform: rotate(-135deg);
          top: -7px;
        }
    `}
  }
`;

const BaseLayout = ({ children }: AuxProps) => {
  const [active, setAcive] = useState(false);
  const width = UseWindowSize();

  return (
    <>
      <Header>
        <Container>
          <Row>
            <Col>
              <Link to={'/pagina-inicial'}>
                <PortifolioLogo
                  width={width < 1100 ? 201 : 231}
                  height={width < 1100 ? 36 : 42}
                />
              </Link>
            </Col>
            <Col>
              <StyledNav>
                {/* passando a props com "$" para que o styled-components filtre essa props e não passse para o DOM, assim não gerando erro no console */}
                <StyledUl $active={active} onMouseLeave={() => setAcive(false)}>
                  <StyledLi>
                    <Button variant="header">Home</Button>
                  </StyledLi>
                  <StyledLi>
                    <Button variant="header">Sobre</Button>
                  </StyledLi>
                  <StyledLi>
                    <Button variant="header">Projetos</Button>
                  </StyledLi>
                  <StyledLi>
                    <Link to={'/pagina-inicial/certificados'}>
                      <Button variant="header">Certificados</Button>
                    </Link>
                  </StyledLi>
                  <StyledLi>
                    <Button variant="header">Contato</Button>
                  </StyledLi>
                </StyledUl>
                <StyledDivButton>
                  <Button variant="secondary">Baixar Cv</Button>
                </StyledDivButton>

                <StyledButtonHamburguer onClick={() => setAcive(!active)}>
                  <StyledHamburguer $active={active}></StyledHamburguer>
                </StyledButtonHamburguer>
              </StyledNav>
            </Col>
          </Row>
        </Container>
      </Header>
      {children}

      {/* <Footer>
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </Footer> */}
    </>
  );
};

export default BaseLayout;
