import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Testimoinal.css";
import img1 from "./images/testimonial-1.jpg";
import img2 from "./images/cta-banner.jpg";

import { NavLink } from "react-router-dom";
import ButtonPart from "../CommonUtilti/Button/ButtonPart";
import blogDatas from "../../data/blogdata";
export default function Testominal() {
  const BlogCard = () => {
    return blogDatas.map((items) => {
      return (
        <Col>
          <Card>
            <Card.Img variant="top" src={items.image} className="w-100" />
            <Card.Body>
              <Card.Title className="fs-5 text text-warning-emphasis">
                {items.categories}
              </Card.Title>
              <Card.Text>
                <p className="text-dark"> {items.title}</p>
                <p className="fs-6 text text-dark-emphasis">
                  {items.author} / {items.date}
                </p>
                <NavLink to={`/singleblog/${items.id}`} className="btn-pro">
                  <ButtonPart />
                </NavLink>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div>
      <Container>
        <Row className="py-5 gy-4">
          <Col sm={1} md={3}>
            <h3 className="fs-5 text ">Testimonial</h3>
            <hr className="border border-dark-subtle h-0"></hr>

            <div className="text-center border border-1 rounded py-5 px-3">
              <img
                className="d-block w-25 h-50 border rounded-circle mx-auto "
                src={img1}
                alt="First slide"
              />
              <h3 className="pt-4">ALAN DOE</h3>
              <p>CEO & Founder Invision</p>
              <h4 className="fs-2 text">""</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet.
              </p>
            </div>
          </Col>
          <Col sm={1} md={6}>
            <div
              className="ssd d-flex justify-content-center broder rounded align-items-center "
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="text-center bg-white p-5 border rounded border-0 opacity-75">
                <Button variant="dark">25% Discount</Button>
                <a href="#fhf">
                  <h5 className="text-dark pt-2">Summer collection</h5>
                </a>
                <a href="#fhf" className="text-light-emphasis">
                  SHOP NOW
                </a>
              </div>
            </div>
          </Col>
          <Col sm={1} md={3}>
            <h3 className="fs-5 text ">Testimonial</h3>
            <hr className="border border-dark-subtle h-0"></hr>

            <div className="text-center border border-1 rounded py-5 px-3">
              <img
                className="d-block w-25 h-50 border rounded-circle mx-auto "
                src={img1}
                alt="First slide"
              />
              <h3 className="pt-4">ALAN DOE</h3>
              <p>CEO & Founder Invision</p>
              <h4 className="fs-2 text">""</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet.
              </p>
            </div>
          </Col>
        </Row>

        <Row xs={1} md={4} sm={1} className="g-4">
          <BlogCard />
        </Row>
      </Container>
    </div>
  );
}
