import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import "./Logo.css";
import logoimg from "./images/Logo.png";
import { NavLink } from "react-router-dom";
import "./Topsearch.css";

export default function Topsearch() {
  // let cartLength = JSON.parse(localStorage.getItem("cartItems"));

  // let [cartItemsLen, setCartItemsLen] = useState(cartLength.length);
  return (
    <>
      <div className="topsearch border-bottom py-4">
        <Container>
          <Stack direction="horizontal" gap={4}>
            <div className="d-flex justify-content-center logo">
              <NavLink to="/">
                <img alt="logo " src={logoimg} />
              </NavLink>
            </div>
            <div className="mx-auto w-75 position-relative search">
              <Form.Control placeholder="Search Items" className="py-2 ps-3" />{" "}
              <NavLink to="#" className="me-3  position-absolute top-0 end-0">
                <i className="fa-solid fa-magnifying-glass pt-3"></i>
              </NavLink>
            </div>

            <div className="search-icons d-flex">
              {" "}
              <span className="me-4 position-relative">
                <NavLink to="/wishlist">
                  <i className="fa-regular fa-heart text-dark"></i>
                </NavLink>
              </span>
              <span className="me-5 position-relative">
                <NavLink to="/addtocart">
                  <i className="fa-solid fa-cart-arrow-down text-dark">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                      {/* {cartItemsLen}  */}+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </i>
                </NavLink>
              </span>{" "}
            </div>
          </Stack>
        </Container>
      </div>
    </>
  );
}
