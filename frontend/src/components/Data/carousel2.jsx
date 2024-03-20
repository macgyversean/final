import React from "react";
import "../Carousel.css";
import IMG_7201 from "../Data/Photos/DSC07201.jpg";
import IMG_7748 from "../Data/Photos/DSC07748.jpg";
import IMG_7227 from "../Data/Photos/DSC07227.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export async function loader() {
  const { data, error } = await supabase.storage.from("connor").list("images", {
    transform: {
      width: 100,
      height: 100,
      resize: "contain",
    },
  });
}

const DemoCarousel1 = () => {
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
        <img src={IMG_7201} alt="Picture of mountains at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={IMG_7748} alt="Picture of a tent at Max Patch" />
        <p className="legend"></p>
      </div>
      <div>
        <img src={IMG_7227} alt="Picture of the sunset at Max Patch" />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel1;
