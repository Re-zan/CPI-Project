import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img4 from "./images/blog-2.jpg";
import img1 from "./images/testimonial-1.jpg";
import { NavLink, useParams } from "react-router-dom";
import blogDatas from "../../data/blogdata";

export default function BLogSinglePart() {
  const { id } = useParams();
  let n_data = blogDatas.filter((cur_post) => {
    return cur_post.id == id;
  });

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
                  {n_data[0].categories}
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <div className=" my-5">
              <h2 className="fs-3 text text-center">{n_data[0].title}</h2>
              <p className="fs-6 text text-dark-emphasis pt-3 text-center">
                By {n_data[0].author} / {n_data[0].date}
              </p>
              <img
                className="d-block w-100"
                src={n_data[0].image}
                alt="First slide"
              />
              <div className="my-3 w-75 mx-auto ">
                <p className="text-center">{n_data[0].description}</p>
                <img
                  className="d-block w-100 my-4"
                  src={img4}
                  alt="First slide"
                />
                <h4> Quality First Impressions.</h4>
                <p>
                  Now that I had the headphones on my head, I was finally ready
                  to plug and play some music. I plugged the provided cable into
                  the jack on the headphones and then the one on my iPhone 6.
                  Then I called up Pandora. I tend to have a very eclectic music
                  purview and have many stations set up for different moods.
                  From John Williams to Fallout Boy, the sound quality of these
                  headphones was remarkable. There is an amazing depth of sound
                  and incredible highs and lows that make listening to music a
                  truly breathtaking experience.
                </p>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation streamlined cloud solution for
                  offshoring.
                </p>

                <div className="my-4   pb-4">
                  <Stack direction="horizontal" gap={3}>
                    <div className="bg-light ">
                      <h6> SHARE THIS ARTICLE</h6>
                    </div>
                    <div className="bg-light  ms-auto">
                      <NavLink to="https://www.facebook.com/">
                        {" "}
                        <i className="fa-brands fa-facebook contactnum"></i>
                      </NavLink>{" "}
                      <NavLink to="https://www.instagram.com/">
                        {" "}
                        <i className="fa-brands fa-square-instagram contactnum"></i>
                      </NavLink>{" "}
                    </div>
                  </Stack>
                </div>

                <div className="my-3 border-top border-bottom py-5  text-start">
                  <Stack direction="horizontal" gap={2}>
                    <div>
                      <img
                        className="d-block w-75  border border-1  rounded-circle"
                        src={img1}
                        alt="First slide"
                      />
                    </div>
                    <div className=" ">
                      <h5>WRITTEN BY: ANNY JOHNSON</h5>
                      <p>
                        She is also the recipient of two playwriting grants from
                        the National Endowment for the Arts and she had short
                        fiction published in the Santa Monica Review. She is
                        also awarded the Julie Harris Playwriting Award for
                        Overnight Lows and the New York Drama League Award for
                        Understatements.
                      </p>
                    </div>
                  </Stack>
                </div>

                <div className="my-3     text-start">
                  <h4>Comments</h4>
                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="my-4 border-bottom py-5"
                  >
                    <div>
                      <img
                        className="d-block w-75  border border-1  rounded-circle"
                        src={img1}
                        alt="First slide"
                      />
                    </div>
                    <div className=" ">
                      <h5>RICKY PONTING</h5>
                      <h6>November 03, 2023 Reply</h6>
                      <p>
                        She is also the recipient of two playwriting grants from
                        the National Endowment for the Arts and she had short
                        fiction published in the Santa Monica Review. She is
                        also awarded the Julie Harris Playwriting Award for
                        Overnight Lows and the New York Drama League Award for
                        Understatements.
                      </p>
                    </div>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="my-4 border-bottom py-5"
                  >
                    <div>
                      <img
                        className="d-block w-75  border border-1  rounded-circle"
                        src={img1}
                        alt="First slide"
                      />
                    </div>
                    <div className=" ">
                      <h5>RICKY PONTING</h5>
                      <h6>November 03, 2023 Reply</h6>
                      <p>
                        She is also the recipient of two playwriting grants from
                        the National Endowment for the Arts and she had short
                        fiction published in the Santa Monica Review. She is
                        also awarded the Julie Harris Playwriting Award for
                        Overnight Lows and the New York Drama League Award for
                        Understatements.
                      </p>
                    </div>
                  </Stack>

                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="my-4 border-bottom py-5"
                  >
                    <div>
                      <img
                        className="d-block w-75  border border-1  rounded-circle"
                        src={img1}
                        alt="First slide"
                      />
                    </div>
                    <div className=" ">
                      <h5>RICKY PONTING</h5>
                      <h6>November 03, 2023 Reply</h6>
                      <p>
                        She is also the recipient of two playwriting grants from
                        the National Endowment for the Arts and she had short
                        fiction published in the Santa Monica Review. She is
                        also awarded the Julie Harris Playwriting Award for
                        Overnight Lows and the New York Drama League Award for
                        Understatements.
                      </p>
                    </div>
                  </Stack>
                </div>

                <div>
                  <h5>LEAVE COMMENTS</h5>

                  <div className="my-3">
                    <Form>
                      <Form.Group className="mb-3 ">
                        <Form.Control
                          placeholder="Name*"
                          className="bg-body-secondary rounded-0 py-4"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3 ">
                        <Form.Control
                          placeholder="Email*"
                          className="bg-body-secondary rounded-0 py-4"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3 ">
                        <Form.Control
                          as="textarea"
                          placeholder="Comments*"
                          rows={3}
                          className="bg-body-secondary rounded-0 py-4"
                        />
                      </Form.Group>
                      <Button variant="dark" className="b p-3">
                        Add Your Review
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
