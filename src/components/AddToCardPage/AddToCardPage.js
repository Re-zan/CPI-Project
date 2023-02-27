import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./AddToCard.css";
import img1 from "./images/products/1.jpg";
// import img2 from "./images/products/2.jpg";
export default function AddToCardPage() {
  // let cartLength = JSON.parse(localStorage.getItem("cartItems"));

  // let [cartItems, setCartItems] = useState(cartLength);
  // let [cartItemsLen, setCartItemsLen] = useState(cartLength.length);

  // // Component Cart Vie
  // const CartVie = () => {
  //   return cartItems.map((item) => {
  //     return (
  //       <>
  //         <tr>
  //           <td>
  //             <img
  //               src={item.image}
  //               alt="dfsd"
  //               style={{ width: "80px", height: "80px" }}
  //             />
  //           </td>
  //           <td>
  //             <h4>{item.title}</h4>
  //           </td>
  //           <td>
  //             <span>$ {item.price}</span>
  //           </td>
  //           <td className="Quantity">1</td>
  //           <td>
  //             {" "}
  //             <span>$ {item.price * 1}</span>
  //           </td>
  //           <td className="remove">
  //             <i
  //               className="fa-solid fa-xmark"
  //               onClick={() => {
  //                 removeCart(item.id);
  //               }}
  //             ></i>
  //           </td>
  //         </tr>
  //       </>
  //     );
  //   });
  // };

  // // Remove Cart Items
  // const removeCart = (id) => {
  //   let n_data = cartItems.filter((cur_post) => {
  //     return cur_post.id !== id;
  //   });

  //   setCartItems(n_data);
  //   setCartItemsLen(n_data.length);
  // };

  // // Update the localStorage
  // localStorage.setItem("cartItems", JSON.stringify(cartItems));

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
                <NavLink to="/addtocart" className="mainnav">
                  CartPage
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <Table className="mt-5" bordered responsive="md">
              <thead>
                <tr className="tR text-center">
                  <th className="p-4">Image</th>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Remove</th>
                </tr>
              </thead>
              <tbody className="text-center align-center">
                <tr>
                  <td>
                    <img
                      src={img1}
                      alt="dfsd"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </td>
                  <td>
                    <h4>Shoes </h4>
                  </td>
                  <td>
                    <span>$ 546546</span>
                  </td>
                  <td className="Quantity">1</td>
                  <td>
                    {" "}
                    <span>$ 45435</span>
                  </td>
                  <td className="remove">
                    <i className="fa-solid fa-xmark"></i>
                  </td>
                </tr>
                {/* <CartVie /> */}
              </tbody>
            </Table>
          </Col>
        </Row>

        <div className="my-5 py-4 mx-auto text-end">
          <h1 className="fs-1 text">Cart Totals</h1>

          <div className="d-flex justify-content-end py-2">
            <h3>Subtotal</h3> <span className="ms-5 fs-4 text">$380.00</span>
          </div>
          <div className="d-flex justify-content-end ">
            <h1>Total</h1> <span className="ms-5 fs-2 text">$380.00</span>
          </div>

          <Button variant="danger" className="mt-4">
            PROCEED TO CHECKOUT
          </Button>
        </div>
      </Container>
    </div>
  );
}
