import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import "./BeThe.css";
export default function BeThe() {
  return (
    <div>
      <div className="bth py-5 mt-5">
        <Container>
          <Row className="justify-content-md-center text-center">
            <Col md="auto py-3 pb-4 ">
              <h4 className="fs-3 text text-white ">BE THE FIRST</h4>
              <p className="text-warning-emphasis">
                New arrivals. Exclusive previews. First access to sales. Sign up
                to stay in the know.
              </p>

              <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Your Email" />
                <button className="btn_ui px-3 py-2">Submit</button>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
