import React from "react";
import "./Card.css";

export const myCard = ({ image }) => {
  return (
    <div className="card-container">
      <img className="image-container" src={image} alt="Card Image" />
      <div className="full-container">
        <div className="card-title">
          <h3>Max Patch</h3>
        </div>
        <div className="btn"></div>
        <button>
          <a>View more</a>
        </button>
      </div>
    </div>
  );
};
export default myCard;
