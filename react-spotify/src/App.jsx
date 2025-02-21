import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MusicSection from "./components/MusicSection";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

const App = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <Row>
          <Col>
            <MainSection />
            <MusicSection title="Rock Classics" artist="queen" sectionNumber="section1" />
            <MusicSection title="Pop Culture" artist="katyperry" sectionNumber="section2" />
            <MusicSection title="#HipHop" artist="eminem" sectionNumber="section3" />
          </Col>
        </Row>
      </Container>
      <Player />
    </>
  );
};

export default App;
