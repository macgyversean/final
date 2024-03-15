import React, { useState } from "react";
import "./Card.css";
import DemoCarousel from "./Data/carousel";
import ReactDatePicker from "react-datepicker";
import reactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";

export const myCard = ({ image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <DemoCarousel />
          <div className="full-container">
            <h3>Max Patch</h3>
            <Link to="/Form">
              <button>
                <a>Book a date</a>
              </button>
            </Link>
          </div>
        </div>
        <div className="back"></div>
      </div>
    </div>
  );
};

export default myCard;
