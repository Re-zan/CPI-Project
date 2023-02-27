import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./OurPro.css";
import product1 from "./images/product-5.webp";
import product2 from "./images/product-2.webp";
import product3 from "./images/product-3.webp";
import { NavLink } from "react-router-dom";

export default function OurRecentPro() {
  return (
    <div>
      <Carousel className="py-5 px-3 bg-body-secondary mt-4" variant="dark">
        <Carousel.Item>
          <Row>
            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100 "
                    src={product1}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>

            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100"
                    src={product2}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100"
                    src={product3}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100 "
                    src={product1}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>

            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100"
                    src={product2}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100"
                    src={product3}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100 "
                    src={product1}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>

            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100"
                    src={product2}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/shop">
                <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                  <img
                    className="d-block w-100"
                    src={product3}
                    alt="Third slide"
                  />
                  <h2 className="m-4 p-2 text-warning-emphasis">
                    {" "}
                    Mens Sharwani{" "}
                  </h2>
                </div>
              </NavLink>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
