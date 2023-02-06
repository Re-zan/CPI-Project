import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import "./Topsearch.css";

export default function Topsearch() {
  return (
    <>
      <div className="topsearch">
        <Container>
          <Stack direction="horizontal" gap={3} className="my-4">
            <Form.Control className="me-auto " placeholder="Search Items" />

            <div className="search-icons d-flex">
              {" "}
              <span className="me-4">
                <i class="fa-solid fa-user"></i>
              </span>
              <span className="me-4 position-relative">
                <i class="fa-regular fa-heart">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </i>
              </span>
              <span className="me-4 position-relative">
                <i class="fa-solid fa-cart-arrow-down">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                    99+
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </i>
              </span>{" "}
            </div>
          </Stack>
        </Container>
      </div>
    </>
  );
}
