import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import image1 from "./images/jacket-1.jpg";
import image2 from "./images/jacket-2.jpg";
import image3 from "./images/jacket-3.jpg";
import image4 from "./images/clothes-3.jpg";
import image5 from "./images/clothes-4.jpg";
import ButtonPart from "../CommonUtilti/Button/ButtonPart";

export default function ShopPage() {
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
                <NavLink to="/blog" className="mainnav">
                  Blog
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="w-75 mx-auto my-4">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Jacket">
            <Row className="gy-3">
              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image3}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image3}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>

                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Hodie">
            <Row className="gy-3">
              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image3}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="contact" title="Tops">
            <Row className="gy-3">
              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image4}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>

              <Col sm={1} md={4}>
                <div className="new_pro border border-secondary-subtle rounded">
                  {" "}
                  <img
                    className="d-block w-100"
                    src={image5}
                    alt="First slide"
                  />
                  <div className="p-4">
                    <h5 className="fs-5 text  text-warning-emphasis">Jacket</h5>
                    <h6 className="text-body-tertiary ">
                      Mens Winter Leathers Jackets
                    </h6>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <i class="fa-solid fa-star-half-stroke text-warning fa-sm"></i>
                    <p className="fs-6 text fw-bold ">
                      $150.00{" "}
                      <del className="fs-6 text fw-lighter text-body-tertiary">
                        $200.00
                      </del>
                    </p>
                    <ButtonPart />
                  </div>
                  <div className="overlay ">
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-heart fa-lg"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-eye"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-regular fa-share-from-square"></i>
                    </p>
                    <p className="border border-secondary-subtle rounded p-1">
                      <i class="fa-solid fa-cart-arrow-down"></i>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
