import React from "react";
import Container from "react-bootstrap/Container";
import "./Logo.css";
import logoimg from "./images/Logo.png";

export default function LogoPart() {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center my-3 logo">
          <img alt="logo " src={logoimg} />
        </div>
      </Container>
    </div>
  );
}
