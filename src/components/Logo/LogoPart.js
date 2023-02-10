import React from "react";
import Container from "react-bootstrap/Container";
import "./Logo.css";
import logoimg from "./images/Logo.png";
import { NavLink } from "react-router-dom";

export default function LogoPart() {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center my-3 logo">
          <NavLink to="/">
            <img alt="logo " src={logoimg} />
          </NavLink>
        </div>
      </Container>
    </div>
  );
}
