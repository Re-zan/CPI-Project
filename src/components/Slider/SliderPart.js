import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "./images/slider-1.jpg";
import slider2 from "./images/slider-2.webp";
import slider3 from "./images/slider-3.jpg";

export default function SliderPart() {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slider1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
