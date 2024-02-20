import avatar from "../../../public/images/anna-chernova-pic.png";
import PageWrapper from "../PageWrapper";
import Image from "react-bootstrap/Image";
import click from "../../../public/images/clickHere.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <h1>Hi, I am Anna!</h1>
        <img src={avatar} alt="Anna Chernova avatar" className="img-fluid" />
        <div style={{ marginBottom: "25px" }}></div>
        <p>
          I am a novice <mark className="textMarks">software developer</mark>{" "}
          with a 15-year background in journalism and PR. After graduating from
          a Northcoders Software Development bootcamp in 2023, I continued to
          work with{" "}
          <mark className="textMarks">
            HTML, CSS, JavaScript and React/React Native
          </mark>{" "}
          and enrolled in a Front-end Development bootcamp with EdX.
        </p>
        <h2> Welcome to my Portfolio page</h2>
        <Link to="./portfolio">
          <Image src={click} roundedCircle />
        </Link>
      </PageWrapper>
    </>
  );
};

export default Home;
