import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Custom404, Contacts, Projects } from "./components/pages";
import MyNavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import FooterBtns from "./components/FooterBtns";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <MyNavBar />
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/404"
          element={
            <PageWrapper>
              <Custom404 />
            </PageWrapper>
          }
        />
        <Route
          path="/contacts"
          element={
            <PageWrapper>
              <Contacts />
            </PageWrapper>
          }
        />
      </Routes>
      <FooterBtns />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
