import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MusicSection from "./components/MusicSection";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

const App = () => {
  return (
    <>
      <Container fluid>
        <Sidebar />
        {/* <div className="content"> */}
        {/* <div className="page"> */}
        <Container fluid>
          <Row>
            <Col>
              <MainSection />
              <MusicSection title="Rock Classics" artist="queen" sectionNumber="section1" />
              <MusicSection title="Pop Culture" artist="katyperry" sectionNumber="section2" />
              <MusicSection title="#HipHop" artist="eminem" sectionNumber="section3" />
            </Col>
          </Row>
          <Player />
        </Container>
        {/* </div> */}
        {/* </div> */}
      </Container>
    </>
  );
};
/* ma cosa hai combinato con il css? non ho controllato

  sto ancora facendo, okok, mi mostri un attimo la pagina?
  porcodio
  mi sta facendo paura quello che vedo
  e te che pensavi di essere messo peggio, no ma io non parlavo di loro, parlavo di quello 
  che vedo nel browser ahahaha
*/
export default App;
