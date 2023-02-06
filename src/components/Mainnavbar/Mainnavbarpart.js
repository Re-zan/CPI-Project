import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Mainnavbarpart.css";

export default function Mainnavbarpart() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mx-auto mainnav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#link">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
