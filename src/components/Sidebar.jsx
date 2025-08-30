import { Navbar, Nav, Button, Form, Image, Row, Col } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <aside>
      <Navbar variant="black" expand="md" className="fixed-left flex-column align-items-center">
        <Row className="w-100">
          <Col>
            <Navbar.Brand href="home">
              <Image src={logo} width="131" height="40" alt="Spotify Logo" className="mt-2" />
            </Navbar.Brand>
          </Col>
        </Row>

        <Nav className="d-flex flex-column mt-5">
          <Nav.Item>
            <Nav.Link href="home" className="d-flex align-items-center gap-2">
              <HouseDoorFill width="50" height="30" /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="library" className="d-flex align-items-center gap-2">
              <BookFill width="50" height="30" /> Your Library
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
      </Navbar>
      <div className="flex-column align-content-end vh-100 text-center">
        <Button className="signup-btn mb-2" variant="light">
          Sign Up
        </Button>
        <Button className="login-btn mb-2" variant="dark">
          Login
        </Button>
        <div className="d-flex justify-content-center gap-2 mt-2">
          <Nav.Link href="#" className="text-secondary">
            Cookie Policy
          </Nav.Link>
          <span className="text-secondary"> | </span>
          <Nav.Link href="#" className="text-secondary">
            Privacy
          </Nav.Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
