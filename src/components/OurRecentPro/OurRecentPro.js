import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./OurPro.css";
import product1 from "./images/product-5.webp";
import product2 from "./images/product-2.webp";
import product3 from "./images/product-3.webp";

export default function OurRecentPro() {
  return (
    <div>
      <Carousel className="py-5 px-3 bg-body-secondary mt-4" variant="dark">
        <Carousel.Item>
          <Row>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product1}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>

            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product2}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product3}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product1}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>

            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product2}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product3}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product1}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>

            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product2}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product3}
                  alt="Third slide"
                />
                <button className="btn_pro px-3 py-2">
                  {" "}
                  Details
                  <i className="fa-solid fa-angles-right ms-2"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
