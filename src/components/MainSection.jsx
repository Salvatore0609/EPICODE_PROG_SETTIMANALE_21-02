import { Container, Row, Col, Nav } from "react-bootstrap";

const MainSection = () => {
  return (
    <Container fluid className="col-12 col-md-9 p-0">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Nav className="w-100 justify-content-between">
            <Nav.Link href="#">TRENDING</Nav.Link>
            <Nav.Link href="#">PODCAST</Nav.Link>
            <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
            <Nav.Link href="#">NEW RELEASES</Nav.Link>
            <Nav.Link href="#">DISCOVER</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
