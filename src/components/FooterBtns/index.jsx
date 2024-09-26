import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import CV from "../../../public/images/Anna Chernova CV.pdf";

const ContactBtns = () => {
  return (
    <>
      <Button
        style={{ margin: "5px" }}
        variant="outline-primary"
        href="https://www.linkedin.com/in/annache/"
      >
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </Button>
      <Button
        style={{ margin: "5px" }}
        variant="outline-dark"
        href="https://github.com/Anna702"
      >
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </Button>
      <Button
        style={{ margin: "5px" }}
        variant="outline-info"
        href="mailto:anna@example.com"
      >
        <FontAwesomeIcon icon={faEnvelope} /> Email Me
      </Button>
      <Button
        style={{ margin: "5px" }}
        variant="outline-success"
        href={CV}
        download="Anna_Chernova_frontend_CV.pdf"
      >
        <FontAwesomeIcon icon={faFileDownload} /> Download CV
      </Button>
    </>
  );
};

export default ContactBtns;
