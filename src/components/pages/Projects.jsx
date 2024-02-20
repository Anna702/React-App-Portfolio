import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../../projects.json";
import { Button } from "react-bootstrap";
import PageWrapper from "../PageWrapper";

const Projects = () => {
  return (
    <>
      <PageWrapper>
        <h1 className="text-center">Projects Gallery</h1>
        <div className="text-center m-3">
          <h5>
            Explore my projects crafted with React, React Router, JSON, JSX,
            JavaScript, HTML, CSS, and Bootstrap.
          </h5>
          <h5>
            Click on the corresponding button to view each project online, and
            access the GitHub repository for further exploration.
          </h5>
        </div>
        <Row xs={1} sm={2} md={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card
                className="h-100"
                style={{ minWidth: "180px", border: "2px solid #547258" }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      padding: "10px",
                      color: "white",
                      backgroundColor: "#547258",
                      borderRadius: "15px",
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  <Card.Text>{project.pitch}</Card.Text>
                </Card.Body>

                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    borderTop: "2px solid #547258",
                    borderBottom: "2px solid #547258",
                  }}
                />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="success"
                    href={project.deployedLink}
                    style={{
                      border: "none",
                      margin: "10px",
                      backgroundColor: "#ea6e3a",
                    }}
                  >
                    Deployed app
                  </Button>
                  <Button
                    variant="success"
                    href={project.repoLink}
                    style={{
                      border: "none",
                      margin: "10px",
                      backgroundColor: "#ea6e3a",
                    }}
                  >
                    GitHub repo
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </PageWrapper>
    </>
  );
};

export default Projects;
