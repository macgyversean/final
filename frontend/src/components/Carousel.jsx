import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import IMG_8464 from "./Data/Photos/IMG_8464.jpg";
import IMG_8520 from "./Data/Photos/IMG_8520.jpg";
import IMG_8608 from "./Data/Photos/IMG_8608.jpg";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src={IMG_8608}
            alt="image of mountains at max patch"
            style={{ width: "300px", height: "300px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={IMG_8464}
            alt="image of mountains at max patch"
            style={{ width: "300px", height: "300px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={IMG_8520}
            alt="image of mountains at max patch"
            style={{ width: "300px", height: "300px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MyCarousel;
