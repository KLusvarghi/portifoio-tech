import { Header } from '../components/Header/Header';
// import { Footer } from '../components/Footer/Footer';
import { AuxProps } from '../types/auxProps';
import { Col, Container, Row } from 'react-grid-system';

const BaseLayout = ({ children }: AuxProps) => {
  return (
    <>
      <Header>
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
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
