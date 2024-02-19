import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, Custom404, Contacts, Projects } from "./components/pages";
import MyNavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router basename={`/React-App-Portfolio`}>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/404" element={<Custom404 />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
