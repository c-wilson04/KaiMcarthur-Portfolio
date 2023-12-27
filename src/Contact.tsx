import { Col, Button, Form } from "react-bootstrap";

import Footer from "./Components/Footer";
import NavbarComponenet from "./Components/NavbarComponenet";
import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [hear, setHear] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const serviceID = "service_rvvhpbi";
    const TemplateID = "template_d881kij";
    const PublicKey = "I_0Vm93G5fGNi2epZ";

    const templateParams = {
      from_name: name,
      to_name: "Kai",
      from_email: email,
      to_email: "Kaimcarthur39@gmail.com",
      message: message,
      heard_message: hear,
      from_phone: phone,
      from_location: location,
    };

    emailjs
      .send(serviceID, TemplateID, templateParams, PublicKey)
      .then((response) => {
        console.log("Email sent succesfully!", response);

        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setLocation("");
        setHear("");
        const ModalTitle = document.getElementById("Modal-title");
        ModalTitle!.textContent = "Message sent!";
      })
      .catch((error) => {
        console.error("Error sending mail:", error);
        const ModalTitle = document.getElementById("Modal-title");
        ModalTitle!.textContent = "Sending Error: Try again";
      });
  };

  return (
    <>
      <NavbarComponenet />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="Modal-title" id="Modal-title">
            Message sent!
          </Modal.Title>
        </Modal.Header>
      </Modal>

      <div className="d-flex flex-column  m-3 mt-5 align-items-center">
        <div className="w-75 justify-content-center align-items-center">
          <p className="fs-1 border-bottom border-3 border-dark">Contact Me</p>
          <div className="d-flex flex-column">
            <div className="text-container">
              <p className=" fs-5 fw-light">
                Thank you for considering my photography services. I would love
                to hear from you and answer any questions you may have! Please
                reach out using the contact information provided below.
              </p>
              <Col
                md="auto"
                className="fs-4 fw-light text-left text-dark align-itens-center justify-content-flex-start"
              >
                <a
                  className="text-dark link-secondary"
                  href="mailto:kaimcarthur@gmail.com"
                >
                  KaiMcarthur39@gmail.com
                </a>
              </Col>
              <Col
                md="auto"
                className="text-left text-dark align-itens-center justify-content-flex-start"
              >
                <p className="fs-4 fw-light text-left text-dark">
                  D.C | Maryland | Virginia
                </p>
              </Col>
            </div>

            <Form onSubmit={handleSubmit} noValidate className="form mx-3">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  className="bg-light border-0"
                  type="Name"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  className="bg-light border-0"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Control
                  className="bg-light border-0"
                  type="Phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLocation">
                <Form.Control
                  className="bg-light border-0"
                  type="Location"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formHow">
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="bg-light border-0"
                  type="hear"
                  placeholder="How'd you hear about me?"
                  value={hear}
                  onChange={(e) => setHear(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  className="bg-light border-0"
                  rows={5}
                  type="What are you looking for?"
                  placeholder="What are you looking for?"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>

              <Button
                className="bg-black border-black"
                variant="primary"
                type="submit"
                onSubmit={handleSubmit}
                onClick={handleShow}
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Submit
              </Button>
            </Form>
            <div className="icon d-flex  h-100 align-items-center justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                fill="currentColor"
                className="bi bi-envelope-arrow-up d-block m-auto"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
