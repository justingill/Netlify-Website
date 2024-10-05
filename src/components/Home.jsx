import { StrictMode } from "react";
import NavbarBoostrap from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import BottomDiv from "./BottomDiv.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import "../css/Navbar.css";
import "../css/Jumbotron.css";
import "../css/BottomDiv.css";

function Home() {
  return (
    <StrictMode>
      <NavbarBoostrap />
      <Jumbotron />
      <BottomDiv />
    </StrictMode>
  );
}

export default Home;
