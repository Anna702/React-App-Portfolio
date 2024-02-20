import PageWrapper from "../PageWrapper";
import { ListGroup } from "react-bootstrap";
import FooterBtns from "../FooterBtns";

const About = () => {
  return (
    <>
      <PageWrapper>
        <h1>My story, skills and philosophy</h1>
        <div>
          <p>
            I am Anna Chernova - a <strong>Junior Software Developer</strong>{" "}
            based in Folkestone, England.
          </p>
          <p>
            With a background spanning{" "}
            <strong>over 15 years in journalism and PR</strong>, I transitioned
            into the world of software development after graduating from a
            Northcoders Software Development bootcamp in 2023.
          </p>
          <p>
            My journey into tech began with mastering fundamentals like HTML,
            CSS, JavaScript, Node.js and React/React Native. Then I enrolled in
            a Front-end Development bootcamp with EdX, where I continued
            studying Vite, Inquirer, jQuery, Bootstrap, API integration and
            various other technologies.
          </p>
          <p>
            <strong>My mission</strong> is to mix my storytelling power with
            technical skills to craft user-friendly and impactful applications.
            I am excited to collaborate with like-minded companies and
            individuals on innovative projects.
          </p>
        </div>
        <h2>Technical Skills</h2>
        <ListGroup>
          <ListGroup.Item>HTML</ListGroup.Item>
          <ListGroup.Item>CSS</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>Node.js</ListGroup.Item>
          <ListGroup.Item>Bootstrap</ListGroup.Item>
          <ListGroup.Item>React</ListGroup.Item>
          <ListGroup.Item>React Native</ListGroup.Item>
          <ListGroup.Item>Firebase</ListGroup.Item>
          <ListGroup.Item>Inquirer</ListGroup.Item>
          <ListGroup.Item>jQuery</ListGroup.Item>
          <ListGroup.Item>Canva</ListGroup.Item>
          <ListGroup.Item>Figma</ListGroup.Item>
        </ListGroup>

        <h2>Professional Background</h2>
        <p>
          Previously, I worked as a journalist and commercial writer for Pulse
          UK, contributing to print and online publications, and as a
          Producer/Reporter for the broadcasting company MIR. During my
          maternity leave, I continued to engage in writing commercial articles,
          editing videos for personal blogs, providing social media development
          consulting.
        </p>
        <h2>Qualifications</h2>
        <p>
          Graduated from Lomonosov Moscow State University (MSU) with a
          qualification in Journalism (5 years).
        </p>
        <h2>Right to Work</h2>
        <p>
          I hold settled status in the United Kingdom, also eligible to work in
          the EU with Italian citizenship, and have Russian citizenship with the
          right to work in Russia.
        </p>
        <FooterBtns />
      </PageWrapper>
    </>
  );
};

export default About;
