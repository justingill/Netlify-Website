import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarBoostrap() {
  return (
    <Navbar expand="md" sticky="top">
    <Navbar.Brand href="#"> </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarBoostrap;