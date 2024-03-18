import React from "react";
import "../Carousel.css";
import img_0172 from "../Data/Photos/DSC00172.jpg";
import img_1088 from "../Data/Photos/DSC01088.jpg";
import img_1227 from "../Data/Photos/DSC01227.jpg";
import img_2191 from "../Data/Photos/DSC02191.jpg";
import img_2207 from "../Data/Photos/DSC02207.jpg";
import img_2607 from "../Data/Photos/DSC02607.jpg";
import img_2659 from "../Data/Photos/DSC02659-2.jpg";
import img_2667 from "../Data/Photos/DSC02667.jpg";
import img_3539 from "../Data/Photos/DSC03539.jpg";
import img_3600 from "../Data/Photos/DSC03600.jpg";
import img_3878 from "../Data/Photos/DSC03878.jpg";
import img_3890 from "../Data/Photos/DSC03890.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel3 = () => {
  return (
    <Carousel
      showlegend={false}
      swipeable={true}
      autoPlay
      interval={3000}
      infiniteLoop
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img src={img_0172} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_1088} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_1227} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2191} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2207} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2607} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2659} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_2667} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3539} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3600} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3878} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={img_3890} alt="Picture of Blake and emily" />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};
export default DemoCarousel3;
