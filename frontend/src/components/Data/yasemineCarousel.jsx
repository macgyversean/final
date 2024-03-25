import React from "react";
import "../Carousel.css";
import { supabase } from "../../config/supabase.Config";

import { Carousel } from "react-responsive-carousel";

const YasCarousel = () => {
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
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2657.jpg?t=2024-03-20T20%3A56%3A43.800Z"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2665.jpg?t=2024-03-20T20%3A56%3A54.907Z"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2666.jpg?t=2024-03-20T20%3A57%3A03.523Z"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2667.jpg?t=2024-03-20T20%3A57%3A11.675Z"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2709.jpg?t=2024-03-20T20%3A57%3A19.946Z"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>

      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2714.jpg"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2739.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2734.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2827.jpg"
          alt="Picture of mountains at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2740.jpg?t=2024-03-20T20%3A58%3A01.388Z"
          alt="Picture of a tent at Max Patch"
        />
        <p className="legend"></p>
      </div>
      <div>
        <img
          src="https://hhomygevdtpekopdoudb.supabase.co/storage/v1/object/public/yas/1Q8A2748.jpg"
          alt="Picture of the sunset at Max Patch"
        />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default YasCarousel;
