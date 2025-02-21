import { useSelector } from "react-redux";
import { Container, Row, Col, Image, ProgressBar } from "react-bootstrap";
import next from "../assets/playerbuttons/next.png";
import play from "../assets/playerbuttons/play.png";
import prev from "../assets/playerbuttons/prev.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";

const Player = () => {
  const currentSong = useSelector((state) => state.music.currentSong);

  return (
    <Container fluid className="bg-container pt-1">
      <Row className="h-100">
        <Col lg={{ span: 10, offset: 2 }}>
          <Row className="h-100 d-flex flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex justify-content-between">
                <a href="#">
                  <Image src={shuffle} alt="shuffle" fluid />
                </a>
                <a href="#">
                  <Image src={prev} alt="prev" fluid />
                </a>
                <a href="#">
                  <Image src={play} alt="play" fluid />
                </a>
                <a href="#">
                  <Image src={next} alt="next" fluid />
                </a>
                <a href="#">
                  <Image src={repeat} alt="repeat" fluid />
                </a>
              </div>
              <ProgressBar now={0} className="mt-3" />
            </Col>
            <Col className="justify-content-start">
              {currentSong && (
                <div className="text-white " style={{ maxWidth: "400px" }}>
                  <p>Now Playing: {currentSong.title}</p>
                  <p>Artist: {currentSong.artist.name}</p>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
