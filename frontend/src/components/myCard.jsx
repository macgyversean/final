import React, { useState } from "react";
import "./Card.css";
import DemoCarousel from "./Data/carousel";
import ReactDatePicker from "react-datepicker";

export const myCard = ({ image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card">
        <div className="front">
          <DemoCarousel />
          <div className="full-container">
            <h3>Max Patch</h3>
            <button>
              <a>View more</a>
            </button>
          </div>
        </div>
        <div className="back">
          <ReactDatePicker />
        </div>
      </div>
    </div>
  );
};

export default myCard;
