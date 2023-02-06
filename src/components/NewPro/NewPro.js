import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NewPro.css";
import image1 from "./images/jacket-1.jpg";
import image2 from "./images/jacket-2.jpg";
import image3 from "./images/jacket-3.jpg";

export default function NewPro() {
  return (
    <div>
      <Container>
        {" "}
        <Row className="gy-3">
          <Col sm={1} md={4}>
            <div className="new_pro border border-secondary-subtle rounded">
              {" "}
              <img className="d-block w-100" src={image1} alt="First slide" />
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
              <img className="d-block w-100" src={image2} alt="First slide" />
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
              <img className="d-block w-100" src={image3} alt="First slide" />
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
              <img className="d-block w-100" src={image3} alt="First slide" />
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
              <img className="d-block w-100" src={image1} alt="First slide" />
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
      </Container>
    </div>
  );
}
