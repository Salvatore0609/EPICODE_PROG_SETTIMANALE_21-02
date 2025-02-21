import { Navbar, Nav, Button, Form, Image, Container, Row, Col } from "react-bootstrap";
import { BookFill, HouseDoor } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <Navbar variant="black" expand="md" className="fixed-left flex-column align-items-start vh-100">
      <Container fluid className="d-flex flex-column h-100 p-2">
        <Row className="w-100">
          <Col>
            <Navbar.Brand href="home">
              <Image src={logo} width="131" height="40" alt="Spotify Logo" />
            </Navbar.Brand>
          </Col>
        </Row>

        <Nav className="d-flex flex-column w-100">
          <Nav.Item>
            <Nav.Link href="home" className="d-flex align-items-center gap-2">
              <HouseDoor /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="library" className="d-flex align-items-center gap-2">
              <BookFill /> Your Library
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mt-3">
            <Form className="input-group">
              <Form.Control type="text" placeholder="Search" className="text-secondary border-secondary" style={{ borderRadius: "5px 0 0 5px" }} />
              <Button
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="bg-black text-white border-secondary"
                size="sm"
              >
                GO
              </Button>
            </Form>
          </Nav.Item>
        </Nav>
        <div className="d-flex flex-column mt-auto p-3 text-center">
          <Button className="signup-btn mb-2" variant="light">
            Sign Up
          </Button>
          <Button className="login-btn mb-2" variant="dark">
            Login
          </Button>
          <div className="d-flex gap-2 mt-2">
            <Nav.Link href="#" className="text-secondary">
              Cookie Policy
            </Nav.Link>
            <span className="text-secondary"> | </span>
            <Nav.Link href="#" className="text-secondary">
              Privacy
            </Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
