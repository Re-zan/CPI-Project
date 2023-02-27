import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import FooterPart from "../Footer/FooterPart";
import Mainnavbarpart from "../Mainnavbar/Mainnavbarpart";
import TopMenu from "../Topmenubar/TopMenu";
import Topsearch from "../Topsearchbar/Topsearch";

function MainLogin() {
  return (
    <>
      <TopMenu />
      <Topsearch />
      <Mainnavbarpart />
      <div style={{ background: "#eef0f0" }} className="py-5">
        <Container>
          <Row>
            <Col sm={12} md={6} className="m-auto">
              <div className="Contact_section py-5 rounded shadow p-5 bg-body rounded">
                <div className="Contact_text d-flex justify-content-around mb-5 pb-4 border-bottom">
                  <div>
                    <NavLink
                      to="/login"
                      className="fw-bolder fs-5"
                      style={{ color: "#333333" }}
                    >
                      LOGIN
                    </NavLink>
                  </div>
                </div>
                <Form className="">
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label className="fw-normal fs-6">
                      Email address *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label className="fw-normal fs-6">
                      Password *
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your email Password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>

                  <div className="w-25 m-auto text-center">
                    <Button
                      className="contact_btn fw-bolder"
                      type="submit"
                      style={{ background: " #c39f57" }}
                    >
                      LOGIN
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterPart />
    </>
  );
}

export default MainLogin;
