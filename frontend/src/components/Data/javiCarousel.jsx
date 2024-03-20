import React from "react";
import "../Carousel.css";
import img_2919 from "./javi/DSC02919.jpg";
import img_2953 from "./javi/DSC02953.jpg";
import img_2970 from "./javi/DSC02970-Edit.jpg";
import img_2989 from "./javi/DSC02989-Edit.jpg";
import img_2990 from "./javi/DSC02989.png";
import img_3007 from "./javi/DSC03007.jpg";
import img_3024 from "./javi/DSC03024.jpg";
import img_3047 from "./javi/DSC03047.jpg";
import img_3051 from "./javi/DSC03051.jpg";
import img_3054 from "./javi/DSC03054.jpg";
import img_3058 from "./javi/DSC03058.jpg";
import img_3059 from "./javi/DSC03059.jpg";
import img_3066 from "./javi/DSC03066.jpg";
import img_3068 from "./javi/DSC03068.jpg";
import img_3069 from "./javi/DSC03069.jpg";
import img_3200 from "./javi/DSC03200.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const JaviCarousel = () => {
  return (
    <Carousel
      showSlide={false}
      showlegend={true}
      swipeable={true}
      autoPlay
      interval={3000}
      infiniteLoop
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={90}
      dynamicHeight={true}
    >
      <div>
        <img src={img_2919} alt="Picture of a tent at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2953} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2970} alt="Picture of mountains at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2989} alt="Picture of a tent at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2990} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3007} alt="Picture of mountains at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3024} alt="Picture of a tent at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3047} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3051} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3054} alt="Picture of mountains at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3058} alt="Picture of a tent at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3059} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3068} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3066} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3069} alt="Picture of mountains at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3200} alt="Picture of a tent at Max Patch" />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default JaviCarousel;
