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
            <div className="mx-auto w-100 position-relative search">
              <Form.Control placeholder="Search Items" />{" "}
              <a href="#gdf" className="me-3  position-absolute top-0 end-0">
                <i class="fa-solid fa-magnifying-glass pt-2"></i>
              </a>
            </div>

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
