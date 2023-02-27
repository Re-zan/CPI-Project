import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import "./TopMenu.css";
export default function TopMenu() {
  return (
    <>
      <div className="topheader">
        <Container>
          <div className=" d-flex justify-content-between">
            <div>
              <NavLink to="https://www.facebook.com/">
                {" "}
                <i className="fa-brands fa-square-facebook header_social_icon fs-6 me-3  rounded p-1"></i> 
              </NavLink>{" "}
              <NavLink to="https://www.instagram.com/">
                {" "}
                <i className="fa-brands fs-6 me-3 header_social_icon rounded p-1 fa-twitter "></i>
              </NavLink>{" "}
              <NavLink to="https://www.youtube.com/">
                {" "}
                <i className="fa-brands fa-square-instagram header_social_icon fs-6 me-3  rounded p-1"></i>
              </NavLink>{" "}
              <NavLink to="https://www.youtube.com/">
                {" "}
                <i className="fa-brands fa-linkedin header_social_icon fs-6 me-3  rounded p-1"></i>
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
