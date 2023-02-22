import React from "react";
import "../Contact/css/style.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function MainContact() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <div className="Contact_section py-5 rounded m-4 shadow p-3 mb-5 bg-body rounded">
                <div className="Contact_text text-center">
                  <h4
                    className="fw-bolder fs-4 mb-2"
                    style={{ color: "#c39f57" }}
                  >
                    NEED HELP?
                  </h4>
                  <h1
                    className="fw-bolder fs-1 mb-3"
                    style={{ color: "#333333" }}
                  >
                    Contact With Us
                  </h1>
                  <p
                    className="fw-normal fs-6 mb-4"
                    style={{ color: "#6c757d" }}
                  >
                    If you have any questions, just fill in the contact form,
                    and we will answer you shortly.
                  </p>
                </div>
                <Form className="">
                  <Form.Group
                    className="mb-3 w-75 m-auto"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="fw-normal fs-5">
                      Full Name:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Full Name"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 w-75 m-auto"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="fw-normal fs-5">
                      Email Address:
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 w-75 m-auto"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="fw-normal fs-5">Mobile:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 w-75 m-auto"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="fw-normal fs-5">Subject:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone subject"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 w-75 m-auto"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="fw-normal fs-5">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Write your message here"
                      rows={3}
                    />
                  </Form.Group>

                  <div className="w-25 m-auto text-center">
                    <Button
                      className="contact_btn"
                      type="submit"
                      style={{ background: " #c39f57" }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <iframe
                title="Google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.964916662291!2d101.5907773140895!3d3.10397645429592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c226050b1b3%3A0x3eb9a71661e400ee!2sEbony%20Haus%20Sdn%20Bhd!5e0!3m2!1sen!2sbd!4v1676100843332!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
