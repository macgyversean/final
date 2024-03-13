import React, { useState } from "react";
import IMG_8464 from "./Data/Photos/IMG_8464.jpg";
import IMG_8520 from "./Data/Photos/IMG_8520.jpg";
import IMG_8608 from "./Data/Photos/IMG_8608.jpg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const DatePicker = ({ data }) => {
  const [slide, setSlide] = useState(0);
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {data.map((item, index) => {
        return (
          <img
            src={IMG_8464}
            alt={item.alt}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}

      <img
        src={IMG_8464}
        alt="image of mountains at max patch"
        style={{ width: "300px", height: "300px" }}
      />
      <img
        src={IMG_8520}
        alt="image of mountains at max patch"
        style={{ width: "300px", height: "300px" }}
      />
      <img
        src={IMG_8608}
        alt="image of mountains at max patch"
        style={{ width: "300px", height: "300px" }}
      />
      <BsArrowRightCircleFill className="arrow arrow-right" />
      <span className="indicators">
        {data.map((item, index) => {
          return (
            <button key={index} onClick={null} className="indicator"></button>
          );
        })}
      </span>
    </div>
  );
};
export default DatePicker;
