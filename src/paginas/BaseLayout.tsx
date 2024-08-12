import { Col, Container, Row } from 'react-grid-system';
import { Header } from '../components/Header/Header';
// import { Footer } from '../components/Footer/Footer';
import { PortifolioLogo } from '../components/Icons/PortifolioLogo';
import { AuxProps } from '../types/auxProps';
import { Button } from '../components/Button/Button';
// import { Typography } from '../components/Typography/Typography';

const BaseLayout = ({ children }: AuxProps) => {
  return (
    <>
      <Header>
        <Container>
          <Row>
            <Col md={4}>
              <PortifolioLogo />
            </Col>
            <Col md={8}>
              <ul>
                <li><Button variant="header">Home</Button></li>
                <li>
                  <Button variant="header">Sobre</Button>
                </li>
                <li>
                  <Button variant="header">Projetos</Button>
                </li>
                <li>
                  <Button variant="header">Certificados</Button>
                </li>
                <li>
                  <Button variant="header">Contato</Button>
                </li>
              </ul>
              <Button variant="secondary">Baixar Cv</Button>
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
