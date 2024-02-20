import { useState, useEffect } from "react";
import { ArrowUpCircle } from "react-bootstrap-icons";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add empty dependency array to run the effect only once

  return (
    <Navbar
      fixed="bottom"
      style={{ backgroundColor: "#ea6e3a", color: "black" }}
      variant="light"
    >
      <Container>
        <Row className="justify-content-end">
          <Col xs="auto" style={{ marginLeft: "20px" }}>
            <ArrowUpCircle
              size={24}
              onClick={scrollToTop}
              style={{ display: showButton ? "block" : "none" }}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <Navbar.Text
              style={{ fontSize: "smaller", color: "black" }}
              className="text-center"
            >
              © 2024 Anna Chernova
            </Navbar.Text>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
