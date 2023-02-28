import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ButtonPart from "../CommonUtilti/Button/ButtonPart";
import productdata from "../../data/productdata";


export default function ShopPage() {


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
                <NavLink to="/shop" className="mainnav">
                  Shop
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="w-75 mx-auto my-4">
        <Tabs
          defaultActiveKey="Jacket"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Jacket" title="Jacket">
            <Row className="gy-3">
              <ShopCart category="Jacket" />
            </Row>
          </Tab>
          <Tab eventKey="Watch" title="Watch">
            <Row className="gy-3">
              <ShopCart category="Watch" />
            </Row>
          </Tab>
          <Tab eventKey="Womens" title="Womens">
            <Row className="gy-3">
              <ShopCart category="Womens" />
            </Row>
          </Tab>
          <Tab eventKey="Shoes" title="Shoes">
            <Row className="gy-3">
              <ShopCart category="Shoes" />
            </Row>
          </Tab>
          <Tab eventKey="Jewellery" title="Jewellery">
            <Row className="gy-3">
              <ShopCart category="Jewellery" />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
