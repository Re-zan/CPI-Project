import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Testimoinal.css";
import img1 from "./images/testimonial-1.jpg";
import img2 from "./images/cta-banner.jpg";
import img3 from "./images/blog-1.jpg";
import img4 from "./images/blog-2.jpg";
import img5 from "./images/blog-3.jpg";
import img6 from "./images/blog-4.jpg";
import { NavLink } from "react-router-dom";
import ButtonPart from "../CommonUtilti/Button/ButtonPart";
export default function Testominal() {
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
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title className="fs-5 text text-warning-emphasis">
                  Fashion
                </Card.Title>
                <Card.Text>
                  <p className="text-dark">
                    {" "}
                    Clothes Retail KPIs 2021 Guide for Clothes Executives.
                  </p>
                  <p className="fs-6 text text-dark-emphasis">
                    By Mr Admin / Apr 06, 2022
                  </p>
                  <NavLink to="/singleblog" className="btn-pro">
                    <ButtonPart />
                  </NavLink>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title className="fs-5 text text-warning-emphasis">
                  Fashion
                </Card.Title>
                <Card.Text>
                  <p className="text-dark">
                    {" "}
                    Clothes Retail KPIs 2021 Guide for Clothes Executives.
                  </p>
                  <p className="fs-6 text text-dark-emphasis">
                    By Mr Admin / Apr 06, 2022
                  </p>
                  <NavLink to="/singleblog" className="btn-pro">
                    <ButtonPart />
                  </NavLink>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title className="fs-5 text text-warning-emphasis">
                  Fashion
                </Card.Title>
                <Card.Text>
                  <p className="text-dark">
                    {" "}
                    Clothes Retail KPIs 2021 Guide for Clothes Executives.
                  </p>
                  <p className="fs-6 text text-dark-emphasis">
                    By Mr Admin / Apr 06, 2022
                  </p>

                  <NavLink to="/singleblog" className="btn-pro">
                    <ButtonPart />
                  </NavLink>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title className="fs-5 text text-warning-emphasis">
                  Fashion
                </Card.Title>
                <Card.Text>
                  <p className="text-dark">
                    {" "}
                    Clothes Retail KPIs 2021 Guide for Clothes Executives.
                  </p>
                  <p className="fs-6 text text-dark-emphasis">
                    By Mr Admin / Apr 06, 2022
                  </p>
                  <NavLink to="/singleblog" className="btn-pro">
                    <ButtonPart />
                  </NavLink>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
