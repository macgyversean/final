import React from "react";
import "../Carousel.css";
import { supabase } from "../../config/supabase.Config";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export async function loader() {
  const { data, error } = await supabase.storage.from("home").list("images", {
    transform: {
      width: 100,
      height: 100,
      resize: "contain",
    },
  });
}

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
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC01227.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC01088.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC01227.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02191.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02207.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02607.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02659-2.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC02667.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC03539.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC03600.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC03878.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/home/DSC03890.jpg"
          alt="Picture of Blake and emily"
        />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};
export default DemoCarousel3;
