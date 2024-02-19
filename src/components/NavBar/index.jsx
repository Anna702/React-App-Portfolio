import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function MyNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">Anna Chernova</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./about">About me</Nav.Link>
            <Nav.Link href="./portfolio">Portfolio</Nav.Link>
            <Nav.Link href="./contacts">Contacts</Nav.Link>
            {/* <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Project 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
