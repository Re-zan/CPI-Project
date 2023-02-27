import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import logoimg from "./images/Logo.png";
import footerimg from "./images/payment.png";
import { NavLink } from "react-router-dom";
import blogDatas from "../../data/blogdata";

export default function FooterPart() {
  const CategoryCard = () => {
    return blogDatas.map((items) => {
      return (
        <NavLink to={`/singleblog/${items.id}`} className="footer_mainnav">
          {" "}
          {items.categories}
        </NavLink>
      );
    });
  };
  return (
    <div>
      <div className="bg-dark footer">
        <Container>
          <Row className="py-5 ">
            <Col sm={1} md={3}>
              <div className="d-flex justify-content-center my-3 logo">
                <NavLink to="/">
                  <img alt="logo " src={logoimg} />
                </NavLink>
              </div>

              <div className="contact">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </Col>

            <Col sm={1} md={3}>
              <h4 className="fs-6 text fw-bold text-white ms-4 mt-5">
                USEFUL LINKS
              </h4>
              <div className="border-bottom border-warning w-25 ms-4"></div>
              <div className="ms-4">
                <NavLink to="/" className="footer_mainnav">
                  Home
                </NavLink>
                <NavLink to="/about" className="footer_mainnav">
                  About Us
                </NavLink>
                <NavLink to="/shop" className="footer_mainnav">
                  Shop
                </NavLink>
                <NavLink to="/blog" className="footer_mainnav">
                  BLog
                </NavLink>

                <NavLink to="/contact" className="footer_mainnav">
                  Contact US
                </NavLink>
              </div>
            </Col>

            <Col sm={1} md={3}>
              <h4 className="fs-6 text fw-bold text-white ms-4 mt-5">
                CATEGORIES
              </h4>
              <div className="border-bottom border-warning w-25 ms-4"></div>
              <div className="ms-4">
                <CategoryCard />
              </div>
            </Col>

            <Col sm={1} md={3}>
              <h4 className="fs-6 text fw-bold text-white mt-5">CONTACT</h4>
              <div className="border-bottom border-warning w-25"></div>
              <div className="contact">
                <p>
                  <i className="fa-solid fa-location-dot me-2"></i>
                  419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                </p>
                <p>
                  <i className="fa-solid fa-phone me-2"></i>
                  (607) 936-8058
                </p>
                <p>
                  <i className="fa-solid fa-envelope me-2"></i>
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
