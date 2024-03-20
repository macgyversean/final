import React from "react";
import "../Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { supabase } from "../../config/supabase.Config";

export async function loader() {
  const { data, error } = await supabase.storage.from("javi").list("images", {
    transform: {
      width: 100,
      height: 100,
      resize: "contain",
    },
  });
}

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
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC02919.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC02953.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC02970-Edit.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC02989-Edit.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03007.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03024.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03047.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03051.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03054.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03058.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03059.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03066.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03068.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03069.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03200.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/javi/DSC03111.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default JaviCarousel;
