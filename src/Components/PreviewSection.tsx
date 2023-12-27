import { Container, Row, Image, Col } from "react-bootstrap";

//choose a div to put everything in
//make a function that adds images by rows of 4 from the folder images
//first we create an varible (image-holder) that is linked by document query selectior to the document
// second we take the first 4 images and add them to them in their col format to the document
//third we repeat the process until there are no more images

const PreviewSection = () => {
  return (
    <Container id="image-holder" className="mt-5 bg-white">
      <Row className=" d-flex  mb-3 m-0 align-items-center justify-content-center">
        <Col className="d-flex mb-3 m-0 justify-content-center align-items-center">
          <Image src="images/Elantra1.jpeg" height={250}></Image>
        </Col>
        <Col className="d-flex mb-3 m-0 justify-content-center align-items-center">
          <Image src="images/car-bag.jpeg" height={250}></Image>
        </Col>
        <Col className="d-flex mb-3 m-0 justify-content-center align-items-center">
          <Image src="images/dude-smile.jpeg" height={250}></Image>
        </Col>
      </Row>
      <Row className="d-flex mb-3 m-0 align-items-center justify-content-center">
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/car-dashboard.jpeg" height={250}></Image>
        </Col>
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/YT-Family-2.jpeg" height={250}></Image>
        </Col>
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/yellow-car.jpeg" height={250}></Image>
        </Col>
      </Row>
      <Row className="m-0 d-flex mb-3 align-items-center justify-content-center">
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/dude-arms.jpeg" height={250}></Image>
        </Col>
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/Guy3.jpeg" height={250}></Image>
        </Col>
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/Elantra3.jpeg" height={250}></Image>
        </Col>
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/q-chinup.jpeg" height={250}></Image>
        </Col>
      </Row>
      <Row className="m-0 d-flex mb-3 align-items-center justify-content-center">
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/rakz.jpeg" height={250}></Image>
        </Col>
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/dude-phone.jpeg" height={250}></Image>
        </Col>
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/Girl3.jpeg" height={250}></Image>
        </Col>
        <Col className="mb-3 d-flex justify-content-center align-items-center">
          <Image src="images/q-fit.jpeg" height={250}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default PreviewSection;
