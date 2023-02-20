import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./OurPro.css";
import product1 from "./images/product-5.webp";
import product2 from "./images/product-2.webp";
import product3 from "./images/product-3.webp";
import ButtonPart from "../CommonUtilti/Button/ButtonPart";
import { NavLink } from "react-router-dom";
import Recentproductdata from "../../data/recentprodata";

export default function OurRecentPro() {
  const RecentproductdataCard = () => {
    return Recentproductdata.map((items) => {
      return (
        <div className="carousel-item active">
          <div className="row">
            <div className="col-lg-4">
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product1}
                  alt="Third slide"
                />
                <ButtonPart />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product2}
                  alt="Third slide"
                />
                <ButtonPart />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product3}
                  alt="Third slide"
                />
                <ButtonPart />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <RecentproductdataCard />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

{
  /* <Carousel className="py-5 px-3 bg-body-secondary mt-4" variant="dark">
        <Carousel.Item>
          <RecentproductdataCard />
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
                <ButtonPart />
              </div>
            </Col>

            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product2}
                  alt="Third slide"
                />
                <ButtonPart />
              </div>
            </Col>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product3}
                  alt="Third slide"
                />
                <ButtonPart />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel> */
}
