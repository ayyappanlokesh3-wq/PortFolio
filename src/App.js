import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navigation";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import Projects from "./Components/ProjectsPage";
import Contact from "./Components/ContactPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;