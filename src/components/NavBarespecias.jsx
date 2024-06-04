/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Asegúrate de tener este archivo de estilos

const NavBarespecias = () => {
  return (
    <Navbar expand="lg" className="navBg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Las Especias
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login" className="btn btn-outline-dark mx-2">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarespecias;