import React, { useState } from "react";
import "./Card.css";
import DemoCarousel from "./Data/carousel";
import ReactDatePicker from "react-datepicker";
import reactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import YasCarousel from "./Data/yasemineCarousel";

export const YasmineCard = ({ image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <YasCarousel />
          <div className="full-container">
            <h3>Fort Mill</h3>
            <Link to="/YasminePage">
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

export default YasmineCard;
