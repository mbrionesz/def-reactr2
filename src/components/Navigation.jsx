import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Router 2</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink
            to="/"
            className={setActiveClass}
            style={({ isActive }) => (isActive ? { color: "white" } : {})}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/pokemones"
            className={setActiveClass}
            style={({ isActive }) => (isActive ? { color: "white" } : {})}
          >
            Pokemones
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}



  
