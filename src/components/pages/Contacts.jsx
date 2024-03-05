import { useRef, useState } from "react";
import PageWrapper from "../PageWrapper";
import { Container, Form, Button, Modal } from "react-bootstrap";
import emailjs from "emailjs-com";

// import email config
const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const Contacts = () => {
  const form = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        handleShow();
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <PageWrapper>
        <h1>Contact me</h1>
        <p>
          In case you have any questions, feel free to contact me via any
          convenient method.
        </p>
        <Container className="contact-container">
          <h3>Contact Us</h3>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="text-start mb-3">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email address here..."
              />
            </Form.Group>
            <Form.Group className="text-start mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name here..."
              />
            </Form.Group>
            <Form.Group className="text-start mb-3">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your message here..."
                rows={5}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="roboto-bold custom-btn send-btn"
            >
              Send
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Your message has been sent!</Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className="close-btn"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Contacts;
