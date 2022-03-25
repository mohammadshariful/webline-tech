import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar  navbar-dark bg-dark ">
        <Container>
          <Navbar.Brand href="#home">Webline Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center align-items-center">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/order">Order</Nav.Link>
              <Nav.Link href="/manage">Manage Inventory</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
