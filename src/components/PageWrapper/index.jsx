import Container from "react-bootstrap/Container";

const PageWrapper = ({ children }) => {
  return <Container className="py-4">{children}</Container>;
};

export default PageWrapper;
