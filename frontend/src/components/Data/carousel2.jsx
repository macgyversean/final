import React from "react";
import "../Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { supabase } from "../../config/supabase.Config";

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
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/connor/DSC07201.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/connor/DSC07748.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/connor/DSC07227.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel1;
