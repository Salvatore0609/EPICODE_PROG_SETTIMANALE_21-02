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
    <Container fluid className="bg-container p-0">
      <Row>
        <Col>
          <Row className="d-flex justify-content-center">
            <Col xs={4} md={4} className="justify-content-start">
              {currentSong && (
                <div className="text-light" style={{ maxWidth: "200px", maxHeight: "50px" }}>
                  <div className="d-flex gap-3">
                    <Image src={currentSong.album.cover_medium} fluid alt="track" style={{ maxWidth: "60px", maxHeight: "60px" }} />
                    <div className="" style={{ maxHeight: "30px" }}>
                      <p>Now Playing: {currentSong.title}</p>
                      <p>Artist: {currentSong.artist.name}</p>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col xs={8} md={4} className="playerControls">
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
              <ProgressBar className="mt-3" />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
