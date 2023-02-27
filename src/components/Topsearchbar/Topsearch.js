import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { NavLink } from "react-router-dom";
import "./Topsearch.css";

export default function Topsearch() {
  // let cartLength = JSON.parse(localStorage.getItem("cartItems"));
 
  // let [cartItemsLen, setCartItemsLen] = useState(cartLength.length);
  return (
    <>
      <div className="topsearch">
        <Container>
          <Stack direction="horizontal" gap={3} className="my-4">
            <div className="mx-auto w-100 position-relative search">
              <Form.Control placeholder="Search Items" />{" "}
              <NavLink to="#" className="me-3  position-absolute top-0 end-0">
                <i className="fa-solid fa-magnifying-glass pt-2"></i>
              </NavLink>
            </div>

            <div className="search-icons d-flex">
              {" "}
              <span className="me-4 position-relative">
                <NavLink to="/wishlist">
                  <i className="fa-regular fa-heart text-dark"></i>
                </NavLink>
              </span>
              <span className="me-4 position-relative">
                <NavLink to="/addtocart">
                  <i className="fa-solid fa-cart-arrow-down text-dark">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                    {/* {cartItemsLen}  */}
                    +<span className="visually-hidden">unread messages</span>
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
