import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import "./TopMenu.css";
export default function TopMenu() {
  return (
    <>
      <div className="topheader ">
        <Container>
          <div className=" d-flex justify-content-between">
            <div>
              <NavLink to="https://www.facebook.com/">
                {" "}
                <i class="fa-brands fa-facebook contactnum"></i>
              </NavLink>{" "}
              <NavLink to="https://www.instagram.com/">
                {" "}
                <i class="fa-brands fa-square-instagram contactnum"></i>
              </NavLink>{" "}
              <NavLink to="https://www.youtube.com/">
                {" "}
                <i class="fa-brands fa-youtube contactnum"></i>
              </NavLink>{" "}
            </div>

            <div className="contactemail">
              {" "}
              <NavLink to="/login">
                {" "}
                <span className="text-dark">Login</span>{" "}
              </NavLink>{" "}
              /{" "}
              <NavLink to="/register">
                <span className="text-dark">Register</span>
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
