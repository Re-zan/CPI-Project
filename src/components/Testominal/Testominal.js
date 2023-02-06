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

export default function Testominal() {
  return (
    <div>
      <Container>
        <Row className="py-5">
          <Col>
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
          <Col xs={6}>
            <div className="ssd">
              <img
                className="d-block w-100 rounded"
                src={img2}
                alt="First slide"
              />
              <div className="overlay bg-primary">
                <Button variant="dark">Dark</Button>
                <h2>Summer collection</h2>
              </div>
            </div>
          </Col>
          <Col>
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
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
