import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Bubbles from "./pages/bubbles";
import About from "./pages/about";
import Projects from "./pages/projects";
import Experience from "./pages/experience";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="*" element={<Navigate to="/bubbles" />} />
            <Route path="/bubbles" element={<Bubbles />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
