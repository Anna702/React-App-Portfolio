import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="fixed-top"
      style={{ backgroundColor: "#ea6e3a" }}
    >
      <Container>
        <Navbar.Brand href="./">
          <img
            src="public/images/header logo pic.png"
            alt="Anna Chernova logo"
            style={{ maxHeight: "50px", marginRight: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./about">About me</Nav.Link>
            <Nav.Link href="./portfolio">Portfolio</Nav.Link>
            <Nav.Link href="./contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
