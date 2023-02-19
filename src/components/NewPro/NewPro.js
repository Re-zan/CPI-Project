import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NewPro.css";
import ButtonPart from "../CommonUtilti/Button/ButtonPart";
import { NavLink } from "react-router-dom";
import productdata from "../../data/productdata";

export default function NewPro() {
  const [product, setProduct] = useState(productdata);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
    localStorage.setItem("productItems", JSON.stringify(cart));
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  const updateCartLen = (value) => {
    setCart(value);
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
                  <i class="fa-solid fa-star text-warning fa-sm"></i>
                  <i class="fa-solid fa-star text-warning fa-sm"></i>
                  <i class="fa-solid fa-star text-warning fa-sm"></i>
                  <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                  <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
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
                    <i class="fa-regular fa-heart fa-lg"></i>
                  </p>
                  <p className="border border-secondary-subtle rounded p-1">
                    <NavLink to={`/sinlgeshoppage/${item.id}`}>
                      <i class="fa-regular fa-eye text-dark"></i>
                    </NavLink>
                  </p>
                  <p className="border border-secondary-subtle rounded p-1">
                    <i class="fa-solid fa-cart-arrow-down"></i>
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
      <Container>
        {" "}
        <Row className="gy-3">
          <ShopCart category="Jacket" />
        </Row>
      </Container>
    </div>
  );
}
