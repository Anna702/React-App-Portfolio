import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import CV from "../../../public/images/Anna Chernova_junior software developer_CV.pdf";
import avatar from "../../../public/images/anna-chernova-pic.png";
import PageWrapper from "../PageWrapper";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <h1>Hi, I am Anna!</h1>
        <img src={avatar} alt="Anna Chernova avatar" className="img-fluid" />
        <h2>Hi, I am Anna!</h2>
        <p>
          I'm a novice <mark className="textMarks">software developer</mark>{" "}
          with a 15-year background in journalism and PR. After graduating from
          a Northcoders Software Development bootcamp in 2023, I dove headfirst
          into the world of{" "}
          <mark className="textMarks">
            HTML, CSS, JavaScript, and React/React Native
          </mark>
          . Then I hungered for more knowledge and enrolled in a Front-end
          Development bootcamp with EdX.
        </p>
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
          download="Anna_Chernova_CV.pdf"
        >
          <FontAwesomeIcon icon={faFileDownload} /> Download CV
        </Button>
      </PageWrapper>
    </>
  );
};

export default Home;
