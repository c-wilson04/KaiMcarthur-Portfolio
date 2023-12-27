import { Container, Row, Col, Image } from "react-bootstrap";
import Footer from "./Components/Footer";
import NavbarComponenet from "./Components/NavbarComponenet";
import "./Portfolio.css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import Image1 from "../images/yellow-car.jpeg";

const Portfolio = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.3/dist/index.bundle.min.js"></script>
      <NavbarComponenet />

      <Container id="image-holder" className="mt-5 bg-white">
        <Row className=" d-flex  mb-3 m-0 align-items-center justify-content-center">
          <Col className="d-flex mb-3 m-0 justify-content-center align-items-center">
            <LightGallery
              addClass="gallery-container"
              onInit={onInit}
              speed={500}
              plugins={[]}
            >
              <a href={Image1} className="gallery-item">
                <Image
                  className="gallery-item"
                  src={Image1}
                  height={250}
                ></Image>
              </a>
              <a href="images/Elantra1.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="images/Elantra1.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Elantra3.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Elantra3.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Elantra5.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Elantra5.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Hero.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Hero.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/dude-arms.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/dude-arms.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/dude-smile.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/dude-smile.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/dude-phone.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/dude-phone.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/rakz.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/rakz.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/car-bag.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/car-bag.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/car-inside.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/car-inside.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/car-right.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/car-right.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/car-dashboard.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/car-dashboard.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-chinup.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-chinup.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Cookout-5.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Cookout-5.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-fit.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-fit.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-2hands.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-2hands.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-armhold.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-armhold.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-chinup.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-chinup.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-down.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-down.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-finger.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-finger.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Q-Hero.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Q-Hero.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-lookdown.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-lookdown.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-lookl.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-lookl.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-lookr.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-lookr.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-peace.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-peace.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-peace2.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-peace2.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-peace3.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-peace3.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-phone.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-phone.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q-phone2.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-phone2.jpeg"
                  height={250}
                ></Image>
              </a>{" "}
              <a href="/images/q-phonesmile.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-phonesmile.jpeg"
                  height={250}
                ></Image>
              </a>{" "}
              <a href="/images/q-shoulder.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q-shoulder.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/q2.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/q2.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/GirlGuy.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/GirlGuy.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/GirlGuy2.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/GirlGuy2.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/GirlGuy3.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/GirlGuy3.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/GirlGuy4.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/GirlGuy3.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Guy.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Guy.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Guy2.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Guy2.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Guy3.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Guy3.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/GuyGuy.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/GuyGuy.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Girl.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Girl.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Girl1.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Girl1.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Girl2.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Girl2.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Girl3.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Girl3.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Girl4.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Girl4.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/Girl5.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/Girl5.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/GirlBack.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/GirlBack.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/GirlClose.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/GirlClose.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/YT-Family-1.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/YT-Family-1.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/YT-Family-2.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/YT-Family-2.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/YT-Family-3.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/YT-Family-3.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/YT-Family-4.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/YT-Family-4.jpeg"
                  height={250}
                ></Image>
              </a>
              <a href="/images/YT-Family-5.jpeg" className="gallery-item">
                <Image
                  className="gallery-item"
                  src="/images/YT-Family-5.jpeg"
                  height={250}
                ></Image>
              </a>
            </LightGallery>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Portfolio;
