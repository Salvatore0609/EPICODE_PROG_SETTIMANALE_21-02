import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MusicSection from "./components/MusicSection";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

const App = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col sm={2} className="sidebar-container">
          <Sidebar />
        </Col>

        <Col sm={10} className="main-content p-0">
          <MainSection />
          <MusicSection title="Rock Classics" artist="queen" sectionNumber="section1" />
          <MusicSection title="Pop Culture" artist="katyperry" sectionNumber="section2" />
          <MusicSection title="#HipHop" artist="eminem" sectionNumber="section3" />
          <Player />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
