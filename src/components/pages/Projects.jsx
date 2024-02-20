import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../../projects.json";
import { Button } from "react-bootstrap";

const Projects = () => {
  return (
    <>
      <h1 className="text-center mb-4">Projects Gallery</h1>
      <Row xs={1} sm={2} md={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.pitch}</Card.Text>
              </Card.Body>
              <Card.Img
                variant="top"
                src={project.image}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="success"
                  href={project.deployedLink}
                  style={{ margin: "10px" }}
                >
                  Deployed app
                </Button>
                <Button
                  variant="success"
                  href={project.repoLink}
                  style={{ margin: "10px" }}
                >
                  GitHub repo
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;
