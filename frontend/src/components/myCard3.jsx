import React, { useState } from "react";
import "./Card.css";
import ReactDatePicker from "react-datepicker";
import reactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import DemoCarousel3 from "./Data/carousel3";

export const MyCard2 = ({ image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <DemoCarousel3 />
          <div className="full-container">
            <h3>Florida</h3>
            <Link to="/Form">
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

export default MyCard2;
