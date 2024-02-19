import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom"; 
import { House, ArrowUpCircle, PersonCircle } from "react-bootstrap-icons"; // Icons from React Bootstrap

function Footer() {
  return (
    <Navbar fixed="bottom" bg="light" variant="light">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <Nav>
              <Nav.Item>
                <Link to="/" className="nav-link">
                  <House size={24} />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/projects" className="nav-link">
                  <ArrowUpCircle size={24} />
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contacts" className="nav-link">
                  <PersonCircle size={24} />
                </Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <Navbar.Text style={{ fontSize: "smaller" }}>
              © 2024 Anna Chernova
            </Navbar.Text>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
