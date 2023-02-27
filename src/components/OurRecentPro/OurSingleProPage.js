import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import Recentproductdata from "../../data/recentprodata";

export default function OurSingleProPage() {
  const { id } = useParams();
  let n_data = Recentproductdata.filter((cur_post) => {
    return cur_post.id == id;
  });

  return (
    <div>
      <Container>
        <Row>
          <Col sm={1} md={6}>
            <img
              className="d-block w-100"
              src={n_data[0].image}
              alt="First slide"
            />
          </Col>
          <Col sm={1} md={6}>
            <div className="content mt-5 pt-5 px-2">
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star text-warning"></i>
              <i className="fa-solid fa-star-half-stroke text-warning"></i>
              <i className="fa-solid fa-star-half-stroke text-warning"></i>
              <h5 className="fs-5 text pt-3">{n_data[0].title}</h5>
              <p className="text-body-tertiary ">{n_data[0].description}</p>
              <p className="fs-4 text fw-bold text-warning-emphasis">
                $150.00{" "}
                <del className="fs-4 text fw-lighter text-body-tertiary">
                  $200.00
                </del>
              </p>
              <button className="btn_pro py-2 px-3">ADD TO CART</button>

              <div className="d-flex justify-content-between py-3 fw-semibold">
                <p>ALREADY SOLD: 20</p>
                <p>AVAILABLE: 40</p>
              </div>
              <p className="fw-semibold">HURRY UP! OFFER ENDS IN:</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
