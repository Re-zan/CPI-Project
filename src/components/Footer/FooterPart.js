import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import footerimg from "./images/payment.png";

export default function FooterPart() {
  return (
    <div>
      <div className="bg-dark footer">
        <Container>
          <Row className="py-5">
            <Col sm={1} md={3}>
              <h4 className="fs-6 text fw-bold text-white">
                POPULAR CATEGORIES
              </h4>
              <div className="border-bottom border-warning w-25"></div>

              <ul>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
              </ul>
            </Col>

            <Col sm={1} md={3}>
              <h4 className="fs-6 text fw-bold text-white">PRODUCTS</h4>
              <div className="border-bottom border-warning w-25"></div>

              <ul>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
              </ul>
            </Col>

            <Col sm={1} md={3}>
              <h4 className="fs-6 text fw-bold text-white">OUR COMPANY</h4>
              <div className="border-bottom border-warning w-25"></div>

              <ul>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
                <li>
                  <a href="#dg">Fashion</a>{" "}
                </li>
              </ul>
            </Col>

            <Col sm={1} md={3}>
              <h4 className="fs-6 text fw-bold text-white">CONTACT</h4>
              <div className="border-bottom border-warning w-25"></div>
              <div className="contact">
                <p>
                  <i class="fa-solid fa-location-dot me-2"></i>
                  419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                </p>
                <p>
                  <i class="fa-solid fa-phone me-2"></i>
                  (607) 936-8058
                </p>
                <p>
                  <i class="fa-solid fa-envelope me-2"></i>
                  Example@Gmail.Com
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-md-center text-white">
            <Col md="auto py-3 pb-4">
              {" "}
              <div className="mx-auto">
                <img
                  className="d-block w-100"
                  src={footerimg}
                  alt="First slide"
                />
                <p className="text-center pt-3">
                  Copyright © Anon All Rights Reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
