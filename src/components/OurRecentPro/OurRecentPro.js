import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./OurPro.css";
import product1 from "./images/product-5.webp";
import product2 from "./images/product-2.webp";
import product3 from "./images/product-3.webp";

import { NavLink } from "react-router-dom";
import productdata from "../../data/productdata";

export default function OurRecentPro() {
  const [product, setProduct] = useState(productdata);

  const addToCart = (data) => {
    let cartLength = JSON.parse(localStorage.getItem("cartItems"));

    if (cartLength === null || cartLength === undefined) {
      let dataCart = [];
      dataCart.push(data);
      localStorage.setItem("cartItems", JSON.stringify(dataCart));
    } else {
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      cartItems.push(data);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      window.location.reload();
    }
  };

  return (
    <div>
      <Carousel className="py-5 px-3 bg-body-secondary mt-4" variant="dark">
        <Carousel.Item>
          <Row>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100 "
                  src={product1}
                  alt="Third slide"
                />
                <h2 className="m-4 p-2"> Mens Sharwani </h2>
              </div>
            </Col>

            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product2}
                  alt="Third slide"
                />
                <NavLink to="/addtocart">
                  <button className="btn_pro py-2 px-3">ADD TO CART</button>
                </NavLink>
              </div>
            </Col>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product3}
                  alt="Third slide"
                />
                <NavLink to="/addtocart">
                  <button className="btn_pro py-2 px-3">ADD TO CART</button>
                </NavLink>
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
                <NavLink to="/addtocart">
                  <button className="btn_pro py-2 px-3">ADD TO CART</button>
                </NavLink>
              </div>
            </Col>

            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product2}
                  alt="Third slide"
                />
                <NavLink to="/addtocart">
                  <button className="btn_pro py-2 px-3">ADD TO CART</button>
                </NavLink>
              </div>
            </Col>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product3}
                  alt="Third slide"
                />
                <NavLink to="/addtocart">
                  <button className="btn_pro py-2 px-3">ADD TO CART</button>
                </NavLink>
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
                <NavLink to="/addtocart">
                  <button className="btn_pro py-2 px-3">ADD TO CART</button>
                </NavLink>
              </div>
            </Col>

            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product2}
                  alt="Third slide"
                />
                <NavLink to="/addtocart">
                  <button className="btn_pro py-2 px-3">ADD TO CART</button>
                </NavLink>
              </div>
            </Col>
            <Col>
              <div className="pro_content border border-dark-subtle rounded bg-body-tertiary">
                <img
                  className="d-block w-100"
                  src={product3}
                  alt="Third slide"
                />
                <NavLink to="/addtocart">
                  <button className="btn_pro py-2 px-3">ADD TO CART</button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
