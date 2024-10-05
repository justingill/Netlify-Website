import { StrictMode } from "react";
import NavbarBoostrap from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Projects from "./Projects.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";
import "../css/Jumbotron.css";
import "../css/Projects.css";

function Portfolio() {
  return (
    <StrictMode>
      <NavbarBoostrap />
      <Jumbotron />
      <Projects />
    </StrictMode>
  );
}

export default Portfolio;
