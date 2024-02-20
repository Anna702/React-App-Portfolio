import FooterBtns from "../FooterBtns";
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
        <FooterBtns />
      </PageWrapper>
    </>
  );
};

export default Home;
