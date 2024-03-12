import React from "react";
import ReactDatePicker from "react-datepicker";
import DatePickerCard from "../components/DatePicker";
import { useState } from "react";

const Booking = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div
        className={`card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel">
          {/* Add your carousel images here */}
          <img src="image1.jpg" alt="Image 1" />
          <img src="image2.jpg" alt="Image 2" />
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </div>
      <DatePickerCard />
    </div>
  );
};

export default Booking;
