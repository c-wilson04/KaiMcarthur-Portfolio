import { Container, Card } from "react-bootstrap";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <Container className="background w-100 m-0 d-flex mw-100 ">
        <Container className=" background d-flex flex-fill container w-100">
          <Container className=" writing">
            <p className="text text-center mb-0">
              <span>Photography</span> services that <span>capture</span> the
              essence of the <span>DMV</span> metropolitan area
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="currentColor"
              className="arrow bi bi-arrow-down m-2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
              />
            </svg>
          </Container>
          <Container className="yo rounded-5">
            <Card border="light" className="d-block ctnr rounded-5 text-white">
              <Card.Img
                className="hero-pic rounded-5 "
                src="/images/Hero-2.jpeg"
                alt="Card image"
              />
              <Card.ImgOverlay className="d-flex text-center align-item-center justify-content-center">
                <Card.Title className="text text-center d-flex fw-semibold w-75 h-100 justify-content-center align-items-center flex-column">
                  <p className="writing1 fs-1 text text-center">
                    <span>Photography</span> services that <span>capture</span>{" "}
                    the essence of the <span>DMV</span> metropolitan area
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="currentColor"
                    className="arrow1 bi bi-arrow-down m-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                    />
                  </svg>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Hero;
