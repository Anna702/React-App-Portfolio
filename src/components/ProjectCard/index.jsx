import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardProject({ project }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.pitch}</Card.Text>
        <Card.Img variant="top" src="holder.js/100px180" />
        <a href="">
          <Button variant="primary">Deployed</Button>
        </a>
        <a href="">
          <Button variant="primary">GitHub</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default CardProject;
