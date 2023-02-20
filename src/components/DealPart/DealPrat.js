import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import homeimg1 from "./images/KF3.webp";
import "./DealPar.css";
export default function DealPrat() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={1} md={6}>
            <img className="d-block w-100" src={homeimg1} alt="First slide" />
          </Col>
          <Col sm={1} md={6}>
            <div className="content mt-5 pt-5 px-2">
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star-half-stroke text-warning"></i>
              <i class="fa-solid fa-star-half-stroke text-warning"></i>
              <h5 className="fs-5 text pt-3">
                SHAMPOO, CONDITIONER & FACEWASH PACKS
              </h5>
              <p className="text-body-tertiary ">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet consectetur Lorem ipsum dolor
              </p>
              <p className="fs-4 text fw-bold text-warning-emphasis">
                $150.00{" "}
                <del className="fs-4 text fw-lighter text-body-tertiary">
                  $200.00
                </del>
              </p>

              <div className="d-flex justify-content-between py-3 fw-semibold">
                <p>ALREADY SOLD: 20</p>
                <p>AVAILABLE: 40</p>
              </div>
              <p className="fw-semibold">HURRY UP! OFFER ENDS IN:</p>

              <div className="d-flex flex-md-row flex-sm-column gap-3 text-center">
                <div className="bg-body-secondary border rounded p-3">
                  <p className="fs-4 text-black fw-semibold">360</p>
                  <p className="fs-6 text-body-secondary">Days</p>
                </div>

                <div className="bg-body-secondary border rounded p-3">
                  <p className="fs-4 text-black fw-semibold">24</p>
                  <p className="fs-6 text-body-secondary">Hours</p>
                </div>

                <div className="bg-body-secondary border rounded p-3">
                  <p className="fs-4 text-black fw-semibold">59</p>
                  <p className="fs-6 text-body-secondary">Min</p>
                </div>

                <div className="bg-body-secondary border rounded p-3">
                  <p className="fs-4 text-black fw-semibold">00</p>
                  <p className="fs-6 text-body-secondary">Sec</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
