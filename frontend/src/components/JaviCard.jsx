import React, { useState } from "react";
import "./Card.css";
import DemoCarousel from "./Data/carousel";
import ReactDatePicker from "react-datepicker";
import reactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import JaviCarousel from "./Data/javiCarousel";
export const JaviCard = ({ image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="front">
          <JaviCarousel />
          <div className="full-container">
            <h3>Sarasota</h3>
            <Link to="/JaviPage">
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

export default JaviCard;
