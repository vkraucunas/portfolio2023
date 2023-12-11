import "./App.scss";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ValCV from "./views/ValCV";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <Link id="skiplink" to="#maincontent">
        Skip to main content
      </Link>
      <header>
        <Link to="/">VK</Link>
        <nav>
          <Link to="/cv">my work</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </header>
      <main id="maincontent" className="content-grid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<ValCV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="content-grid">
        <p>
          Copyright {`${new Date().getFullYear()}`} Valerie Kraucunas. All
          rights reserved.
        </p>
      </footer>
    </Router>
  );
}

export default App;
