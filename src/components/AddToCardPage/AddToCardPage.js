import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./AddToCard.css";
import img1 from "./images/products/1.jpg";
import img2 from "./images/products/2.jpg";
export default function AddToCardPage() {
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
                  <th className="p-4">Serial No</th>
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
                  <td>1</td>
                  <td>
                    <img src={img1} alt="dfsd" className="h-25 w-25" />
                  </td>
                  <td>
                    {" "}
                    <h4>It is a long established fact that a</h4>
                  </td>
                  <td>
                    {" "}
                    <span>$200</span>
                  </td>
                  <td className="Quantity">
                    <i class="fa-solid fa-minus"></i>
                    <span>1</span>
                    <i class="fa-solid fa-plus"></i>
                  </td>
                  <td>
                    {" "}
                    <span>$2000</span>
                  </td>
                  <td className="remove">
                    <i class="fa-solid fa-xmark"></i>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <img src={img2} alt="dfsd" className="h-25 w-25" />
                  </td>
                  <td>
                    {" "}
                    <h4>It is a long established fact that a</h4>
                  </td>
                  <td>
                    {" "}
                    <span>$200</span>
                  </td>
                  <td className="Quantity">
                    <i class="fa-solid fa-minus"></i>
                    <span>1</span>
                    <i class="fa-solid fa-plus"></i>
                  </td>
                  <td>
                    {" "}
                    <span>$2000</span>
                  </td>
                  <td className="remove">
                    <i class="fa-solid fa-xmark"></i>
                  </td>
                </tr>
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
