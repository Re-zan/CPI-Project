import React from "react";
import Container from "react-bootstrap/Container";
import "./TopMenu.css";
export default function TopMenu() {
  return (
    <>
      <div className="topheader">
        <Container>
          <div className=" d-flex justify-content-between">
            <div className="contactnum">
              {" "}
              <span>019929292992</span>{" "}
            </div>

            <div className="contactemail">
              {" "}
              <span>adkk@gmail.com</span>{" "}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
