import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Mainnavbarpart.css";

export default function Mainnavbarpart() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mx-auto ">
              <NavLink to="/" className="mainnav">
                Home
              </NavLink>
              <NavLink to="/about" className="mainnav">
                About Us
              </NavLink>
              <NavLink to="/shop" className="mainnav">
                Shop
              </NavLink>
              <NavLink to="/blog" className="mainnav">
                BLog
              </NavLink>

              <NavLink to="/contact" className="mainnav">
                Contact US
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
