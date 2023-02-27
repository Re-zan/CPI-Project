import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";

export default function ContacParts() {
  return (
    <div>
      {/* <div className="mapss_part">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d29512.993201853533!2d91.80860938020673!3d22.386676707826116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d22.406792!2d91.84158819999999!4m5!1s0x30ad277fb08db245%3A0x150a42dc754753f9!2s9R9M%2B57R%20Bangladesh%20Commerce%20Bank%20Limited%2C%20Mirzapul%20Rd%2C%20Chattogram!3m2!1d22.3679764!2d91.8331644!5e0!3m2!1sen!2sbd!4v1676059385450!5m2!1sen!2sbd"
          className="w-100 mapss"
          allowfullscreen="sdfg"
          loading="lazy"
          title="ufsi"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <Container className="my-5 pb-5">
        <Row>
          <Col sm={12} md={6}>
          <div className="Contact_section py-5 rounded shadow mb-5 bg-body rounded">
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
                    className="fw-normal fs-6 mb-4 px-5"
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
                      className="contact_btn border-0"
                      type="submit"
                      style={{ background: " #c39f57" }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
          </Col>

          <Col sm={12} md={6}>
            <div className="rounded shadow mb-5 bg-body">
              <div className="mapss_part">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d29512.993201853533!2d91.80860938020673!3d22.386676707826116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d22.406792!2d91.84158819999999!4m5!1s0x30ad277fb08db245%3A0x150a42dc754753f9!2s9R9M%2B57R%20Bangladesh%20Commerce%20Bank%20Limited%2C%20Mirzapul%20Rd%2C%20Chattogram!3m2!1d22.3679764!2d91.8331644!5e0!3m2!1sen!2sbd!4v1676059385450!5m2!1sen!2sbd"
                className="w-100 mapss"
                allowfullscreen="sdfg"
                loading="lazy"
                title="ufsi"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
              <div className="d-flex p-5">
                <div>
                  <a href=""><i className="fa-solid fa-store fs-4 me-3 pt-1" style={{ color: "#c39f57" }}></i></a>
                </div>
                <div>
                  <h5 className="fw-semibold fs-4"
                    style={{ color: "#333333" }}>Yan Horizon Store</h5>
                  <p className="fw-normal fs-6"
                    style={{ color: "#6c757d" }}>2no gate, Nasirabad, Chittagong</p>
                  <p className="fw-normal fs-6"
                    style={{ color: "#6c757d" }}>Email: yanhorizon@gmail.com</p>
                  <p className="fw-normal fs-6"
                    style={{ color: "#6c757d" }}>Tel: 01812144345</p>
                </div>
              </div>
              <div className="d-flex pb-5 ps-5">
              <div>
                  <a href=""><i className="fa-solid fa-store fs-4 me-3 pt-1" style={{ color: "#c39f57" }}></i></a>
                </div>
                <div>
                  <h5 className="fw-semibold fs-4"
                    style={{ color: "#333333" }}>Opening Hours</h5>
                  <p className="fw-normal fs-6"
                    style={{ color: "#6c757d" }}>Monday - Friday : 9am - 5pm</p>
                  <p className="fw-normal fs-6"
                    style={{ color: "#6c757d" }}>Weekend Closed</p>
                </div>
              </div>
              
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
