import React from "react";
import {Container, Navbar} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" variant="light" className="navbar-orange">
      <Container>
        <Navbar.Brand href="/">Main</Navbar.Brand>
        <Navbar.Brand href="/user">User</Navbar.Brand>
        <Navbar.Brand href="/favorites">Favorites</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
