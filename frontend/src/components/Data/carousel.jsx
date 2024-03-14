import React from "react";
import "../Carousel.css";
import IMG_8464 from "../Data/Photos/IMG_8464.jpg";
import IMG_8520 from "../Data/Photos/IMG_8520.jpg";
import IMG_8608 from "../Data/Photos/IMG_8608.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <Carousel
      showlegend={false}
      swipeable={true}
      autoPlay
      interval={10000}
      infiniteLoop
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img src={IMG_8464} alt="Picture of mountains at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={IMG_8520} alt="Picture of a tent at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={IMG_8608} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
