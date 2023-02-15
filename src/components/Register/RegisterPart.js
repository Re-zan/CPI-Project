import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function RegisterPart() {
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
                  Register
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="my-5 mx-auto w-50 py-5">
          <h2>Register Form</h2>
          <div className="my-3 mx-auto">
            <Form>
              <Form.Group className="mb-3 ">
                <Form.Control
                  placeholder="Name*"
                  className="bg-body-secondary rounded-0 py-3 px-4"
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Control
                  placeholder="Email*"
                  className="bg-body-secondary rounded-0 py-3 px-4"
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Control
                  placeholder="Subject*"
                  className="bg-body-secondary rounded-0 py-3 px-4"
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Control
                  as="textarea"
                  placeholder="Comments*"
                  rows={4}
                  className="bg-body-secondary rounded-0 py-3 px-4"
                />
              </Form.Group>
              <Button variant="dark" className="b p-3">
                Register Now
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
