import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardProject({ project }) {
  return (
    <Card style={{ width: "24rem" }}>
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>{project.pitch}</Card.Text>
      <div style={{ marginBottom: "16px" }}> {/* Margin between image and buttons */}
        <Card.Img variant="top" src={project.image} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="success" href={project.deployedLink} style={{ marginRight: "15px" }}>Deployed</Button> {/* Margin between buttons */}
        <Button variant="success" href={project.repoLink}>GitHub</Button>
      </div>
    </Card.Body>
  </Card>
  );
}

export default CardProject;
