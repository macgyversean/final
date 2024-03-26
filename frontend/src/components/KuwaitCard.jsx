import React, { useState } from "react";
import "./Card.css";
import DemoCarousel from "./Data/carousel";
import ReactDatePicker from "react-datepicker";
import reactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import KuwaitCarousel from "./Data/kuwaitCarousel";

export const KuwaitCard = ({ image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <KuwaitCarousel style={{ width: "100%", height: "100%" }} />
          <div className="full-container">
            <h3>Kuwait</h3>
            <Link to="/KuwaitPage">
              <button id="bottone1">
                <strong>View Gallery</strong>
              </button>
            </Link>
            <Link to="/Form4">
              <button id="bottone1">
                <strong>Book a Date</strong>
              </button>
            </Link>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default KuwaitCard;
