import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavBar() {
  return (
    <>
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
              <Nav.Link
                href="./"
                style={{
                  margin: "5px",
                  backgroundColor: "#fbf2b3",
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="./about"
                style={{
                  margin: "5px",
                  backgroundColor: "#fbf2b3",
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                About me
              </Nav.Link>
              <Nav.Link
                href="./portfolio"
                style={{
                  margin: "5px",
                  backgroundColor: "#fbf2b3",
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="./contacts"
                style={{
                  margin: "5px",
                  backgroundColor: "#fbf2b3",
                  borderRadius: "5px",
                  color: "black",
                }}
              >
                Contacts
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: "50px" }}></div>
    </>
  );
}

export default MyNavBar;
