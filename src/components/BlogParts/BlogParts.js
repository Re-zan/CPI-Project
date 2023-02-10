import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import img3 from "./images/blog-1.jpg";
import img4 from "./images/blog-2.jpg";
import img5 from "./images/blog-3.jpg";
import img6 from "./images/blog-4.jpg";
import ButtonPart from "../../components/CommonUtilti/Button/ButtonPart";

export default function BlogParts() {
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

      <Container>
        <Row className=" my-5">
          <Col sm={1} md={8}>
            <div>
              <img className="d-block w-100" src={img3} alt="First slide" />

              <p className="fs-6 text text-dark-emphasis pt-3">
                By Mr Admin / Apr 06, 2022
              </p>
              <h2 className="fs-3 text text-warning-emphasis">
                Where can I get some
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
          </Col>
          <Col sm={1} md={4}>
            <div className=" w-75 position-relative search border-bottom pb-5">
              <Form.Control placeholder="Search Items" />{" "}
              <NavLink to="#" className="me-3  position-absolute top-0 end-0">
                <i class="fa-solid fa-magnifying-glass pt-2"></i>
              </NavLink>
            </div>

            <div className="border-bottom pb-3 mt-4">
              <h3>Categories</h3>

              <NavLink to="/singleblog" className="d-block mainnav ps-0 py-2">
                {" "}
                Fashion
              </NavLink>
              <NavLink to="/singleblog" className="d-block mainnav ps-0 py-2">
                {" "}
                Life Style
              </NavLink>
              <NavLink to="/singleblog" className="d-block mainnav ps-0 py-2">
                {" "}
                Trend
              </NavLink>
              <NavLink to="/singleblog" className="d-block mainnav ps-0 py-2">
                {" "}
                Popular
              </NavLink>
            </div>
          </Col>
        </Row>

        <h2>You May Like It</h2>

        <Carousel variant="dark" className="pb-5">
          <Carousel.Item>
            <Row xs={1} md={4} sm={3} className="g-4 my-4">
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

                      <ButtonPart />
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
                      <ButtonPart />
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
                      <ButtonPart />
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
                      <ButtonPart />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row xs={1} md={4} sm={3} className="g-4 my-4">
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

                      <ButtonPart />
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
                      <ButtonPart />
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
                      <ButtonPart />
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
                      <ButtonPart />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
