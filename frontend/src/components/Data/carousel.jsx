import React from "react";
import "../Carousel.css";
import { supabase } from "../../config/supabase.Config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export async function loader() {
  const { data, error } = await supabase.storage
    .from("maxpatch")
    .list("images", {
      transform: {
        width: 100,
        height: 100,
        resize: "contain",
      },
    });
}

const DemoCarousel = () => {
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
    >
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/IMG_8464.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/IMG_8520.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/IMG_8591.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>

      <div>
        <img
          src="https:/hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/maxpatch/IMG_8591.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
