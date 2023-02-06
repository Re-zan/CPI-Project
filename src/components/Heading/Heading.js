import React from "react";
import Container from "react-bootstrap/Container";
export default function Heading() {
  return (
    <div>
      <Container>
        <div className="my-5">
          <h2 className="fw-bold fs-2 text ">Our Recent Products</h2>
          <hr className="border border-dark-subtle h-0"></hr>
        </div>
      </Container>
    </div>
  );
}
