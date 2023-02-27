import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ButtonPart from "../CommonUtilti/Button/ButtonPart";
import { NavLink } from "react-router-dom";
import productdata from "../../data/productdata";

export default function WishlistPartt() {
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

  function ShopCart(props) {
    return product.map((item) => {
      if (item["categories"] === props.category) {
        return (
          <>
            <Col sm={1} md={4}>
              <div className="new_pro border border-secondary-subtle rounded">
                {" "}
                <img
                  className="d-block w-100"
                  src={item["image"]}
                  alt="First slide"
                />
                <div className="p-4">
                  <h5 className="fs-5 text  text-warning-emphasis">
                    {item["categories"]}
                  </h5>
                  <h6 className="text-body-tertiary ">{item.title}</h6>
                  <i className="fa-solid fa-star text-warning fa-sm"></i>
                  <i className="fa-solid fa-star text-warning fa-sm"></i>
                  <i className="fa-solid fa-star text-warning fa-sm"></i>
                  <i className="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                  <i className="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                  <p className="fs-6 text fw-bold ">
                    $ {item["discount"]}
                    <del className="fs-6 text fw-lighter text-body-tertiary">
                      $ {item["price"]}
                    </del>
                  </p>
                  <NavLink to={`/sinlgeshoppage/${item.id}`}>
                    <ButtonPart />
                  </NavLink>
                </div>
                <div className="overlay ">
                  <p className="border border-secondary-subtle rounded p-1">
                    <NavLink to="/wishlist">
                      <i className="fa-regular fa-heart text-dark"></i>
                    </NavLink>
                  </p>
                  <p className="border border-secondary-subtle rounded p-1">
                    <NavLink to={`/sinlgeshoppage/${item.id}`}>
                      <i className="fa-regular fa-eye text-dark"></i>
                    </NavLink>
                  </p>
                  <p className="border border-secondary-subtle rounded p-1">
                    <button
                      className="btn border-0 p-0"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      <i className="fa-solid fa-cart-arrow-down"></i>
                    </button>
                  </p>
                </div>
              </div>
            </Col>
          </>
        );
      }
    });
  }

  return (
    <div>
      <div className="bg-body-secondary">
        <Container>
          <Row>
            <Col className="py-5">
              {" "}
              <div className="mx-auto text-center py-5">
                <NavLink to="/" className="mainnav">
                  Home
                </NavLink>
                /
                <NavLink to="/wishlist" className="mainnav">
                  WishList
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5 py-5">
        {" "}
        <Row className="gy-3">
          <ShopCart category="Jacket" />
        </Row>
      </Container>
    </div>
  );
}
