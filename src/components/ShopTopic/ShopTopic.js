import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Shoptopic.css";
import img1 from "./imges/1.jpg";
import img2 from "./imges/2.jpg";
import img3 from "./imges/3.jpg";
import img4 from "./imges/4.jpg";

export default function ShopTopic() {
  return (
    <>
      <Container>
        <Row className="my-5">
          <Col sm={1} md={3}>
            <div className="border rounded p-3 d-flex ">
              <img
                className="d-block w-25 border rounded me-2"
                src={img1}
                alt="Third slide"
              />

              <div className="shopcontent ">
                <div className="d-flex">
                  <h4 className="fs-6 text me-5 fw-semibold">DRESS & FROCK</h4>
                  <span className="fs-6 text">[53]</span>
                </div>
                <button className="btn_shopt">Show ALL</button>
              </div>
            </div>
          </Col>

          <Col sm={1} md={3}>
            <div className="border rounded p-3 d-flex ">
              <img
                className="d-block w-25 border rounded me-2"
                src={img2}
                alt="Third slide"
              />

              <div className="shopcontent ">
                <div className="d-flex">
                  <h4 className="fs-6 text me-5 fw-semibold">DRESS & FROCK</h4>
                  <span className="fs-6 text">[53]</span>
                </div>
                <button className="btn_shopt">Show ALL</button>
              </div>
            </div>
          </Col>

          <Col sm={1} md={3}>
            <div className="border rounded p-3 d-flex ">
              <img
                className="d-block w-25 border rounded me-2"
                src={img3}
                alt="Third slide"
              />

              <div className="shopcontent ">
                <div className="d-flex">
                  <h4 className="fs-6 text me-5 fw-semibold">DRESS & FROCK</h4>
                  <span className="fs-6 text">[53]</span>
                </div>
                <button className="btn_shopt">Show ALL</button>
              </div>
            </div>
          </Col>

          <Col sm={1} md={3}>
            <div className="border rounded p-3 d-flex ">
              <img
                className="d-block w-25 border rounded me-2"
                src={img4}
                alt="Third slide"
              />

              <div className="shopcontent ">
                <div className="d-flex">
                  <h4 className="fs-6 text me-5 fw-semibold">DRESS & FROCK</h4>
                  <span className="fs-6 text">[53]</span>
                </div>
                <button className="btn_shopt">Show ALL</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
