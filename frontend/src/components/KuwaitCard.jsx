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
              <button>
                <p>View Gallery</p>
              </button>
            </Link>
            <Link to="/Form4">
              <button>
                <p>Book a date</p>
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
