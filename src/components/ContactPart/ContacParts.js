import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";

export default function ContacParts() {
  return (
    <div>
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
      <Container>
        <div className=" my-5">
          <h2>Contact US</h2>
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
                  as="textarea"
                  placeholder="Comments*"
                  rows={4}
                  className="bg-body-secondary rounded-0 py-3 px-4"
                />
              </Form.Group>
              <Button variant="dark" className="b p-3">
                Add Your Review
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
