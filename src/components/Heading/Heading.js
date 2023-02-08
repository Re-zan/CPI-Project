import React from "react";
import Container from "react-bootstrap/Container";
export default function Heading(props) {
  return (
    <div>
      <Container>
        <div className="my-5">
          <h2 className="fw-bold fs-2 text ">{props.title}</h2>
          <hr className="border border-dark-subtle h-0"></hr>
        </div>
      </Container>
    </div>
  );
}
